"use client";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

const NewSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        // If a theme preference is found in local storage, use it
        if (savedTheme) {
            setTheme(savedTheme);
            setChecked(savedTheme === "dark");
        } else {
            // Otherwise, use the default theme
            const defaultTheme = theme === "dark";
            setTheme(defaultTheme ? "dark" : "light");
            setChecked(defaultTheme);
        }

        setMounted(true);
    }, [theme, setTheme]);

    // Handle theme mode toggle
    const toggleTheme = () => {
        const newTheme = checked ? "light" : "dark";
        setTheme(newTheme);
        setChecked(!checked);

        // Save theme preference to local storage
        localStorage.setItem("theme", newTheme);
    };

    if (!mounted) return null;

    return (
        <label className="relative inline-block w-14 h-8">
            <input
                type="checkbox"
                className="opacity-0 w-0 h-0"
                checked={checked}
                onChange={toggleTheme}
            />
            <span
                className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 transition rounded-full ${checked ? "bg-gray-700" : ""
                    }`}
            ></span>
            <span
                className={`absolute content-none h-7 w-7 rounded-full left-1 top-1/2 transform -translate-y-1/2 transition ${checked ? "left-6 bg-gray-700" : "bg-gradient-to-r from-pink-500 to-orange-500"
                    } ${checked ? "shadow-[inset_-3px_-2px_5px_-2px_#8983f7,inset_-10px_-4px_0_0_#a3dafb]" : ""}`}
            ></span>
        </label>
    );
};

export default NewSwitcher;
