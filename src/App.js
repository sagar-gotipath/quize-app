import "./App.css";
import Certificate from "./components/Certificate";
import QuizWrapper from "./components/QuizWrapper";
import UserForm from "./components/UserForm";
import Video from "./components/Video";

function App() {
    return (
        <div className="container">
            <Video />
            <UserForm />
            <QuizWrapper />
            <Certificate />
        </div>
    );
}

export default App;
