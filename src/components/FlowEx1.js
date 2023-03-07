import { useCallback, useEffect, useState } from "react";
import Draggable from "react-draggable";

import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  MarkerType,
  BezierEdge,
  StraightEdge,
  StepEdge,
  SmoothStepEdge,
} from "reactflow";

// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import CustomEdges from "../custom_edge/CustomEdges";
import Node1 from "../custom_nodes/Node1";
const nodeColor = (node) => {
  switch (node.type) {
    case "input":
      return "#6ede87";
    case "output":
      return "#6865A5";
    default:
      return "#ff0072";
  }
};
const initialNodes = [
  {
    id: "11",
    type: "custom1",
    position: {
      x: 738.0404481942137,
      y: 243.20899695538372,
    },
    data: {
      label: "Enter App",
      targetPos: ["left"],
      sourcePos: [],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: 738.0404481942137,
      y: 243.20899695538372,
    },
    dragging: false,
    style: {
      backgroundColor: "#f25fd2",
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "10",
    type: "custom1",
    position: {
      x: 450.001162517703,
      y: 405.0157847440766,
    },
    data: {
      label: "Sign In with Email",
      targetPos: ["left", "bottom"],
      sourcePos: ["right"],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: 450.001162517703,
      y: 405.0157847440766,
    },
    dragging: false,
    style: {
      backgroundColor: "#a389e7",
    },
    targetPosition: "bottom",
    sourcePosition: "right",
  },
  {
    id: "9",
    type: "custom1",
    position: {
      x: 350.7167379804782,
      y: 487.68869995612494,
    },
    data: {
      label: "Reset Password",
      targetPos: ["left"],
      sourcePos: ["right"],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: 350.7167379804782,
      y: 487.68869995612494,
    },
    dragging: false,
    style: {
      backgroundColor: "#a389e7",
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "8",
    type: "custom1",
    position: {
      x: 449.2113590249857,
      y: 157.8746112565257,
    },
    data: {
      label: "Sign Up with Email ",
      targetPos: ["left"],
      sourcePos: ["right"],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: 449.2113590249857,
      y: 157.8746112565257,
    },
    dragging: false,
    style: {
      backgroundColor: "#a389e7",
    },
  },
  {
    id: "7",
    type: "custom1",
    position: {
      x: 140.19493957733368,
      y: 487.5880054394003,
    },
    data: {
      label: "Click Forgot Password",
      targetPos: ["top"],
      sourcePos: ["right"],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: 140.19493957733368,
      y: 487.5880054394003,
    },
    dragging: false,
    style: {
      backgroundColor: "#a389e7",
    },
  },
  {
    id: "6",
    type: "custom1",
    position: {
      x: 140.19493957733368,
      y: 405.0157847440766,
    },
    data: {
      label: "Know Your Password?",
      targetPos: ["top"],
      sourcePos: ["right", "bottom"],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: 140.19493957733368,
      y: 405.0157847440766,
    },
    dragging: false,
    style: {
      backgroundColor: "#00b77d",
    },
  },
  {
    id: "5",
    type: "custom1",
    position: {
      x: 140.19493957733368,
      y: 325.41887357415374,
    },
    data: {
      label: "Use Google SSO?",
      targetPos: ["left"],
      sourcePos: ["right", "bottom"],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: 140.19493957733368,
      y: 325.41887357415374,
    },
    dragging: false,
    style: {
      backgroundColor: "#00b77d",
    },
   
  },
  {
    id: "4",
    type: "custom1",
    position: {
      x: 140.19493957733368,
      y: 157.46458242217312,
    },
    data: {
      label: "Use Google SSO?",
      targetPos: ["left"],
      sourcePos: ["right", "bottom"],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: 140.19493957733368,
      y: 157.46458242217312,
    },
    dragging: false,
    style: {
      backgroundColor: "#00b77d",
    },
    sourcePosition: "left",
    targetPosition: "right",
  },
  {
    id: "3",
    type: "custom1",
    position: {
      x: -57.85115049302158,
      y: 325.344157693142,
    },
    data: {
      label: "Sign In",
      targetPos: ["left"],
      sourcePos: ["right"],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: -57.85115049302158,
      y: 325.344157693142,
    },
    dragging: false,
    style: {
      backgroundColor: "#9d8eec",
    },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "2",
    type: "custom1",
    position: {
      x: -57.274645793082584,
      y: 157.21966989115649,
    },
    data: {
      label: "Sign Up",
      targetPos: ["left"],
      sourcePos: ["right"],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: -57.274645793082584,
      y: 157.21966989115649,
    },
    dragging: false,
    style: {
      backgroundColor: "#7a64e8",
    },
   
  },
  {
    id: "1",
    type: "custom1",

    position: {
      x: -216.8315001860757,
      y: 243.20899695538372,
    },
    data: {
      label: "Have an account?",
      targetPos: [],
      sourcePos: ["top", "bottom"],
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: -216.8315001860757,
      y: 243.20899695538372,
    },
    dragging: false,
    style: {
      backgroundColor: "#16b679",
    },
  },

];
const node1 = { custom1: Node1 };

const edgeTypes = {
  customedge: CustomEdges,
};

const initialEdges = [
  {
      "source": "1",
      "sourceHandle": "top1",
      "target": "2",
      "targetHandle": "left2",
      "label":"No",
      "id": "reactflow__edge-1top1-2left2",
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
  },
  {
      "source": "1",
      "sourceHandle": "bottom1",
      "target": "3",
      "targetHandle": "left3",
      "label":"Yes",
      "id": "reactflow__edge-1bottom1-3left3",
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      
  },
  {
      "source": "3",
      "sourceHandle": "right3",
      "target": "5",
      "targetHandle": "left5",
      "id": "reactflow__edge-3right3-5left5",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "2",
      "sourceHandle": "right2",
      "target": "4",
      "targetHandle": "left4",
      "id": "reactflow__edge-2right2-4left4",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "5",
      "sourceHandle": "bottom5",
      "target": "6",
      "targetHandle": "top6",
      "label":"No",
      "id": "reactflow__edge-5bottom5-6top6",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "6",
      "sourceHandle": "bottom6",
      "target": "7",
      "targetHandle": "top7",
      "label":"No",
      "id": "reactflow__edge-6bottom6-7top7",
      "selected": false,
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "7",
      "sourceHandle": "right7",
      "target": "9",
      "targetHandle": "left9",
      "id": "reactflow__edge-7right7-9left9",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "6",
      "sourceHandle": "right6",
      "target": "10",
      "targetHandle": "left10",
      "label":"Yes",
      "id": "reactflow__edge-6right6-10left10",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "9",
      "sourceHandle": "right9",
      "target": "10",
      "targetHandle": "bottom10",
      "id": "reactflow__edge-9right9-10bottom10",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "10",
      "sourceHandle": "right10",
      "target": "11",
      "targetHandle": "left11",
      "id": "reactflow__edge-10right10-11left11",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "5",
      "sourceHandle": "right5",
      "target": "11",
      "label":"Yes",
      "targetHandle": "left11",
      "id": "reactflow__edge-5right5-11left11",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "4",
      "sourceHandle": "bottom4",
      "target": "11",
      "targetHandle": "left11",
      "label":"Yes",
      "id": "reactflow__edge-4bottom4-11left11",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "4",
      "sourceHandle": "right4",
      "target": "8",
      "targetHandle": "left8",
      "label":"Yes",
      "id": "reactflow__edge-4right4-8left8",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  },
  {
      "source": "8",
      "sourceHandle": "right8",
      "target": "11",
      "targetHandle": "left11",
      "id": "reactflow__edge-8right8-11left11",
      markerEnd: {
        type: MarkerType.ArrowClosed,
       },
  }
]



const FlowEx1 = () => {
  const reactFlowInstance = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [EdgeMenuPos, setEdgeMenuPos] = useState({ x: 0, y: 0 });

  // console.log(nodes);
  // console.log(edges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selecteEdge, setSelectedEdge] = useState(null);
console.log(selecteEdge);
  const [nodeName, setNodeName] = useState("");
  const [nodeBg, setNodeBg] = useState("");
  const [edgeName, setedgeName] = useState("");

  const handleNodeContextMenu = (event, node) => {
    event.preventDefault();
    console.log(node);
    setSelectedNode(node);
    setContextMenuPos({ x: event.clientX, y: event.clientY });
    setNodeName(node.data.label);
    setNodeBg(node.style.backgroundColor);
  };
  const edgeDoubleClick = (event, node) => {
    event.preventDefault();
    console.log(event);
  
    setSelectedEdge(node);
    setEdgeMenuPos({ x: event.pageX, y: event.pageY });
    setedgeName(node.label);
    // setNodeBg(node.style.backgroundColor);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onClick = useCallback(() => {
    const id = `${++initialNodes.length}`;
    const newNode = {
      id,
      type:'custom1',
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,
        targetPos: ["left"],
        sourcePos: ["right"],
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  //on Node Update

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (selectedNode) {
          if (node.id === selectedNode.id) {
            node.data = {
              ...node.data,
              label: nodeName,
            };
            node.style = { ...node.style, backgroundColor: nodeBg };
          }
        }
        return node;
      })
    );
  }, [edgeName, setNodes, nodeBg]);
  useEffect(() => {
    setEdges((nds) =>
      nds.map((node) => {
        // console.log(node);
        if (selecteEdge) {
          // console.log(selecteEdge);
          if (node.id === selecteEdge.id) {
            // console.log();
            node = {
              ...node,
              label: edgeName,
            };
            // node.style = { ...node.style, backgroundColor: nodeBg };
          }
        }
        return node;
      })
    );
  }, [edgeName, setEdges]);
  const renderContextMenu = () => {
    if (!selectedNode) {
      // setSelectedNode(null);
      return null;
    }

    return (
      <Draggable>
        <div
          style={{
            position: "absolute",
            left: contextMenuPos.x,
            top: contextMenuPos.y,
          }}
        >
        
          <div className="updatenode__controls">
            <label>label:</label>
            <input
              name="label"
              value={nodeName}
              onChange={(evt) => setNodeName(evt.target.value)}
            />

            <label className="updatenode__bglabel">background:</label>
            <input
              name="backgroundColor"
              value={nodeBg}
              onChange={(evt) => setNodeBg(evt.target.value)}
              style={{
                width: "119px",
              }}
            />
            <input
              type="color"
              name="backgroundColor"
              value={nodeBg}
              onChange={(evt) => setNodeBg(evt.target.value)}
              style={{
                height: "22px",
              }}
            />
            <button onClick={() => setSelectedNode(null)}>Ok</button>
          </div>
        </div>
      </Draggable>
    );
  };
  const renderedgeMenu = () => {
    if (!selecteEdge) {
      // setSelectedNode(null);
      return null;
    }

    return (
      <Draggable>
        <div
          style={{
            position: "absolute",
            left: EdgeMenuPos.x,
            top: EdgeMenuPos.y,
          }}
        >
          <div className="updatenode__controls">
            <label>label:</label>
            <input
              name="label"
              value={edgeName}
              onChange={(evt) => setedgeName(evt.target.value)}
            />
            <button onClick={() => setSelectedEdge(null)}>Ok</button>
          </div>
        </div>
      </Draggable>
    );
  };

  return (
    <>
      <button onClick={onClick} className="btn-add">
        add node
      </button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={node1}
        onNodeContextMenu={handleNodeContextMenu}
        fitView
        connectionLineType="smoothstep"
        edgeTypes={{default: SmoothStepEdge}}
        defaultMarkerColor='black'
        onEdgeDoubleClick={edgeDoubleClick}
        
      >
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
        <Controls />
        <Background />
      </ReactFlow>

      {renderContextMenu()}
      {renderedgeMenu()}
      
    </>
  );
};

export default FlowEx1;
