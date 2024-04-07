import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=${page}`
      );

      console.log(dados.data.results);
      setFilmes(dados.data.results);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Finally");
    }
  };
  const [page, setPage] = useState(1);

  useEffect(() => {
    buscaDados();
  }, [page]);

  return (
    <div>
      <h1>home</h1>
      <p>{page}</p>
      <button onClick={() => setPage((prev) => prev + 1)}>next page</button>

      <section>
        <div>
          {filmes.map((item) => (
            <S.Card key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
              <h2>{item.title}</h2>
              <p>{item.release_date}</p>
              <button>
                <Link to={`/movie/${item.id}`}>Saiba mais</Link>
              </button>
            </S.Card>
          ))}
        </div>
      </section>
    </div>
  );
}
