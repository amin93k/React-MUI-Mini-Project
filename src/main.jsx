import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "./App.jsx"
import LearnCustomize from "./LearnCustomize";

createRoot(document.getElementById("root")).render(
    <StrictMode >
        <App />
    </StrictMode>
)