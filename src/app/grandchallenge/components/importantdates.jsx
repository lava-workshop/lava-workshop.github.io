const ImportantDates = () => {
    return <div className="text-justify">
        
        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
            <li>Challenge track opened: <span className="font-bold">2024/8/15</span></li>
            <li>Test set released:  <span className="font-bold">2024/8/30</span></li>
            <li>Challenge track closed: <span className="font-bold">2024/9/30</span></li>
            <li>Regular paper submission deadline: <span className="font-bold">2024/9/30</span></li>
            <li>Challenge track paper submission deadline: <span className="font-bold">2024/10/15</span></li>
            <li>
                    Acceptance notification:&nbsp;
                    <span style={{textDecoration: 'line-through'}}>2024/10/30</span>
                    <span className="font-bold"> 2024/10/18</span>
                </li>
                <li>
                    Camera-ready deadline:&nbsp;
                    <span style={{textDecoration: 'line-through'}}>2024/11/15</span>
                    <span className="font-bold"> 2024/10/20</span>
                </li>
            <li>Workshop date: <span className="font-bold">2024/12/8 (Afternoon)</span></li>
        </ul>
    </div>
}
export default ImportantDates;
