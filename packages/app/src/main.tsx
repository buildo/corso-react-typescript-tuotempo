import React from "react";
import ReactDOM from "react-dom/client";
import { MainLayout } from "./MainLayout";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import "design-system/index.css";
import "./i18n";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // React Query v5 will not log query errors by default
    // We want to log them to the console to show Zod validation errors.
    // Using queryCache was recommended by the RQ maintainers here:
    // https://github.com/TanStack/query/issues/4675#issuecomment-1759714804
    onError: (e) => console.error(e),
  }),
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
