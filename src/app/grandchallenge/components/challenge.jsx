import Image from "next/image";

const Challenge = () => {
    return (
        <div className="text-justify">
            {/*            <p>
           This workshop challenge aims to push the boundaries of what is possible with LLMs and LVLMs in interpreting and transcribing graphical data. By leveraging the TASUKI benchmark dataset, participants will contribute to significant advancements in Graph2Text technologies, with potential applications in various domains requiring accurate and detailed visual data interpretation. We invite AI researchers, data scientists, and practitioners with interest and experience in natural language processing, computer vision, and multimodal learning to join this workshop challenge. Participants can register as individuals or teams.
            <br/>
            <br/>
            More information will come soon. Please stay tuned.

            </p> */}

            <div>
                <span className="font-bold">Challenge Overview:</span> The primary goal of this challenge is to advance the capability of Large Vision-Language Models to accurately interpret and understand complex visual data such as Data Flow Diagrams (DFDs), Class Diagrams, Gantt Charts, and Building Design Drawings. 
                We invite AI researchers, data scientists, and practitioners with interest and experience in natural language processing, computer vision, and multimodal learning to join this grand challenge. 
                Participants can register as individuals or teams. 
                They are required to develop a model that can answer questions related to the input data.
                This year, we invite participants to solve the problem of Japanese government-related and business documents.
                Each document will be in pdf format which is associated with 10-choice question.

                
                <br/>
                <span className="font-bold text-[1.3em]"><a href='https://forms.gle/WJVWbfdaksxn4BQq5' className="underline text-[1.4em] text-[#232ba1]">Register your team here!</a></span>.
                <br />
                
                
                {/* Below, we provide a few samples. 

                <br />
                <div className="flex sm:flex-row flex-col">
                    <Image src="/sample1.png" width={600} height={250} />
                    <Image src="/sample2.png" width={500} height={250} />
                    
                </div>
                <Image src="/sample3.png" width={500} height={250} /> */}

                <p className="font-bold mt-5">Datasets:</p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><span className="font-bold">Public dataset:</span> We re-annontate publicly available JDocQA dataset,resulting in about 300 samples. The annotation format is provided later.</li>
                    <li><span className="font-bold">Private dataset:</span> We collect data by ourselves and annotate in the same manner with the public data.</li>
                </ul>
                <p className="font-bold mt-5">We note that all data are for research purposes only under CC-BY-NC (商用利用不可) license. We appreciate your understanding and cooporation.</p>
{/*               
                <br />

                <span className="font-bold">Metric:</span>
                <br />
                We will evaluate using accuracy.

                <br />

                <span className="font-bold">Final score = 0.3 * Public dataset + 0.7 * Private dataset </span>

                {/*<br />
                <span className="font-bold">Results</span>
                <br/>

                <table>
                  <tr>
                    <th>Team Name</th>
                    <th>Public score</th>
                    <th>Privare score</th>
                    <th>Final score</th>
                  </tr>
                  <tr>
                    <td>WAS</td>
                    <td>0.85</td>
                    <td>0.85</td>
                    <td>0.85</td>
                  </tr>
                  <tr>
                    <td>MMLAB-UIT</td>
                    <td>0.83</td>
                    <td>0.84</td>
                    <td>0.84</td>
                  </tr>
                  <tr>
                    <td>V1olet</td>
                    <td>0.82</td>
                    <td>0.82</td>
                    <td>0.82</td>
                  </tr>
                </table>

                <br /> */}

                <br />

                <span className="font-bold">Prizes and Travel Grants:</span>
                Travel grants and Prizes will be announced later.


                <br />

                <span className="font-bold">Computational Resources:</span>
                Participants from the University of Tokyo may use SoftBank Beyond AI SANDBOX GPUs.</div>
{/*                 <br/>
                <span className="font-bold "><a href='https://cmt3.research.microsoft.com/LAVA2024' className="underline text-[1.4em] text-[#232ba1]">Submit your report here</a></span>.
                <br />
                <span className="font-bold"><a href='https://www.codabench.org/competitions/3587' className="underline text-[1.4em] text-[#232ba1]">Submit your results here </a></span>
                <br /> */}

        </div>
    )
}
export default Challenge;
