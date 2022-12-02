import Header from "./components/Header/Index";
import Layouts from "./components/Layouts/Layouts";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Warta from "./pages/Warta";

function App() {
  return (
    <>
      <Layouts>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warta" element={<Warta />} />
          <Route path="/tokoh" element={<Home />} />
          <Route path="/hikmah" element={<Home />} />
          <Route path="/khutbah" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="bottom-0 w-full max-w-mobile bg-white border-t-2 border-emerald-500 py-4 fixed">
          Footer
        </div>
      </Layouts>
    </>
  );
}

export default App;
