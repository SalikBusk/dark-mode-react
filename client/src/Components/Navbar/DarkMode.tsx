import React from "react";
import useDarkMode from "../../Hooks/useDarkMode";

const DarkMode = () => {
  const { theme, toggleTheme } = useDarkMode();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div className="flex flex-row items-center gap-3">
      <div
        className={`p-2 rounded-full cursor-pointer ${
          theme === "dark" ? "bg-[#fff]" : "bg-[#333]"
        }`}
        onClick={handleToggleTheme}
      ></div>
      <span>{theme === "dark" ? "dark" : "light"}</span>
    </div>
  );
};

export default DarkMode;
