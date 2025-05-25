import React, { createContext, useContext, useState } from 'react';

// Create a new context
export const ActiveSectionContext = createContext();

export default function ActiveSectionContextProvider({ children }) {
    // Initialize state for active section
    const [activeSection, setActiveSection] = useState('accueil');
    const [timeOfLastclick, setTimeOfLastClick] = useState(0);
    return (
        // Provide the context value to its children
        <ActiveSectionContext.Provider
            value={{ activeSection, setActiveSection, timeOfLastclick, setTimeOfLastClick }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

// Custom hook to consume the ActiveSectionContext
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within the ActiveSectionContextProvider"
        )
    }
    return context
}
