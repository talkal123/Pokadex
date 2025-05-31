import Nav from "@/components/Nav";
import StateComponent from "@/components/StateComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import typeColors from "@/helpers/pokemonTypes";
import pokeball from "../assets/pokeball.png";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

const PokemonById = () => {
  const { id } = useParams();
  const [dataAll,setDataAll] = useState([])
  const [pokemon, setPokemon] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [likedPokemons, setLikedPokemons] = useState(() => {
    const saved = localStorage.getItem('likedPokemons');
    return saved ? JSON.parse(saved) : [];
    
  });

  console.log(likedPokemons);


  const [isLike, setIsLike] = useState(false);

  const likeBtn = () => {
    const isLiked = likedPokemons.some(p => p.name === pokemon.name);

    if (isLiked) {
      setLikedPokemons(prev => prev.filter(p => p.name !== pokemon.name));
    } else {
      setLikedPokemons(prev => [...prev, { id: pokemon.id, name: pokemon.name,type: pokemon.types[0].type.name, image: pokemon.sprites.other.showdown.front_default }]);
    }

  };

  const handleDelete = (name) => {
    setLikedPokemons(likedPokemons.filter(p => p.name !== name))
  }

  useEffect(() => {
    if (pokemon) {
      const isLiked = likedPokemons.some(p => p.name === pokemon.name);
      setIsLike(isLiked);
    }
    localStorage.setItem('likedPokemons', JSON.stringify(likedPokemons));
  }, [likedPokemons,pokemon]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("שגיאה בהבאת נתונים:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((response) => {
        setPokemonSpecies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("שגיאה בהבאת נתונים:", error);
        setLoading(false);
      });
  }, [id]);


  const fetchDataTwo = async (url) => {
    try {

      const response = await axios.get(url);

      const pokemonDetails = await Promise.all(
        response.data.results.map(pokemon =>
          axios.get(pokemon.url).then(res => ({
            name: res.data.name,
            image: res.data.sprites.other.dream_world.front_default,
            id: res.data.id,
            type: res.data.types[0].type.name
          }))
        )
      );

      setDataAll(pokemonDetails); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataTwo("https://pokeapi.co/api/v2/pokemon?limit=150");
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>Loading...</div>; 
  }
  const backgroundColor = typeColors[pokemon.types[0].type.name.toLowerCase()] || "#fff";

  return (
    <div className="p-5">
      <div
        className="rounded-lg p-10 max-w-[1100px] mx-auto flex flex-col"
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: `url(${pokeball})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <Nav pokemon={pokemon} likedPokemons={likedPokemons} handleDelete={handleDelete} dataAll={dataAll}/>
        <div className="mt-5">
          <div className="flex justify-between p-5">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-white text-3xl">{pokemon.name}</h1>
              <div className="flex gap-2">
                <div className="text-white rounded-lg max-w-20 min-w-20 p-0.5 text-center bg-white/20">
                  {pokemon.abilities[0].ability.name}
                </div>
                <div className="text-white rounded-lg max-w-20 min-w-20 p-0.5 text-center bg-white/20">
                  {pokemon.types[0].type.name}
                </div>
              </div>
            </div>
            <div>
              <div className="text-white rounded-lg p-0.5 text-center">
                # {pokemon.id}
              </div>
              {isLike === false ? (
                <div onClick={likeBtn} className="font-bold text-white text-xl cursor-pointer">
                  <CiHeart className="w-7 h-7" />
                </div>
              ) : (
                <div onClick={likeBtn} className="font-bold text-white text-xl cursor-pointer">
                  <FcLike className="w-7 h-7" />
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-15 justify-center">
            <img
              src={pokemon.sprites.other.showdown.front_default}
              className="w-62"
              alt="default"
            />
            <img
              src={pokemon.sprites.other.showdown.front_shiny}
              className="w-62"
              alt="shiny"
            />
          </div>
          <div>
            <StateComponent
              pokemon={pokemon}
              pokemonSpecies={pokemonSpecies}
              likeBtn={likeBtn}
              likedPokemons={likedPokemons}
              isLike={isLike}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonById;
