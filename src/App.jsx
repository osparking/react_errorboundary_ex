"use client";
import { ErrorBoundary } from "react-error-boundary";
import ContainsNotExistingComponent from "./components/ContainsNotExistingComponent";
export default function App() {
  function fallbackRender({ error, resetErrorBoundary }) {
    // resetErrorBoundary() 를 호출하여 오류 경계를 리셋하고 랜더링을 재 시도한다.
    return (
      <div role="alert">
        <p>오류가 발생되었다.</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }
  return (
    <>
      <div>
        <ErrorBoundary fallbackRender={fallbackRender}>
          <ContainsNotExistingComponent />
        </ErrorBoundary>
      </div>
    </>
  );
}
