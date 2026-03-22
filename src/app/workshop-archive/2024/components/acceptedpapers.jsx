const AcceptedPapers = () => {
    return (
        <div className="text-justify">
            
            <span className="font-bold text-[1.3em]">Workshop track</span>
            <ol className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>Duc-Tuan Luu, Viet-Tuan Le, Duc Minh Vo: Questioning, Answering, and Captioning for Zero-Shot Detailed Image Caption</li>
                <li>Rento Yamaguchi, Kenji Yanai: Exploring Cross-Attention Maps in Multi-modal Diffusion Transformers for Training-Free Semantic Segmentation</li>
                <li>Viet-Tham Huynh, Trong-Thuan Nguyen, Thao Thi Phuong Dao, Tam V. Nguyen, Minh-Triet Tran: DermAI: A Chatbot Assistant for Skin lesion Diagnosis Using Vision and Large Language Models</li>
                <li>Felix Hsieh, Huy Hong Nguyen, April Pyone Maung Maung, Dmitrii Usynin, Isao Echizen: Mitigating Backdoor Attacks using Activation-Guided Model Editing</li>
            </ol>
            <span className="font-bold text-[1.3em]">Challenge track</span>
            <ol start="5" className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>(1st prize) Thanh-Son Nguyen, Viet-Tham Huynh, Van-Loc Nguyen, Minh-Triet Tran: An Approach to Complex Visual Data Interpretation with Vision-Language Models</li>
                <li>(2nd prize) Gia-Nghia Tran, Duc-Tuan Luu, Dang-Van Thin: Exploring Visual Multiple-Choice Question Answering with Pre-trained Vision-Language Models</li>
                <li>(3rd prize) Trong Hieu Nguyen Mau, Binh Truc Nhu Nguyen, Vinh Nhu Hoang, Minh-Triet Tran, Hai-Dang Nguyen: Enhancing Visual Question Answering with Pre-trained Vision-Language Models: An Ensemble Approach at the LAVA Challenge 2024</li>
            </ol>               

        </div>
    )
}
export default AcceptedPapers;
