import React from "react";

function Alert(props) {
  return (
    
      props.Alert && <div className="alert alert-success" role="alert">
        
       <strong>{props.Alert.type}</strong>: {props.Alert.msg}
      </div>
    
  );
}

export default Alert;
