import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop7 from "./pages/Desktop7";
import GroupComponent from "./pages/GroupComponent";
import GroupComponent1 from "./pages/GroupComponent1";
import GroupComponent2 from "./pages/GroupComponent2";
import GroupComponent3 from "./pages/GroupComponent3";
import GroupComponent5 from "./pages/GroupComponent5";
import Desktop1 from "./pages/Desktop1";
import WwwstanzalivingcomByHtmlt from "./pages/WwwstanzalivingcomByHtmlt";
import Desktop21 from "./pages/Desktop21";
import Desktop6 from "./pages/Desktop6";
import Desktop12 from "./pages/Desktop12";
import Iframe from "./pages/Iframe";
import UntreecoByHtmltodesign from "./pages/UntreecoByHtmltodesign";
import GroupComponent4 from "./pages/GroupComponent4";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/group-174":
        title = "";
        metaDescription = "";
        break;
      case "/group-173":
        title = "";
        metaDescription = "";
        break;
      case "/group-172":
        title = "";
        metaDescription = "";
        break;
      case "/group-18":
        title = "";
        metaDescription = "";
        break;
      case "/group-132":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
      case "/wwwstanzalivingcom-by-htmltodesign-free-version-22022023-202736-gmt530":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-21":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-6":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-12":
        title = "";
        metaDescription = "";
        break;
      case "/iframe":
        title = "";
        metaDescription = "";
        break;
      case "/untreeco-by-htmltodesign-free-version-20022023-101231-gmt530":
        title = "";
        metaDescription = "";
        break;
      case "/group-171":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop7 />} />

      <Route path="/group-174" element={<GroupComponent />} />

      <Route path="/group-173" element={<GroupComponent1 />} />

      <Route path="/group-172" element={<GroupComponent2 />} />

      <Route path="/group-18" element={<GroupComponent3 />} />

      <Route path="/group-132" element={<GroupComponent5 />} />

      <Route path="/desktop-1" element={<Desktop1 />} />

      <Route
        path="/wwwstanzalivingcom-by-htmltodesign-free-version-22022023-202736-gmt530"
        element={<WwwstanzalivingcomByHtmlt />}
      />

      <Route path="/desktop-21" element={<Desktop21 />} />

      <Route path="/desktop-6" element={<Desktop6 />} />

      <Route path="/desktop-12" element={<Desktop12 />} />

      <Route path="/iframe" element={<Iframe />} />

      <Route
        path="/untreeco-by-htmltodesign-free-version-20022023-101231-gmt530"
        element={<UntreecoByHtmltodesign />}
      />

      <Route path="/group-171" element={<GroupComponent4 />} />
    </Routes>
  );
}
export default App;
