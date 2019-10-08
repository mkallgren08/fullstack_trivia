import React from "react";

export const Input = (props,children) => {
  console.log(props)
  console.log(children)
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

