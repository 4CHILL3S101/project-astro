import Prompts from "../prompts/general"
import api from "../middleware/request/auth"
import validatePrompt from "../middleware/request/promptValidator"
export default class ApiRequests extends Prompts{

    static general = new Prompts().generalPrompt();
    static essay = new Prompts().essayWriterPrompt();
    static code = new Prompts().codeAssistantPrompt();
    static assistant = new Prompts().virtualAssistantPrompt();
    static language = new Prompts().languageLearningPrompt();
    static mathsolver = new Prompts().mathProblemSolverPrompt();
    static coach = new Prompts().coachAssistantPrompt() 
    
    

    static async getApiResponse(prompt,type) {
        try{
        const { isValid, message } = await validatePrompt(prompt);
        if (!isValid) {
            console.error("Invalid prompt:", message);
            return message; 
        }
        
        let promptType = await this.typeIdentifier(type);
        let promptData = `${promptType} Task:${prompt}`;
        
        const response = await api.post("/chat/completions",{
            model: "deepseek/deepseek-r1:free",
            messages: [{ role: "system", content: promptData }],
            temperature: 0.7,
        });
        console.log("API Response:", response.data.choices[0].message.content);
        return response.data.choices[0].message.content;}catch (error) {
        console.error("Error fetching API response:", error);
        throw error; 
        }
    }


   static async typeIdentifier(type) {
        switch (type) {
            case "general":
                return this.general;
            case "essay":
                return this.essay;
            case "code":
                return this.code;
            case "assistant":
                return this.assistant;
            case "language":
                return this.language;
            case "math":
                return this.mathsolver;
            case "coach":
                return this.coach;
            default:
                return this.general;
        }
    }
    
}