// src/App.tsx (修正)
import { Routes, Route } from "react-router-dom"; // Routes と Route をインポート
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage"; // 作成したHomePageをインポート
import PortfolioDetail from "./pages/PortfolioDetail.tsx"; // 作成する詳細ページをインポート (.tsx を追加)

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes> {/* Routesで囲む */}
          <Route path="/" element={<HomePage />} /> {/* ホームページ */}
          <Route path="/portfolio/:projectId" element={<PortfolioDetail />} /> {/* 詳細ページ */}
          {/* 必要に応じて404ページなどを追加 */}
          <Route path="*" element={<HomePage />} /> {/* Not Found時はホームへ */}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
