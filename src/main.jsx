import {createRoot} from "react-dom/client";
import { App } from "./compile.jsx";

const root = createRoot(document.getElementById("root"));

root.render(<App/>)
