import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const url = localStorage.getItem("url");
  const [pokemon, setPokemon] = useState("");
  const api = url.replace(/['"]+/g, "");
  const [image, setImage] = useState("");
  const [species, setSpecies] = useState("");
  const [skill, setSkill] = useState([]);

  const axiosget = () => {
    axios
      .get(api)
      .then((res) => {
        setPokemon(res.data);
        setImage(res.data.sprites.front_default);
        setSkill(res.data.abilities);
        setSpecies(res.data.species.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosget();
    if (!url) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[425px] h-[100vh] border border-black flex flex-col items-center">
          <div className="font-bold mt-3 mb-5">Detail</div>
          <p>nama: {pokemon.name}</p>
          <p>
            image: <img src={image} alt="tidak ada gambar" />
          </p>
          <div>
            abilities:
            {skill.map((res) => (
              <div key={res.ability.name}>{res.ability.name}</div>
            ))}
          </div>
          <p>Height: {pokemon.height}</p>
          <p>species: {species}</p>
          <Link to={"/"}>
            <button className="mt-10 p-2 bg-purple-600 text-white rounded-xl">
              Kembali ke home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Detail;
