import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./customers/blog";

export default Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="customer/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};
