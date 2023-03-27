import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Header } from "./components/header";
import { Formulario } from "./components/formulario";
import { Resultado } from "./components/resultado";
import "./App.css";
import { Footer } from "./components/footer";

function App() {
  const [infoNome, setInfoNome] = useState("");
  function nomeLivro(name: string) {
    setInfoNome(name);
  }

  return (
    <div className="App">
      <Header />
      <Formulario livroFN={nomeLivro} />
      <Resultado nome={infoNome} validacao={false} />
      <Footer/>
    </div>
  );
}

export default App;
