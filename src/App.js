import { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import bars from './bars.svg';

function App() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

   return (
    <main>
      <header>
      <a href="./">
        <img src={logo} alt="" aria-hidden />
      </a>
      <h1>Controle Financeiro</h1>
        <button
          onClick={() => toggleMenu()}
          className="menu-toggle"
          id="menu-toggle"
          aria-label="Main menu"
          aria-expanded={menu}
        >
          <img src={bars} alt="" aria-hidden />
        </button>
        <nav
          aria-labelledby="menu-label"
          className={`menu ${menu ? 'menu--open' : ''}`}
        >
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </main>
  );
}

export default App;