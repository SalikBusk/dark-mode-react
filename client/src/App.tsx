import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={theme}>
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <div
          className={`p-3 rounded-full cursor-pointer ${theme === 'dark' ? "bg-[#fff]" : "bg-[#333]"}`}
          onClick={toggleTheme}
        >
        </div>
        <h1 className="text-5xl">Hello world</h1>
      </section>
    </div>
  );
}

export default App;
