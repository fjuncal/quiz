//letra minuscula para diferenciar de componente
import { createContext } from "react";

export const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({children}) => {
    const value = {name: "Quiz"};
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}