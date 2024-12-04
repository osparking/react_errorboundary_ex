"use client";
import { ErrorBoundary } from "react-error-boundary";
export default function App() {
  return (
    <>
      <div>
        <ErrorBoundary fallback={<div>뭔가 잘못되었다.</div>}>
          <NotExistingComponent />
        </ErrorBoundary>
      </div>
    </>
  );
}
