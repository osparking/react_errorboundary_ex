import React from "react";

const ContainsNotExistingComponent = () => {
  return (
    <div>
      <NotExistingComponent />
    </div>
  );
};

export default ContainsNotExistingComponent;
