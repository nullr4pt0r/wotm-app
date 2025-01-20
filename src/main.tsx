import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import WordDetails from "@/components/WordDetails";
import useTheme from "@/hooks/useTheme";
import "./index.css";

createRoot(document.getElementById("root")!).render(() => {
  useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/word-details" element={<WordDetails word="example" pronunciation="ex-am-ple" usage="This is an example usage." example="For example, this sentence." origin="Latin" />} />
      </Routes>
    </BrowserRouter>
  );
});