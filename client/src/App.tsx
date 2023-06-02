import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light')
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`${theme}`}>
      <section className='w-full h-screen flex flex-col items-center justify-center'>
        <button onClick={toggleTheme} className="bg-rose-500 py-[10px] px-[20px] rounded-[10px]">Toggle Theme</button>
        <h1>Hello world</h1>
      </section>
    </div>
  );
}

export default App;
