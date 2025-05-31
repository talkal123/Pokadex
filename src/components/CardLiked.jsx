import { Card } from './ui/card'
import pokeball from "../assets/pokeball.png"
import typeColors from '@/helpers/pokemonTypes';


const CardLiked = ({ likedPokemons,handleDelete }) => {
  if (!likedPokemons || likedPokemons.length === 0) {
    return <div>No Pokemons...</div>; 
  }

  return (
    <>
      {likedPokemons.map((pokemon) => {
        const backgroundColor = typeColors[pokemon.type.toLowerCase()] || "#fff";

        return (
          <Card
            key={pokemon.id} 
            className="min-h-[400px] w-full p-5 shadow-2xl relative"
            style={{
              backgroundColor: backgroundColor,
              backgroundImage: `url(${pokeball})`,
              backgroundSize: '80px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom right'
            }}
          >
            <div className="flex justify-between">
              <h3 className="font-bold text-white text-xl">{pokemon.name}</h3>
            </div>
            <div className="grid grid-cols-2 items-center gap-10">
              <div className="flex flex-col gap-2">
                <div className="text-white rounded-lg text-center bg-white/20">
                  # {pokemon.id}
                </div>
                <div className="text-white rounded-lg p-0.5 text-center bg-white/20">
                  {pokemon.type}
                </div>
              </div>
              <div>
                <img src={pokemon.image} className="" alt={pokemon.name} />
              </div>
            </div>
            <div>
            </div>
            <button className='absolute top-0 right-0 text-black border rounded-full w-10 h-10 font-semibold bg-white' onClick={() => handleDelete(pokemon.name)}>X</button>
          </Card>
        );
      })}
    </>
  );
};
export default CardLiked;
