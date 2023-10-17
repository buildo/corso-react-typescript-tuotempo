import React from "react";
import ReactDOM from "react-dom/client";
import { MainLayout } from "./MainLayout";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0 },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainLayout />
    </QueryClientProvider>
  </React.StrictMode>
);
