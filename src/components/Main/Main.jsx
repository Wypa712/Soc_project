import React, { useState } from "react";
import GradeBar from "../GradeBar/GradeBar"; 
import SelectedVariants from "../SelectedVariants/SelectedVariants"; // Новый компонент для отображения выбранных вариантов

import grade from "./../data/grade.json"; // Подключаем данные с оценками
import "./style.scss"; // Подключаем стили

const Main = () => {
    const [selectedVariants, setSelectedVariants] = useState([]); // Для хранения всех выбранных вариантов
    const [showVariants, setShowVariants] = useState(false); // Для управления видимостью выбранных вариантов

    // Функция для обработки выбора варианта
    const handleSelectVariant = (index, grade, paragraph) => {
        const updatedVariants = [...selectedVariants];
        updatedVariants[index] = { grade, paragraph }; // Используем grade, а не score
        setSelectedVariants(updatedVariants);
    };    

    const handleShowVariantsClick = () => {
        setShowVariants((prev) => !prev); // Показываем или скрываем выбранные варианты
    };

    return (
        <main className="main">
            <div className="container">
                <div className="main__body">
                    {grade.map((item, index) => {
                        return (
                            <GradeBar
                                data={item}
                                key={index}
                                index={index} // Передаем индекс для замены в массиве
                                onSelectVariant={handleSelectVariant} // Передаем функцию для обработки выбора
                            />
                        );
                    })}
                <button 
                    className="showVariantsButton"
                    onClick={handleShowVariantsClick}
                >
                    {showVariants ? "Згорнути" : "Сформувати характеристику навчальних досягнень"}
                </button>
                </div>

                
                {showVariants && (
                    <SelectedVariants selectedVariants={selectedVariants} />
                )}
            </div>
        </main>
    );
};

export default Main;
