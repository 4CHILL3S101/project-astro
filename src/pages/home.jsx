import SidebarComponent from "../components/sidebar";
import React, { useState } from 'react';
import "../styles/styles.css";
import ChatComponent from "../components/maincomponent"
import EssayComponent from "../components/EssayComponent"
import CodeComponent from "../components/CodeAssistant";
import LanguageComponent from "../components/LanguageAssistant";
import CoachComponent from "../components/CoachAssistant";
import MathSolverComponent from "../components/MathSolver";
export default function HomePage() {
  const [activeComponent, setActive] = useState("general-bot");


  const currentActiveComponent = () => {
    switch (activeComponent) {
      case "general-bot":
        return <ChatComponent />;
      case "essay-bot":
        return <EssayComponent />;
      case "math-bot":
        return <MathSolverComponent />;
      case "code-bot":
        return <CodeComponent />;
      case "language-bot":
        return <LanguageComponent />;
        case "coach-bot":
        return <CoachComponent />;
      default:
        return <ChatComponent />;
    }
  }

  return (
    <div className="page-container">
    <div className="sidebar">
      <SidebarComponent setActive={setActive}/>
    </div>
    <div className="main-content">
     
      {currentActiveComponent()}
    </div>
  </div>
  );
}
