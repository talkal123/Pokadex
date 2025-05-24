import React, { useEffect, useState } from "react";
import CardHomePage from "../components/CardHomePage";
import axios from "axios";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Filters from "@/components/Filters";
import NavHome from "@/components/NavHome";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [valueFilter, setValueFilter] = useState("all")
  const [selectedTypes, setSelectedTypes] = useState(data); 

  console.log(valueFilter);
  console.log(selectedTypes);
  

  useEffect(() => {
  if (valueFilter === "all") {
    setSelectedTypes(data);
  } else if (valueFilter === "normal") {
    const filtered = data.filter(item => item.type === "normal");
    setSelectedTypes(filtered);
  } else if (valueFilter === "fire") {
    const filtered = data.filter(item => item.type === "fire");
    setSelectedTypes(filtered);
  } else if (valueFilter === "water") {
    const filtered = data.filter(item => item.type === "water");
    setSelectedTypes(filtered);
  } else if (valueFilter === "electric") {
    const filtered = data.filter(item => item.type === "electric");
    setSelectedTypes(filtered);
  } else if (valueFilter === "grass") {
    const filtered = data.filter(item => item.type === "grass");
    setSelectedTypes(filtered);
  } else if (valueFilter === "ice") {
    const filtered = data.filter(item => item.type === "ice");
    setSelectedTypes(filtered);
  } else if (valueFilter === "fighting") {
    const filtered = data.filter(item => item.type === "fighting");
    setSelectedTypes(filtered);
  } else if (valueFilter === "poison") {
    const filtered = data.filter(item => item.type === "poison");
    setSelectedTypes(filtered);
  } else if (valueFilter === "ground") {
    const filtered = data.filter(item => item.type === "ground");
    setSelectedTypes(filtered);
  } else if (valueFilter === "flying") {
    const filtered = data.filter(item => item.type === "flying");
    setSelectedTypes(filtered);
  } else if (valueFilter === "psychic") {
    const filtered = data.filter(item => item.type === "psychic");
    setSelectedTypes(filtered);
  } else if (valueFilter === "bug") {
    const filtered = data.filter(item => item.type === "bug");
    setSelectedTypes(filtered);
  } else if (valueFilter === "rock") {
    const filtered = data.filter(item => item.type === "rock");
    setSelectedTypes(filtered);
  } else if (valueFilter === "ghost") {
    const filtered = data.filter(item => item.type === "ghost");
    setSelectedTypes(filtered);
  } else if (valueFilter === "dragon") {
    const filtered = data.filter(item => item.type === "dragon");
    setSelectedTypes(filtered);
  } else if (valueFilter === "dark") {
    const filtered = data.filter(item => item.type === "dark");
    setSelectedTypes(filtered);
  } else if (valueFilter === "steel") {
    const filtered = data.filter(item => item.type === "steel");
    setSelectedTypes(filtered);
  } else if (valueFilter === "fairy") {
    const filtered = data.filter(item => item.type === "fairy");
    setSelectedTypes(filtered);
  }
}, [valueFilter, data]);


  const fetchData = async (url) => {
    try {
      setLoading(true);
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

      setData(pokemonDetails);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

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
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=10");
    fetchDataTwo("https://pokeapi.co/api/v2/pokemon?limit=150");
  }, []);

  

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-10 max-w-[1100px] mx-auto flex flex-col gap-6">
      <NavHome dataAll={dataAll} />

      {selectedTypes.length === 0 ? (
  <p className="text-center text-gray-500">No results found.</p>
) : (
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
    {selectedTypes.map((pokemon) => (
      <Link key={pokemon.id} to={`/${pokemon.id}`}>
        <CardHomePage data={pokemon} />
      </Link>
    ))}
  </div>
)}

      <div className="flex gap-2 items-center justify-center mt-5">
        <Button onClick={() => fetchData(prevPage)} className="cursor-pointer hover:bg-blue-500 text-white">Back</Button>
        <Button onClick={() => fetchData(nextPage)} className="cursor-pointer hover:bg-blue-500 text-white">Next</Button>
      </div>

      <div dir="rtl" className="flex flex-row-reverse mx-auto fixed bottom-4 max-w-[1100px] ">
        <Filters valueFilter={valueFilter} setValueFilter={setValueFilter}/>
      </div>
    </div>
  );
};

export default HomePage;
