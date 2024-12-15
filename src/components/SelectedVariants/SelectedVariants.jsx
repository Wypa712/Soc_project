import React from "react";
import styles from "./style.module.scss";

const SelectedVariants = ({ selectedVariants }) => {
    return (
        <div className={styles.selectedVariants}>
            <h3>Отримані результати:</h3>
            {selectedVariants.length > 0 ? (
                <ul>
                    {selectedVariants.map((variant, index) => (
                        <li key={index}>
                            <strong>Згідно групі результатів по темі "{variant.grade}",</strong> учень/учениця:
                            <p>{variant.paragraph}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Ви ще нічого не обрали.</p>
            )}
        </div>
    );
};

export default SelectedVariants;
