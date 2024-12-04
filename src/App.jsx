"use client";
import { ErrorBoundary } from "react-error-boundary";
import ContainsNotExistingComponent from "./components/ContainsNotExistingComponent";
export default function App() {
  return (
    <>
      <div>
        <ErrorBoundary fallback={<div>뭔가 잘못되었다.</div>}>
          <ContainsNotExistingComponent />
        </ErrorBoundary>
      </div>
    </>
  );
}
