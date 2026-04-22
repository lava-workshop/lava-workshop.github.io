const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 9000;
const ADMIN_PASSWORD = 'vmdlab2026';
const DATA_DIR = path.join(__dirname, '../_data');
const PAGES_DIR = path.join(__dirname, '../_pages');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'vmdlab-secret-key', resave: false, saveUninitialized: false }));

function requireAuth(req, res, next) {
  if (req.session.loggedIn) return next();
  res.redirect('/admin/login');
}

function readYaml(file) {
  try { return yaml.load(fs.readFileSync(path.join(DATA_DIR, file), 'utf8')) || []; }
  catch { return []; }
}
function writeYaml(file, data) {
  fs.writeFileSync(path.join(DATA_DIR, file), yaml.dump(data, { lineWidth: -1 }));
}
function readPage(file) {
  try { return fs.readFileSync(path.join(PAGES_DIR, file), 'utf8'); }
  catch { return ''; }
}
function writePage(file, content) {
  fs.writeFileSync(path.join(PAGES_DIR, file), content);
}
function extractFrontMatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { frontMatter: '', body: raw };
  return { frontMatter: m[1], body: m[2] };
}

function layout(title, body) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<title>${title} - VMD Admin</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
*{box-sizing:border-box}
body{font-family:Inter,-apple-system,sans-serif;background:#f1f5f9;margin:0}
nav{background:#01305f;color:white;padding:0 28px;display:flex;align-items:center;gap:16px;height:54px;position:sticky;top:0;z-index:10}
nav a{color:rgba(255,255,255,0.8);text-decoration:none;font-size:13px;font-weight:500;padding:6px 10px;border-radius:6px}
nav a:hover{background:rgba(255,255,255,0.15);color:white}
.brand{font-weight:700;font-size:16px;color:white;margin-right:8px}
.logout{margin-left:auto!important}
.main{max-width:920px;margin:32px auto;padding:0 20px}
h1{font-size:22px;color:#01305f;margin-bottom:20px}
h2{font-size:15px;color:#334155;margin:24px 0 10px}
.card{background:white;border-radius:12px;border:1px solid #e2e8f0;padding:22px;margin-bottom:18px;box-shadow:0 2px 8px rgba(0,0,0,0.04)}
label{display:block;font-size:12px;font-weight:600;color:#475569;margin-bottom:4px;text-transform:uppercase;letter-spacing:.04em}
input[type=text],input[type=url],textarea,select{width:100%;padding:9px 12px;border:1px solid #e2e8f0;border-radius:8px;font-size:13px;font-family:inherit;margin-bottom:12px;background:#f8fafc}
textarea{resize:vertical}
.btn{display:inline-block;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:none;text-decoration:none}
.btn-primary{background:#01305f;color:white}.btn-primary:hover{background:#0a5a9c}
.btn-danger{background:#fee2e2;color:#dc2626}.btn-danger:hover{background:#fecaca}
.btn-sm{padding:5px 12px;font-size:12px}
.btn-gray{background:#f1f5f9;color:#334155}
.item{border:1px solid #f1f5f9;border-radius:10px;padding:12px 16px;margin-bottom:8px;background:#fafafa}
.item-title{font-weight:600;font-size:13px;color:#1e293b}
.item-meta{font-size:12px;color:#94a3b8;margin-top:2px}
.item-actions{display:flex;gap:8px;margin-top:8px}
.tag{display:inline-block;background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:12px;padding:2px 9px;font-size:11px;font-weight:600;margin-right:3px}
.tag-gold{background:#fef9c3;color:#854d0e;border-color:#fde68a}
.success{background:#f0fdf4;border:1px solid #bbf7d0;color:#166534;padding:12px 16px;border-radius:8px;margin-bottom:18px;font-size:13px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.full{grid-column:1/-1}
details summary{cursor:pointer;font-weight:600;font-size:14px;color:#01305f;padding:4px 0}
.stat{font-size:28px;font-weight:800;color:#01305f;margin:8px 0}
</style></head><body>
<nav>
  <span class="brand">🛠 VMD Admin</span>
  <a href="/admin">Dashboard</a>
  <a href="/admin/news">News</a>
  <a href="/admin/publications">Publications</a>
  <a href="/admin/research">Research</a>
  <a href="/admin/home">Home</a>
  <a href="/admin/logout" class="logout">Logout →</a>
</nav>
<div class="main">${body}</div>
</body></html>`;
}

// Login
app.get('/admin/login', (req, res) => {
  res.send(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>VMD Admin</title>
<style>*{box-sizing:border-box}body{font-family:Inter,sans-serif;background:#f1f5f9;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
.card{background:white;padding:40px;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.1);width:320px}
h2{margin:0 0 24px;color:#01305f;font-size:20px}
input{width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;margin-bottom:14px}
button{width:100%;padding:12px;background:#01305f;color:white;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer}
button:hover{background:#0a5a9c}.err{color:#ef4444;font-size:13px;margin-bottom:10px}</style>
</head><body><div class="card">
<h2>🔐 VMD Admin</h2>
${req.query.err ? '<p class="err">Incorrect password</p>' : ''}
<form method="POST" action="/admin/login">
<input type="password" name="password" placeholder="Password" autofocus />
<button type="submit">Sign In</button>
</form></div></body></html>`);
});
app.post('/admin/login', (req, res) => {
  if (req.body.password === ADMIN_PASSWORD) { req.session.loggedIn = true; res.redirect('/admin'); }
  else res.redirect('/admin/login?err=1');
});
app.get('/admin/logout', (req, res) => { req.session.destroy(); res.redirect('/admin/login'); });

// Dashboard
app.get('/admin', requireAuth, (req, res) => {
  const news = readYaml('news.yml');
  const pubs = readYaml('publist.yml');
  res.send(layout('Dashboard', `
    <h1>Dashboard</h1>
    <div class="grid2">
      <div class="card"><div class="item-title">📰 News</div><div class="stat">${news.length}</div><a href="/admin/news" class="btn btn-primary btn-sm">Manage</a></div>
      <div class="card"><div class="item-title">📄 Publications</div><div class="stat">${pubs.length}</div><a href="/admin/publications" class="btn btn-primary btn-sm">Manage</a></div>
      <div class="card"><div class="item-title">🔬 Research Page</div><div style="font-size:13px;color:#64748b;margin:6px 0">Awards, funding, projects</div><a href="/admin/research" class="btn btn-primary btn-sm">Edit</a></div>
      <div class="card"><div class="item-title">🏠 Home Page</div><div style="font-size:13px;color:#64748b;margin:6px 0">Intro text &amp; bio</div><a href="/admin/home" class="btn btn-primary btn-sm">Edit</a></div>
    </div>
    <div class="card"><b>⚡ Tip:</b> <span style="font-size:13px;color:#64748b">Jekyll auto-rebuilds after each save. Refresh <a href="http://localhost:4001" target="_blank">localhost:4001</a> to preview.</span></div>
  `));
});

// NEWS
app.get('/admin/news', requireAuth, (req, res) => {
  const news = readYaml('news.yml');
  const saved = req.query.saved ? '<div class="success">✅ Saved!</div>' : '';
  const items = news.map((n, i) => `<div class="item">
    <div class="item-title">${n.date||''}</div>
    <div class="item-meta">${(n.headline||'').substring(0,120)}</div>
    <div class="item-actions">
      <a href="/admin/news/edit/${i}" class="btn btn-primary btn-sm">Edit</a>
      <a href="/admin/news/delete/${i}" class="btn btn-danger btn-sm" onclick="return confirm('Delete?')">Delete</a>
    </div></div>`).join('');
  res.send(layout('News', `<h1>📰 News</h1>${saved}
    <div class="card"><h2 style="margin-top:0">Add Item</h2>
    <form method="POST" action="/admin/news/add">
      <label>Date</label><input type="text" name="date" placeholder="e.g. &lt;b&gt;Apr 2026&lt;/b&gt;" />
      <label>Headline</label><textarea name="headline" style="min-height:80px" placeholder="1 paper accepted to CVPR 2026."></textarea>
      <button class="btn btn-primary" type="submit">Add</button>
    </form></div>
    <h2>All Items (${news.length})</h2>${items}`));
});
app.post('/admin/news/add', requireAuth, (req, res) => {
  const news = readYaml('news.yml');
  news.unshift({ date: req.body.date, headline: req.body.headline });
  writeYaml('news.yml', news);
  res.redirect('/admin/news?saved=1');
});
app.get('/admin/news/edit/:i', requireAuth, (req, res) => {
  const news = readYaml('news.yml');
  const i = parseInt(req.params.i), n = news[i];
  res.send(layout('Edit News', `<h1>Edit News</h1><div class="card">
    <form method="POST" action="/admin/news/edit/${i}">
      <label>Date</label><input type="text" name="date" value="${(n.date||'').replace(/"/g,'&quot;')}" />
      <label>Headline</label><textarea name="headline" style="min-height:100px">${n.headline||''}</textarea>
      <button class="btn btn-primary" type="submit">Save</button>
      <a href="/admin/news" class="btn btn-gray" style="margin-left:8px">Cancel</a>
    </form></div>`));
});
app.post('/admin/news/edit/:i', requireAuth, (req, res) => {
  const news = readYaml('news.yml');
  const i = parseInt(req.params.i);
  news[i] = { date: req.body.date, headline: req.body.headline };
  writeYaml('news.yml', news);
  res.redirect('/admin/news?saved=1');
});
app.get('/admin/news/delete/:i', requireAuth, (req, res) => {
  const news = readYaml('news.yml');
  news.splice(parseInt(req.params.i), 1);
  writeYaml('news.yml', news);
  res.redirect('/admin/news?saved=1');
});

// PUBLICATIONS
app.get('/admin/publications', requireAuth, (req, res) => {
  const pubs = readYaml('publist.yml');
  const saved = req.query.saved ? '<div class="success">✅ Saved!</div>' : '';
  const items = pubs.map((p, i) => `<div class="item">
    <div class="item-title">${(p.title||'').substring(0,80)}</div>
    <div class="item-meta">${p.authors||''}</div>
    <div style="margin-top:4px"><span class="tag">${p.link?.display||''}</span>${p.highlight?'<span class="tag tag-gold">★ Highlight</span>':''}</div>
    <div class="item-actions">
      <a href="/admin/publications/edit/${i}" class="btn btn-primary btn-sm">Edit</a>
      <a href="/admin/publications/delete/${i}" class="btn btn-danger btn-sm" onclick="return confirm('Delete?')">Delete</a>
    </div></div>`).join('');
  res.send(layout('Publications', `<h1>📄 Publications</h1>${saved}
    <div class="card"><details><summary>➕ Add New Publication</summary><br>
    <form method="POST" action="/admin/publications/add">
      <div class="grid2">
        <div class="full"><label>Title</label><input type="text" name="title" /></div>
        <div class="full"><label>Authors (use &lt;b&gt;name&lt;/b&gt; for bold)</label><input type="text" name="authors" /></div>
        <div><label>Venue / Display</label><input type="text" name="link_display" placeholder="CVPR 2026" /></div>
        <div><label>URL</label><input type="url" name="link_url" /></div>
        <div><label>Image (images/pubpic/)</label><input type="text" name="image" /></div>
        <div><label>Highlight</label><select name="highlight"><option value="1">Yes</option><option value="0">No</option></select></div>
        <div class="full"><label>Description</label><textarea name="description"></textarea></div>
        <div class="full"><label>News/Project</label><input type="text" name="news2" placeholder="See [Project page](https://...)" /></div>
      </div>
      <button class="btn btn-primary" type="submit">Add</button>
    </form></details></div>
    <h2>All Publications (${pubs.length})</h2>${items}`));
});
app.post('/admin/publications/add', requireAuth, (req, res) => {
  const pubs = readYaml('publist.yml');
  pubs.unshift({ title:req.body.title, image:req.body.image, description:req.body.description, authors:req.body.authors, link:{url:req.body.link_url,display:req.body.link_display}, highlight:parseInt(req.body.highlight), news2:req.body.news2 });
  writeYaml('publist.yml', pubs);
  res.redirect('/admin/publications?saved=1');
});
app.get('/admin/publications/edit/:i', requireAuth, (req, res) => {
  const pubs = readYaml('publist.yml');
  const i = parseInt(req.params.i), p = pubs[i];
  const v = s => (s||'').replace(/"/g,'&quot;').replace(/</g,'&lt;');
  res.send(layout('Edit Publication', `<h1>Edit Publication</h1><div class="card">
    <form method="POST" action="/admin/publications/edit/${i}">
      <div class="grid2">
        <div class="full"><label>Title</label><input type="text" name="title" value="${v(p.title)}" /></div>
        <div class="full"><label>Authors</label><input type="text" name="authors" value="${v(p.authors)}" /></div>
        <div><label>Venue Display</label><input type="text" name="link_display" value="${v(p.link?.display)}" /></div>
        <div><label>URL</label><input type="url" name="link_url" value="${p.link?.url||''}" /></div>
        <div><label>Image filename</label><input type="text" name="image" value="${v(p.image)}" /></div>
        <div><label>Highlight</label><select name="highlight"><option value="1" ${p.highlight==1?'selected':''}>Yes</option><option value="0" ${p.highlight!=1?'selected':''}>No</option></select></div>
        <div class="full"><label>Description</label><textarea name="description">${v(p.description)}</textarea></div>
        <div class="full"><label>News/Project</label><input type="text" name="news2" value="${v(p.news2)}" /></div>
      </div>
      <button class="btn btn-primary" type="submit">Save</button>
      <a href="/admin/publications" class="btn btn-gray" style="margin-left:8px">Cancel</a>
    </form></div>`));
});
app.post('/admin/publications/edit/:i', requireAuth, (req, res) => {
  const pubs = readYaml('publist.yml');
  const i = parseInt(req.params.i);
  pubs[i] = { title:req.body.title, image:req.body.image, description:req.body.description, authors:req.body.authors, link:{url:req.body.link_url,display:req.body.link_display}, highlight:parseInt(req.body.highlight), news2:req.body.news2 };
  writeYaml('publist.yml', pubs);
  res.redirect('/admin/publications?saved=1');
});
app.get('/admin/publications/delete/:i', requireAuth, (req, res) => {
  const pubs = readYaml('publist.yml');
  pubs.splice(parseInt(req.params.i), 1);
  writeYaml('publist.yml', pubs);
  res.redirect('/admin/publications?saved=1');
});

// RESEARCH
app.get('/admin/research', requireAuth, (req, res) => {
  const raw = readPage('research.md');
  const { body } = extractFrontMatter(raw);
  const saved = req.query.saved ? '<div class="success">✅ Saved!</div>' : '';
  res.send(layout('Research', `<h1>🔬 Research Page</h1>${saved}<div class="card">
    <label>Content (Markdown)</label>
    <textarea id="rb" style="min-height:420px;font-family:monospace;font-size:12px">${body.replace(/</g,'&lt;')}</textarea>
    <button class="btn btn-primary" onclick="save('/admin/research','rb')">Save</button>
  </div>
  <script>function save(url,id){fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({body:document.getElementById(id).value})}).then(()=>location.href=url+'?saved=1')}</script>`));
});
app.post('/admin/research', requireAuth, (req, res) => {
  const raw = readPage('research.md');
  const { frontMatter } = extractFrontMatter(raw);
  writePage('research.md', `---\n${frontMatter}\n---\n${req.body.body}`);
  res.json({ ok: true });
});

// HOME
app.get('/admin/home', requireAuth, (req, res) => {
  const raw = readPage('home.md');
  const { body } = extractFrontMatter(raw);
  const saved = req.query.saved ? '<div class="success">✅ Saved!</div>' : '';
  res.send(layout('Home', `<h1>🏠 Home Page</h1>${saved}<div class="card">
    <label>Content (Markdown/HTML)</label>
    <textarea id="hb" style="min-height:420px;font-family:monospace;font-size:12px">${body.replace(/</g,'&lt;')}</textarea>
    <button class="btn btn-primary" onclick="save('/admin/home','hb')">Save</button>
  </div>
  <script>function save(url,id){fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({body:document.getElementById(id).value})}).then(()=>location.href=url+'?saved=1')}</script>`));
});
app.post('/admin/home', requireAuth, (req, res) => {
  const raw = readPage('home.md');
  const { frontMatter } = extractFrontMatter(raw);
  writePage('home.md', `---\n${frontMatter}\n---\n${req.body.body}`);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`\n✅ VMD Admin: http://localhost:${PORT}/admin`);
  console.log(`🔑 Password: ${ADMIN_PASSWORD}\n`);
});
