import "./app.styles.scss"
import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/layout/layout.component";

//pages
import EdgesPage from "./pages/edges/edges.page";
import EdgesToReview from "./pages/edges/edgesToReview/edgesToReview.page";
import CornersPage from "./pages/corners/corners.page";
import HomePage from "./pages/home/home.page"
import EdgesMain from "./pages/edges/edgesMain/edgesMain.page";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="edges" element={<EdgesPage />}>
          <Route index element={<EdgesMain/>}/>
          <Route path="edgesToReview" element={<EdgesToReview />} />
        </Route>
        <Route path="corners" element={<CornersPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
