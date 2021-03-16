import React from "react";

function PageError(props) {
  return (
    <div className="container d-flex justify-content-center mt-5">
      {props.error.message}
    </div>
  );
}

export default PageError;
