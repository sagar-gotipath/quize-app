import { createContext, useState } from "react";
import "./App.css";
import Certificate from "./components/Certificate";
import QuizWrapper from "./components/QuizWrapper";
import UserForm from "./components/UserForm";
import Video from "./components/Video";

export const AppContext = createContext();

function App() {
    const [componentIndex, setComponentIndex] = useState(0);
    return (
        <AppContext.Provider value={{ setComponentIndex: setComponentIndex }}>
            <>
                {componentIndex === 0 && <UserForm />}
                {componentIndex === 1 && <Video />}
                {componentIndex === 2 && <QuizWrapper />}
                {componentIndex === 3 && <Certificate />}
            </>
        </AppContext.Provider>
    );
}

export default App;
