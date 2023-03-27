import { useEffect, useState } from "react";
import "../App.css";
type Props = {
  nome: string;
  validacao: boolean;
};
type catalogo = {
  titulo: string;
  autor: string;
  ano: string;
  link: string;
};

export const Resultado = (props: Props) => {
  const [dado, setDado] = useState<catalogo[]>([]);
  const [clicked, setClicked] = useState<boolean>(false);
  // const [anterior, setAnterior] = useState<number>(1);
  const [atual, setAtual] = useState<number>(1);
  // const [proximo, setProximo] = useState<number>(1);
  let aux: catalogo[] = [];
  let aux1:number;
  useEffect(() => {
    if (props.nome) {
      fetch(
        "http://servicodados.ibge.gov.br/api/v1/publicacoes/" +
          props.nome +
          "/?qtd=5&page=1"
      )
        .then((response) => response.json())
        .then((dado) => {
          dado.items.map((item: any) => {
            aux.push(item);
            setDado(aux);
          });
        });
    }
  }, [props.nome]);

  const handleProx=()=>{
    setClicked(true)
    setAtual(atual+1)

  }
  const handleAnt=()=>{
    setClicked(true)
    setAtual(atual-1)
  }

  
  useEffect(()=>{
    if(clicked){
      fetch(
        "http://servicodados.ibge.gov.br/api/v1/publicacoes/" +
          props.nome +
          "/?qtd=5&page="+atual
      )
        .then((response) => response.json())
        .then((dado) => {
          dado.items.map((item: any) => {
            aux.push(item);
            setDado(aux);
          });
        });
    }
  },[handleProx || handleAnt])



  return (
    <>
      <div className="resultado">
        {dado &&
          dado.map((item) => (
            <section className="resultado-lista">
              <h3>Titulo: {item.titulo} </h3>
              <p>Autor: {item.autor}</p>
              <p>Ano: {item.ano}</p>
              <a href={item.link}>Acesso ao livro.</a>
            </section>
          ))}
      </div>
      <div className="paginacao">
        <p onClick={handleAnt}>
          Anterior
        </p>
        {/* <p>Pagina:{atual}</p> */}
        <p onClick={handleProx}>
          Próximo
        </p>
      </div>
    </>
  );
};
