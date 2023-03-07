import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function Node1(props) {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  return (
  <>
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
    </>
  );
}

export default Node1;
