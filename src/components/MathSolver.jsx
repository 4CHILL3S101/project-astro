
import React, { useState,useEffect } from "react";
import { Atom } from 'react-loading-indicators';
import ApiRequests from "../functions/ApiRequest"
import ReactMarkdown from 'react-markdown'
export default function MathSolverComponent() {
    const [typing, setTyping] = useState(true);
    const [prompt, setPrompt] = useState("");
    const [typedMessage, setTypedMessage] = useState("");
    const [isSent, setIsSent] = useState(false);

    const [messages, setMessages] = useState([]);

  useEffect(() => {
      const fullMessage = "Welcome Buddy, This is Astro! Your math solver assistant. How can I help you?"; 
      let index = 0;

      const interval = setInterval(() => {
        setTypedMessage(fullMessage.slice(0, index + 1));
        index++;
        if (index === fullMessage.length) {
          clearInterval(interval);
          setMessages((prev) => [
            ...prev,
            { text: fullMessage, type: "received" },
          ]);
          setTypedMessage("");
          setTyping(false);
        }
      }, 15); 
      return () => clearInterval(interval);
    
  }, []);


  const handleSendMessage = async () => {
    const newMessage = { text: prompt, type: "sent" };
    setMessages((prev) => [...prev, newMessage]);
    setTyping(true);
    setPrompt("");
    setIsSent(true);
    
    try {
        const response = await ApiRequests.getApiResponse(prompt, "math");
        setMessages((prev) => [
            ...prev,
            { text: response, type: "received" },
        ]);
        setTypedMessage("");
        setTyping(false);
    } catch (error) {
        setTypedMessage("Something went wrong, please try again.");
        console.error("Error sending message:", error);
    } finally {
        setTimeout(() => {
            setIsSent(false);
        }, 2000);
    }
};


    
    return (
      <div className="chat-container">
        <div className="chat-window">
          <div className="messages">
              
                {typedMessage && (
                    <div className="received">
                    <p>{typedMessage}<span className="cursor">|</span></p>
                    </div>
                )}

                {messages.map((message, index) => (
                    <div
                    key={index}
                    className={message.type === "received" ? "received" : "sent"}
                    >
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                    </div>
                ))}


                 {isSent ? (
                 <div className="LoadingAnimation"> <Atom color="#ffffff" size="small" text="" textColor="" /> </div>
                     ) : (
                    <div  style={{ color: "white",marginTop: "50px",alignContent: "center",textAlign: "center"}}> 
                        <i>
                            Note : Please be respectful and avoid using any abusive language.
                        </i>
                    </div>
                )
          }
          </div>
         
         

          <div className="input-area">
            <input
              type="text"
              placeholder="Type your message..."
              className="message-input"
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
            />

           
               <button className="send-button" onClick={handleSendMessage} disabled={!prompt}>Send</button>
           
          </div>
        </div>
      </div>
    );
  }
  