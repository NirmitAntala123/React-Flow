import logo from "./logo.svg";
import "./App.css";
import FlowEx1 from "./components/FlowEx1";

import "./text-updater-node.css";
import { ReactFlowProvider } from "reactflow";

function App() {
  return (
    <ReactFlowProvider>
      <FlowEx1 />
    </ReactFlowProvider>
  );
}

export default App;
