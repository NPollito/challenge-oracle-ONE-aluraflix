import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryState from "./context/categories/categoryState";

import Header from "./components/layout/Header";
import Project from "./routes/Project";
import NewVideo from "./routes/NewVideo";
import NewCategory from "./routes/NewCategory";

function App() {
  return (
    <CategoryState>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/new-video" element={<NewVideo />} />
          <Route path="/new-category" element={<NewCategory />} />
        </Routes>
      </BrowserRouter>
    </CategoryState>
  );
}

export default App;
