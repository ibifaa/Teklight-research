
import { useState } from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import TopicsPage from "./pages/TopicsPage.jsx";
import TopicDetail from "./pages/TopicDetail.jsx";
import MaterialsPage from "./pages/MaterialsPage.jsx";
import MaterialDetail from "./pages/MaterialDetail.jsx";
import Auth from "./pages/Auth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [filters, setFilters] = useState({});
  const [selectedTopicId, setSelectedTopicId] = useState(1);
  const [selectedMaterialTitle, setSelectedMaterialTitle] = useState("");

  const go = (nextPage, payload) => {
    if (nextPage === "topics") {
      setFilters(
        payload && typeof payload === "object" ? payload : {}
      );
    }

    if (nextPage === "topic" && payload !== undefined) {
      setSelectedTopicId(payload);
    }

    if (nextPage === "material" && payload !== undefined) {
      setSelectedMaterialTitle(payload);
    }

    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {

      case "dashboard":
        return <Dashboard go={go} />;

      case "admin":
        return <AdminDashboard go={go} />;

      case "home":
        return <Home go={go} />;

      case "topics":
        return (
          <TopicsPage
            key={JSON.stringify(filters)}
            go={go}
            initialFilters={filters}
          />
        );

      case "topic":
        return <TopicDetail go={go} topicId={selectedTopicId} />;

      case "materials":
        return <MaterialsPage go={go} />;

      

      case "material":
        return (
          <MaterialDetail
            go={go}
            materialTitle={selectedMaterialTitle}
          />
        );

      case "signin":
        return <Auth key="signin" go={go} initialMode="signin" />;

      case "register":
        return <Auth key="register" go={go} initialMode="register" />;

      default:
        return <Home go={go} />;
    }
  };

  const isAuthPage = page === "signin" || page === "register";

  return (
    <>
      {!isAuthPage && <Header go={go} />}

      {renderPage()}

      {!isAuthPage && <Footer go={go} />}
    </>
  );
}
