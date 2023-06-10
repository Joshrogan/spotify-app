import { RouterProvider } from "@tanstack/router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AuthProvider } from "./components/AuthProvider";
import { router } from "./router";

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} position="bottom-right" />
    </AuthProvider>
  );
}
