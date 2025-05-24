import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Evolution = ({ pokemonSpecies }) => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      try {
        const { data } = await axios.get(pokemonSpecies.evolution_chain.url);
        const getNames = (chain) => {
          let result = [chain.species.name];
          chain.evolves_to.forEach((evolution) => {
            result = [...result, ...getNames(evolution)];
          });
          return result;
        };
        setNames(getNames(data.chain)); // עדכון הסטייט פעם אחת
      } catch (error) {
        console.error("Error fetching evolution chain:", error);
      }
    };

    fetchEvolutionChain();
  }, [pokemonSpecies]);

  return (
    <div className="grid justify-center gap-20 md:flex ">
      {names.map((name) => (
        <div key={name} className="text-center">
          <img
            src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
            alt={name}
            className="w-50 h-50"
          />
          <p className="capitalize mt-2">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Evolution;
