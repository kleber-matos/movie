/** @format */
import * as S from "./styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import TodosOsFilmes from "../../components/TodosOsFilmes/TodosOsFilmes";
import Loading from "../../components/Loading/Loading";

export default function Seach() {
  const [busca, setBusca] = useState("c");
  const [filme, setFilme] = useState([]);
  const [buscaFilmes, setBuscaFilmes] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [load, setLoad] = useState(true);

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${busca}&api_key=6040fbaaf2352854942894b5b45b4729`
      );
      setFilme(dados.data.results);
      console.log(dados.data.results);
      setLoad(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    buscaDados();
  }, [buscaFilmes]);

  if (load) {
    return <Loading />;
  }

  return (
    <div>
      <Header />

      <button
        onClick={() => {
          setBuscaFilmes(!buscaFilmes),
            setMensagem(`Resultados encontrados por: ${busca} `);
        }}>
        buscar
      </button>
      <input type="text" onChange={(e) => setBusca(e.target.value)} />

      {mensagem}
      <S.Section>
        {filme.map((item, id) => (
          <TodosOsFilmes
            key={id}
            imagem={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            title={item.title}
            id={item.id}
          />
        ))}
      </S.Section>
    </div>
  );
}
