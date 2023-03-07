import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function Node1(props) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
  <>
      {/* <Handle
        id="unique1"
        type="target"
        position={Position.Top}
        isConnectable={props.isConnectable}
      />
      <Handle
        id="unique2"
        type="target"
        position={Position.Right}
        isConnectable={props.isConnectable}
      /> */}
      {props.data.targetPos !== undefined &&
        props.data.targetPos.map((e) => {
          // console.log(e+props.id);
          return <Handle
            id={e+props.id}
            type="target"
            position={e}
            isConnectable={props.isConnectable}
          />;
        })}
      
        {props.data.label}
        {/* <input id="text" name="text" onChange={onChange} className="nodrag" /> */}
     
      {props.data.sourcePos !== undefined &&
        props.data.sourcePos.map((e) => {
          // console.log(e+props.id);
          return <Handle
            id={e+props.id}
            type="source"
            position={e}
            isConnectable={props.isConnectable}
          />;
        })}
      {/* <Handle
      id="unique3"
        type="source"
        position="right"
        isConnectable={props.isConnectable}
      />
     <Handle
      id="unique4"
        type="source"
        position="left"
        isConnectable={props.isConnectable}
      /> */}
    </>
  );
}

export default Node1;
