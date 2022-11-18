import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../component/list";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosget = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => {
        setPokemon(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const klikdetail = (e) => {
    localStorage.setItem("url", JSON.stringify(e));
    navigate("/detail");
  };

  useEffect(() => {
    setTimeout(function () {
      axiosget();
    }, 2000);
    localStorage.removeItem("url");
  }, []);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[425px] h-[100vh] border border-black flex flex-col items-center">
          <div className="font-bold mt-3 mb-5">header</div>
          {loading ? (
            <div className="w-full h-[300px] flex flex-col justify-center items-center">
              <i className="bx bxs-cat bx-tada text-[100px]" />
              <p className="font-medium">Pokemon</p>
            </div>
          ) : (
            <div className="w-full grid grid-cols-2 gap-4">
              {pokemon.map((res) => (
                <div key={res.name}>
                  <List name={res.name} url={res.url} fungsi={klikdetail} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Home;
