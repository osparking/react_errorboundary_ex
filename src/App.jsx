"use client";
import { ErrorBoundary } from "react-error-boundary";
import ContainsNotExistingComponent from "./components/ContainsNotExistingComponent";
export default function App() {

  function fallbackRender({ error, resetErrorBoundary }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
  
    return (
      <div role="alert">
        <p>오작동한 이유(아래):</p>
        <pre style={{ color: "deeppink" }}>{error.message}</pre>
      </div>
    );
  }

  return (
    <>
      <div>
        {/* <ErrorBoundary fallback={<div>뭔가 잘못되었다.</div>}> */}
        <ErrorBoundary fallbackRender={fallbackRender}>
          <ContainsNotExistingComponent />
        </ErrorBoundary>
      </div>
    </>
  );
}
