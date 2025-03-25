import { create } from 'zustand';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  addMessage: (text: string, sender: 'user' | 'bot') => void;
  clearMessages: () => void;
}

const generateResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('tax') || lowerMessage.includes('taxes')) {
    return "Our tax planning services help minimize your tax liability while ensuring compliance. Would you like to schedule a consultation with our tax experts?";
  }
  
  if (lowerMessage.includes('invest') || lowerMessage.includes('portfolio')) {
    return "Our investment management team uses AI-driven analysis to create personalized investment strategies. We can help you build and manage a portfolio that aligns with your goals and risk tolerance.";
  }
  
  if (lowerMessage.includes('budget') || lowerMessage.includes('save')) {
    return "Our budgeting and savings solutions help you track expenses, set financial goals, and build wealth. Would you like to learn more about our personalized budgeting tools?";
  }
  
  if (lowerMessage.includes('retire') || lowerMessage.includes('retirement')) {
    return "Our retirement planning services help ensure a secure future. We consider factors like your age, goals, and risk tolerance to create a comprehensive retirement strategy.";
  }
  
  if (lowerMessage.includes('insurance')) {
    return "Our insurance advisory services help protect your assets and loved ones. We can analyze your needs and recommend the most suitable insurance products.";
  }
  
  if (lowerMessage.includes('debt') || lowerMessage.includes('loan')) {
    return "Our debt management solutions help you develop strategies to reduce debt and improve your financial health. Would you like to discuss your specific situation?";
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('speak')) {
    return "You can reach us at contact@kupana-finance.com or call us at +1 (555) 123-4567. Would you like me to help you schedule a consultation?";
  }
  
  return "I'm here to help with any questions about our financial services. Feel free to ask about our tax planning, investment management, budgeting, retirement planning, insurance advisory, or debt management services.";
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [
    {
      id: '1',
      text: "Hello! I'm your AI Financial Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ],
  addMessage: (text, sender) => {
    set((state) => {
      const newMessages = [
        ...state.messages,
        {
          id: Math.random().toString(36).substr(2, 9),
          text,
          sender,
          timestamp: new Date(),
        },
      ];

      if (sender === 'user') {
        const botResponse = generateResponse(text);
        newMessages.push({
          id: Math.random().toString(36).substr(2, 9),
          text: botResponse,
          sender: 'bot',
          timestamp: new Date(),
        });
      }

      return { messages: newMessages };
    });
  },
  clearMessages: () => set({ messages: [] }),
}));