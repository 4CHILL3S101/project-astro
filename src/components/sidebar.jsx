import { useState } from 'react'; 
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function SidebarComponent({ setActive }) {
  const [activeTab, setActiveTab] = useState(""); 

  const handleTabClick = (tab) => {
    setActive(tab);
    setActiveTab(tab); 
  };

  return (
    <Sidebar>
      <Menu>
        <SubMenu label="Chatbot Models">
          <MenuItem onClick={() => handleTabClick("general-bot")}
            className={activeTab === "general-bot" ? "active" : ""} 
          >
            General Chatbot
          </MenuItem>
          <MenuItem onClick={() => handleTabClick("essay-bot")}
            className={activeTab === "essay-bot" ? "active" : ""} 
          >
            Essay Writer
          </MenuItem>
          <MenuItem onClick={() => handleTabClick("math-bot")}
            className={activeTab === "math-bot" ? "active" : ""}
          >
            Math Solver Chatbot
          </MenuItem>
          <MenuItem onClick={() => handleTabClick("code-bot")}
            className={activeTab === "code-bot" ? "active" : ""} 
          >
            Code Assistant
          </MenuItem>
          <MenuItem onClick={() => handleTabClick("language-bot")}
            className={activeTab === "language-bot" ? "active" : ""} 
          >
            Language Learning Chatbot
          </MenuItem>
          <MenuItem onClick={() => handleTabClick("coach-bot")}
            className={activeTab === "coach-bot" ? "active" : ""} 
          >
            Coach Chatbot
          </MenuItem>
        </SubMenu>
        <MenuItem onClick={() => handleTabClick("settings")}
          className={activeTab === "settings" ? "active" : ""} 
        >
          Settings
        </MenuItem>
     
      </Menu>
    </Sidebar>
  );
}
