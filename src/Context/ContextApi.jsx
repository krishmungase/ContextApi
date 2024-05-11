import { createContext, useState } from "react";

export const ContextApi = createContext();

export default function AppContextApi({ children }) {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(prev => prev + 1)
    }
    function decrement() {
        setCount(prev => prev - 1)
    }

    const value = {
        increment,
        decrement,
        count
    };

    return <ContextApi.Provider value={value}>
        {children}
    </ContextApi.Provider>
}
