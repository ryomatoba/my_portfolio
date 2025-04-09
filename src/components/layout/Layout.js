import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeContext } from '../../context/ThemeContext';

const Layout = ({ children }) => {
  // ThemeContextがまだ設定されていない場合は通常のレンダリングを行う
  const theme = useContext(ThemeContext) || { darkMode: false };
  const { darkMode } = theme;
  
  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;