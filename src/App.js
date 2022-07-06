import "./app.styles.scss"
import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/layout/layout.component";

//pages
import EdgesPage from "./pages/edges/edges.page";
import EdgesMain from "./pages/edges/edgesMain/edgesMain.page";
import EdgesToReview from "./pages/edges/edgesToReview/edgesToReview.page";
import EdgesAtNight from "./pages/edges/edgesAtNight/edgesAtNight.page";

import CornersPage from "./pages/corners/corners.page";
import CornersToReview from "./pages/corners/cornersToReview/cornersToReview.page";
import CornersMain from "./pages/corners/cornersMain/cornersMain.page";
import CornersAtNight from "./pages/corners/cornersAtNight/cornersAtNight.page";
import HomePage from "./pages/home/home.page";


function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="edges" element={<EdgesPage />}>
          <Route index element={<EdgesMain />} />
          <Route path="edgesToReview" element={<EdgesToReview />} />
          <Route path="edgesAtNight" element={<EdgesAtNight />} />
        </Route>
        <Route path="corners" element={<CornersPage />}>
          <Route index element={<CornersMain />} />
          <Route path="cornersToReview" element={<CornersToReview />} />
          <Route path="cornersAtNight" element={<CornersAtNight />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
