import { create } from "zustand";
import axios from "axios";

interface AuthState {
    addToWaitList: (formData: object) => Promise<boolean>;
    addingUser: boolean;
    message: string;
    error: string;
    resetMessages: () => void;
}

export const authStore = create<AuthState>((set) => ({
    addingUser: false,
    message: "",
    error: "",
    
    resetMessages: () => set({ message: "", error: "" }),
    
    addToWaitList: async (formData: object) => {
        set({ addingUser: true, error: "" });
        try {
            const response = await axios.post(
                "http://localhost:9000/api/v1/waitlist/add",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true
                }
            );
            
            set({ 
                message: response.data.message || "You've been added to our waitlist!",
                error: "",
                addingUser: false 
            });
            return true
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 
                               error.response?.data?.error || 
                               error.message || 
                               "Failed to join waitlist. Please try again.";
            
                               console.error("Error adding to waitlist:", errorMessage);
            set({ 
                error: errorMessage,
                message: "",
                addingUser: false 
            });

            return false;
        }
    }
}));