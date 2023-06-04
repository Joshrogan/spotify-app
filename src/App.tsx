import { RouterProvider } from "@tanstack/router";
import { AuthProvider } from "./components/AuthProvider";
import { router } from "./router";

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
