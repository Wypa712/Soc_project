import { useState } from "react";
import styles from "./style.module.scss";

const GradeBar = ({ data, onSelectVariant, index }) => {
    const { block, scores } = data;
    const [activeParagraph, setActiveParagraph] = useState(null);
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (scoreIndex) => {
        if (activeButton === scoreIndex) {
            setActiveButton(null);
            setActiveParagraph(null);
        } else {
            setActiveButton(scoreIndex);
            setActiveParagraph(scoreIndex);
        }

        // Отправляем выбранный вариант в Main через onSelectVariant
        onSelectVariant(index, data.grade, scores[scoreIndex].paragraph);

    };  

    return (
        <div className={styles.gradeBar}>
            
            <h2 className={styles.title}><strong>{block}</strong></h2>
            <div className={styles.body}>
                <div className={styles.buttonsContainer}>
                    {scores.map((scoreData, scoreIndex) => (
                        <button
                            key={scoreIndex}
                            className={`${styles.btn} ${activeButton === scoreIndex ? styles.activeBtn : ''}`}
                            onClick={() => handleButtonClick(scoreIndex)}
                        >
                            {scoreData.score}
                        </button>
                    ))}
                </div>

                {activeParagraph !== null && (
                    <p className={`${styles.variant} ${styles.active}`}>
                        {scores[activeParagraph].paragraph}
                    </p>
                )}
            </div>
        </div>
    );
};

export default GradeBar;
