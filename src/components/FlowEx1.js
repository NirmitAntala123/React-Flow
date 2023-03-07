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
} from "reactflow";

// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
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
    "id": "11",
    type: "custom1",
    "position": {
        "x": 704.399875261829,
        "y": 300.0598451319694
    },
    "data": {
        "label": "Enter App"
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 704.399875261829,
        "y": 300.0598451319694
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#f25fd2"
    }, 
    "targetPosition": 'left',
    "sourcePosition": 'right',
},
{
    "id": "10",
    "position": {
        "x": 450.001162517703,
        "y": 405.93226829890375
    },
    "data": {
        "label": "Sign In with Email"
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 450.001162517703,
        "y": 405.93226829890375
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#a389e7"
    },
    "targetPosition": 'bottom',
    "sourcePosition": 'right',
},
{
    "id": "9",
    "position": {
        "x": 350.7167379804782,
        "y": 487.68869995612494
    },
    "data": {
        "label": "Reset Password"
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 350.7167379804782,
        "y": 487.68869995612494
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#a389e7"
    },
    "targetPosition": 'left',
    "sourcePosition": 'right',
},
{
    "id": "8",
    "position": {
        "x": 449.2113590249857,
        "y": 157.8746112565257
    },
    "data": {
        "label": "Sign Up with Email "
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 449.2113590249857,
        "y": 157.8746112565257
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#a389e7"
    }, 
    "targetPosition": 'right',
    "sourcePosition": 'left',
},
{
    "id": "7",
    "position": {
        "x": 141.47534363448352,
        "y": 487.5880054394003
    },
    "data": {
        "label": "Click Forgot Password"
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 141.47534363448352,
        "y": 487.5880054394003
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#a389e7"
    },
    "targetPosition": 'top',
    "sourcePosition": 'right',
},
{
    "id": "6",
    "position": {
        "x": 140.19493957733368,
        "y": 405.0157847440766
    },
    "data": {
        "label": "Know Your Password?"
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 140.19493957733368,
        "y": 405.0157847440766
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#00b77d"
    }
},
{
    "id": "5",
    "position": {
        "x": 139.63735810973907,
        "y": 325.41887357415374
    },
    "data": {
        "label": "Use Google SSO?"
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 139.63735810973907,
        "y": 325.41887357415374
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#00b77d"
    },
    // "sourcePosition": 'right',
    "sourcePosition": 'bottom',
    "targetPosition": 'left',
},
{
    "id": "4",
    "position": {
        "x": 140.02139615683132,
        "y": 157.46458242217312
    },
    "data": {
        "label": "Use Google SSO?"
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 140.02139615683132,
        "y": 157.46458242217312
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#00b77d"
    } ,
    "sourcePosition": 'left',
    "targetPosition": 'right',
},
{
    "id": "3",
    "position": {
        "x": -57.85115049302158,
        "y": 325.344157693142
    },
    "data": {
        "label": "Sign In"
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": -57.85115049302158,
        "y": 325.344157693142
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#9d8eec"
    }
    ,
    "sourcePosition": 'right',
    "targetPosition": 'left',
},
{
    "id": "2",
    "type":"custom1",
    "position": {
        "x": -57.274645793082584,
        "y": 157.21966989115649
    },
    "data": {
        "label": "Sign Up"
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": -57.274645793082584,
        "y": 157.21966989115649
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#7a64e8"
    }
    ,
  //   sourcePosition: 'left',
  // targetPosition: 'right',
},
{
    "id": "1",
    type:"custom1",
    
    "position": {
        "x": -216.8315001860757,
        "y": 243.20899695538372
    },
    "data": {
        "label": "Have an account?",
        sourceNum:2,
        targetNum:2,
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": -216.8315001860757,
        "y": 243.20899695538372
    },
    "dragging": false,
    "style": {
        "backgroundColor": "#16b679"
    }
}
  // {
  //   id: "1",
  //   type: "input",
  //   data: { label: "Input Node" },
  //   position: { x: 250, y: 25 },
  //   style: { backgroundColor: "#6ede87", color: "white" },
  // },

  // {
  //   id: "2",
  //   // you can also pass a React component as a label
  //   data: { label: "Default Node" },
  //   position: { x: 100, y: 125 },
  //   style: { backgroundColor: "#ff0072", color: "white" },
  // },
  // {
  //   id: "3",
  //   type: "output",
  //   data: { label: "Output Node" },
  //   position: { x: 250, y: 250 },
  //   style: { backgroundColor: "#6865A5", color: "white" },
  // },
  // {
  //   id: "4",
  //   type: "custom1",
  //   data: { label: "Output Node" },
  //   position: { x: 400, y: 125 },
  //   style: { backgroundColor: "#6865A5", color: "white" },
  // },
];
const node1 = { custom1: Node1 };

const initialEdges = [
  {
    "source": "1",
    "sourceHandle": "unique3",
    "target": "2",
    "targetHandle": null,
    "id": "reactflow__edge-2-1",
    "label":"No",
    "type": 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
},
// {
//     "source": "1",
//     "sourceHandle": null,
//     "target": "3",
//     "targetHandle": null,
//     "label":"Yes",
//     "id": "reactflow__edge-1-3",
//     "type": 'smoothstep',
// },
// {
//     "source": "4",
//     "sourceHandle": null,
//     "target": "2",
//     "targetHandle": null,
//     "id": "reactflow__edge-4-2",
//     "type": 'smoothstep',
// },
// {
//     "source": "8",
//     "sourceHandle": null,
//     "target": "4",
//     "targetHandle": null,
//     "type": 'smoothstep',
//     "id": "reactflow__edge-8-4",
//     "label":"No",
// },
// {
//     "source": "3",
//     "sourceHandle": null,
//     "target": "5",
//     "type": 'smoothstep',
//     "targetHandle": null,
//     "id": "reactflow__edge-3-5"
// },
// {
//     "source": "5",
//     "sourceHandle": null,
//     "target": "6",
//     "label":"No",
//     "type": 'straight',
//     "targetHandle": null,
//     "id": "reactflow__edge-5-6",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
// },
// {
//     "source": "6",
//     "sourceHandle": null,
//     "target": "7",
//     "label":"No",
//     "type": 'straight',
//     "targetHandle": null,
//     "id": "reactflow__edge-6-7",
//      markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
// },
// {
//   "source": "8",
//   "sourceHandle": null,
//   "target": "11",
//   "type": 'smoothstep',
//   "targetHandle": null,
//   "id": "reactflow__edge-8-11",
// },
// {
//     "source": "7",
//     "sourceHandle": null,
//     "target": "9",
//     "targetHandle": null,
//     "id": "reactflow__edge-7-9",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },  
// },
// {
//     "source": "9",
//     "sourceHandle": null,
//     "target": "10",
//     "targetHandle": null,
//     "type": 'smoothstep',
//     "id": "reactflow__edge-9-10",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
// },
// {
//     "source": "10",
//     "sourceHandle": null,
//     "target": "11",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     "targetHandle": null,
//     "id": "reactflow__edge-10-11"
// },
// {
//     "source": "6",
//     "sourceHandle": null,
//     "target": "10",
//     "label":"Yes",
//     "type": 'smoothstep',
//     "targetHandle": null,
//     "id": "reactflow__edge-6-10"
// },
// {
//     "source": "5",
//     "sourceHandle": null,
//     "target": "11",
//     "targetHandle": null,
//     "type": 'smoothstep',
//     "label":"Yes",
//     "id": "reactflow__edge-5-11",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
// },
// {
//     "source": "4",
//     "sourceHandle": null,
//     "target": "11",
//     "label":"Yes",
//     "type": 'smoothstep',
//     "targetHandle": null,
//     "id": "reactflow__edge-4-11",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
// }
  // { id: "e1-2", source: "1", target: "2", label: "to the", type: "step" },
  // { id: "e2-3", source: "2", target: "3", animated: true },
  // { id: "e1-3", source: "1", target: "3" },
  // { id: "e4-3", source: "4", target: "3" },
  // { id: "e1-4", source: "1", target: "4" },
];

const FlowEx1 = () => {
  const reactFlowInstance = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
// console.log(nodes);
// console.log(edges);
  const [selectedNode, setSelectedNode] = useState(null);

  const [nodeName, setNodeName] = useState("");
  const [nodeBg, setNodeBg] = useState("");

  const handleNodeContextMenu = (event, node) => {
    event.preventDefault();
    setSelectedNode(node);
    setContextMenuPos({ x: event.clientX, y: event.clientY });
    setNodeName(node.data.label);
    setNodeBg(node.style.backgroundColor);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onClick = useCallback(() => {
    const id = `${++initialNodes.length}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);
  const onNodeClick =(e) => {
   console.log(e);
  };

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
  }, [nodeName, setNodes, nodeBg]);


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
          {/* <Node1 /> */}
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
               width:'119px'
              }}
            />
            <input
              type="color"
              name="backgroundColor"
              value={nodeBg}
              onChange={(evt) => setNodeBg(evt.target.value)}
              style={{
                height:'22px'
               }}
            />
            <button onClick={() => setSelectedNode(null)}>Ok</button>
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
        // defaultEdgeType="smoothstep"
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={node1}
        onNodeContextMenu={handleNodeContextMenu}
        // onNodeClick={onNodeClick}
        renderNode={onNodeClick}
      defa
        fitView
      >
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
        <Controls />
        <Background />
      </ReactFlow>

      {renderContextMenu()}
    </>
  );
};

export default FlowEx1;
