import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./pages/Login";

export function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}
