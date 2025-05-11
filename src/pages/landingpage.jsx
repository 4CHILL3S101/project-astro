import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    
    const handleRedirect = () => {
        console.log("Button clicked, navigating to /home");
        navigate("/home");
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Astro</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-xl">
          Astro is your personal chatbot assistant, designed to simulate helpful and human-like conversations.
        </p>
        <button onClick={handleRedirect} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300">
          Chat with Astro
        </button>
      </div>
    );
  }
  