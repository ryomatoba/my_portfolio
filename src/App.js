import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ThemeProvider } from './context/ThemeContext';

// ページインポート
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

import './styles/global.css';

function App() {
  // GitHub Pagesでの動作用にbasename設定
  // プロジェクト名がURLに含まれるようにする
  const basename = process.env.PUBLIC_URL || '';

  return (
    <ThemeProvider>
      <Router basename={basename}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404ページ（オプション） */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;