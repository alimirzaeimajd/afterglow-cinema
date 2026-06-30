import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import MoviesPage from "./pages/MoviesPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/anime" element={<PlaceholderPage title="Anime" />} />
          <Route path="/tv-series" element={<PlaceholderPage title="TV Series" />} />
          <Route path="/lists" element={<PlaceholderPage title="Lists" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
