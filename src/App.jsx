import TemplatesList from "./views/TemplatesList/TemplatesList";
import SingleTemplate from "./views/SingleTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { store } from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      {/* <SingleTemplate /> */}
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<TemplatesList />} />
              <Route path="edit" element={<SingleTemplate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
