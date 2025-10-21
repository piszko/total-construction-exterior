import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");

    const scrollToEl = () => {
      const el = document.getElementById(id);
      if (el) {
        try {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          el.scrollIntoView();
        }
      }
    };

    // Try immediately and then after a short delay in case the DOM hasn't rendered yet
    scrollToEl();
    const t = setTimeout(scrollToEl, 100);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
}
