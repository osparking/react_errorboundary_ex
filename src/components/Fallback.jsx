import React from "react";

const Fallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>오류가 발생되었다.</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

export default Fallback;
