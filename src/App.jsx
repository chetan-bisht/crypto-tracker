import { BrowserRouter,Route,Routes } from "react-router";
import { Home } from "./pages/Home";
import { CoinDetail } from "./pages/CoinDetail";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');// Toggle between 'dark' and 'light' themes
  };
return (
  <div className={theme === 'light' ? 'light-theme' : ''}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home toggleTheme={toggleTheme} theme={theme} />}/>
        <Route path="/coin/:id" element={<CoinDetail toggleTheme={toggleTheme} theme={theme} />}/>
      </Routes>
    </BrowserRouter>
  </div>
)
}

export default App
