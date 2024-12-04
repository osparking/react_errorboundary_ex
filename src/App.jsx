"use client";
import { ErrorBoundary } from "react-error-boundary";
import ContainsNotExistingComponent from "./components/ContainsNotExistingComponent";
import Fallback from "./components/Fallback";
export default function App() {
  return (
    <>
      <div>
        <ErrorBoundary FallbackComponent={Fallback}>
          <ContainsNotExistingComponent />
        </ErrorBoundary>
      </div>
    </>
  );
}
