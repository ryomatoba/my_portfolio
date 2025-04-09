import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const themeContext = useContext(ThemeContext);
  
  // ThemeContextがまだ設定されていない場合のデフォルト値
  const { darkMode, toggleDarkMode } = themeContext || { darkMode: false, toggleDarkMode: () => {} };

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">的場 陵</span>
        </Link>
        
        <div className="navbar-right">
          <button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? "ライトモードに切り替え" : "ダークモードに切り替え"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
        
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                ホーム
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                プロフィール
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/projects" 
                className={`nav-link ${location.pathname.includes('/projects') ? 'active' : ''}`}
              >
                実績
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/skills" 
                className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}
              >
                スキル
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;