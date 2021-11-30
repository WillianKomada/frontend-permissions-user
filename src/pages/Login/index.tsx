import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./styles.css";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      await signIn({ username, password });
    },
    [username, password]
  );

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Usuário</label>
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Senha</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="form-group">
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
}
