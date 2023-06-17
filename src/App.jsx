import "./App.css";
import {
  HomePage,
  EducationPage,
  ExperiencePage,
  ProjectsPage,
  MVCPage,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";

// import AddTodo from "./pages/MVCPage/pages/AddTodo";
// import EditTodo from "./pages/MVCPage/pages/EditTodo";

export default function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="mvc" element={<MVCPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
