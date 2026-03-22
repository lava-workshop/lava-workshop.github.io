const AcceptedPapers = () => {
    return (
        <div className="text-justify">
            
            <span className="font-bold text-[1.3em]">Workshop Proceedings</span>
            <ol className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>Jiadong Yan, Quan Zhang, Yifan Zhou, Tianle Yang, Ke Zhang: Few-shot Anomaly Detection based on Long Short Text Interactive Contrastive Learning</li>
                <li>Anwar Dilawar Shaikh, Janak Kapuriya, Arnav Goel, Medha Hira, Apoorv Singh, Jay Saraf, Sanjana Sanjeev, Vaibhav Nauriyal, Avinash Anand, Zhengkui Wang, Rajiv Ratn Shah: Enhancing Scientific Visual Question Answering via Vision-Caption aware Supervised Fine-Tuning</li>
                <li>Tun-Yuan Chang, Kenneth Chandra, Cheng-Hsin Hsu: Harvesting Temporal Correlation in Large Vision-Language Models: Using Pose Estimation as a Case Study</li>
            </ol>
            <span className="font-bold text-[1.3em]">Fast Track</span>
            <ol start="5" className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>Phuoc-Nguyen Bui, Khanh-Binh Nguyen, Hyunseung Choo: Accelerating Conditional Prompt Learning via Masked Image Modeling for Vision-Language Models</li>
            </ol> 
            <span className="font-bold text-[1.3em]">Non-archieved Paper</span>
            <ol start="5" className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>Song-Li Wu: LAMDA: Leveraging Multi-Scale and Dynamic Alignment for Robust Referring Video Object Segmentation</li>
                <li>Jun, Kexin Lv, An Guo: Hierarchical Temporal Views for Policy Optimization in Multimodal Video Reasoning</li>
                <li>Song-Li Wu: Bridging the Modal Gap: A Targeted Patch Refinement and Residual Preservation Framework for Efficient Referring Expression Segmentation</li>
            </ol>  

        </div>
    )
}
export default AcceptedPapers;
