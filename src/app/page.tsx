import "./styles/home.scss"
import { Header } from "./componetes/header/header"

export default function Home() {
  return (
    <main className="container">

      <Header/>

      <div className="menu">
        <div className="itens">
          <a href="">Editor</a>
        </div>

        <div className="itens">
          <a href="">Comunidade</a>
        </div>
      </div>

      <div className="ambiente-editor">
        <div className="variavel-color">
          <div className="editor">Seu código</div>
        </div>
      </div>

      <div className="botao-highlight">
        <button>Visualizar com o highlight</button>
      </div>

        <div className="configuracao">
          <div className="projeto">
            <div className="campos-texto">
              <textarea name="nome-projeto" id="name" value="Nome do seu projeto"></textarea>
            </div>
            <div className="campos-texto">
              <textarea name="descricao-projeto" id="descricao" value="Descrição do seu projeto"></textarea>
          </div>
        
        </div>
          <div className="personalizacao">
            <div className="selecao-linguagem">
              <select name="linguagens" id="linguagens">
                <option value="sem selecao">----</option>
                <option value="javascript">javascript</option>
                <option value="java">java</option>
                <option value="python">python</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="color">
              <select name="colors" id="colors">
                  <option value="sem selecao">----</option>
                  <option value="azul-claro">azul-claro</option>
                  <option value="amarelo">amarelo</option>
                  <option value="rosa">rosa</option>
                  <option value="beje">beje</option>
                  <option value="verde">verde</option>
                  <option value="roxo">roxo</option>
                </select>
            </div>

            <div className="botao-salvar">
              <button>Salvar projeto</button>
            </div>
          </div>

        </div>



    </main>
  );
}
