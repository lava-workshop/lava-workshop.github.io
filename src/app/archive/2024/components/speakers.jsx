import PersonAvatar from "./person-avatar";

const Speakers = () => {
    return (
        <div>
            <div className="grid grid-cols-1 mt-4 gap-4">
                <div>
                    <PersonAvatar
                        name="Asim Munawar"
                        image="/AsimMunawar.jpg"
                        affiliation="IBM Research, US"
                    />
                    <p>
                        <b>LLM-Based Reasoning: Opportunities and Pitfalls</b>
                        <br />
                        The question of whether Large Language Models (LLMs) can reason is both complex and crucial. While LLMs have demonstrated capabilities in informal reasoning, their potential extends far beyond, particularly in advancing explainable AI and the development of intelligent agents. In this talk, I will explore the reasoning abilities of LLMs and discuss the ongoing efforts at IBM to enhance these capabilities in IBM granite models by using knowledge and tool-assisted synthetic data generation.
                        <div className="flex items-center justify-center" style={{ marginTop: '20px' }}>
                            <iframe width="800" height="450" 
                                src="https://www.youtube.com/embed/sPEwVTOtAZ0?si=arutFlbg7pIzQLaK"
                                title="YouTube video player"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </p>
                </div>

                <div>
                    <PersonAvatar
                        name="April Pyone Maung Maung"
                        image="/Maung.jpg"
                        affiliation="National Institute of Informatics, Japan"
                    />
                    <p>
                        <b>Adversarial Attacks and Defenses on Vision-Language Models</b>
                        <br />
                        Robustness research aims to build machine learning models that are resilient to unpredictable accidents (black swans and tail risk robustness) and carefully crafted and deceptive threats (adversarial robustness). In this talk, I shall focus on the adversarial robustness of vision-language models (VLMs). Specifically, I shall cover recent attacks and defenses on two kinds of VLMs: vision-language pre-trained models like CLIP and vision-conditioned LLMs like LLaVA. The talk will focus on discussing whether existing attacks are practical and what the challenges and opportunities of adversarial machine learning research are in the space of vision-language models.
                        <div className="flex items-center justify-center" style={{ marginTop: '20px' }}>
                            <iframe width="800" height="450"
                                src="https://www.youtube.com/embed/YMif9UhjGtk?si=xOB5QvDWLGnZ3FBq"
                                title="YouTube video player"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Speakers;
