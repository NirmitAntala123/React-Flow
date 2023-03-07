import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function Node1(props) {
  console.log(props);
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);


  return (
    <div className="text-updater-node">
      <Handle
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
      />
      <div>
        <label htmlFor="text">{props.data.label}</label>
        {/* <input id="text" name="text" onChange={onChange} className="nodrag" /> */}
      </div>
      <Handle
      id="unique3"
        type="source"
        position={Position.Bottom}
        isConnectable={props.isConnectable}
      />
     <Handle
      id="unique4"
        type="source"
        position={Position.Left}
        isConnectable={props.isConnectable}
      />
    </div>
  );
}

export default Node1;
