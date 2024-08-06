import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    const title = path.charAt(0).toUpperCase() + path.slice(1);
    document.title = title;
  }, [location]);

  return null;
}

export default TitleUpdater;
