import { RouterProvider } from "@tanstack/router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AuthProvider } from "./components/auth/AuthProvider";
import { router } from "./router";

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} position="bottom-right" />
    </AuthProvider>
  );
}
