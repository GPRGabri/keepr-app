const React = require("react");
const ReactDOM = require("react-dom/client");
import App from "./Components/App";


const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

root.render(
    <App />
);

