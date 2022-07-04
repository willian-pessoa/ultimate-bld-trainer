import "./app.styles.scss"
import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/layout/layout.component";

//pages
import EdgesPage from "./pages/edges/edges.page";
import CornersPage from "./pages/corners/corners.page";
import HomePage from "./pages/home/home.page"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edges" element={<EdgesPage />} />
        <Route path="/corners" element={<CornersPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
