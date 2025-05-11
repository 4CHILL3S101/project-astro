export default async function validatePrompt(prompt) {
    const maxLength = 10000;
    const minLength = 10;
  
    if (prompt.length > maxLength) {
      return {
        isValid: false,
        message: `Prompt exceeds maximum length of ${maxLength} characters.`,
      };
    }
  
    if (prompt.length < minLength) {
      return {
        isValid: false,
        message: `Prompt must be at least ${minLength} characters long.`,
      };
    }
  
    const gibberishPattern = /^[a-z]{10,}$/i;
    const hasNoSpaces = !/\s/.test(prompt);
    const commonWordCheck = /\b(the|and|what|how|why|is|are|you|can|do|please|this)\b/i;
  
    if (gibberishPattern.test(prompt) && hasNoSpaces && !commonWordCheck.test(prompt)) {
      return {
        isValid: false,
        message: `Prompt appears to be gibberish. Please enter a meaningful question or prompt.`,
      };
    }
  
    return { isValid: true, message: "Prompt is valid." };
  }
  