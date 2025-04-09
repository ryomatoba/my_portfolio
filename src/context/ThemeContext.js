import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // ユーザーの設定を読み込む
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      // ユーザーのシステム設定を確認
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // ダークモード状態が変更されたら保存とスタイル適用
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // モード切替の関数
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};