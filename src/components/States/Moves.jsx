import React from 'react'

const Moves = ({ pokemon }) => {
  console.log(pokemon);
  

  return (
    <div className='grid grid-cols-2'>
    <div>
    <h2 className='font-bold text-xl underline p-2'>{pokemon.name}'s Moves:</h2>
    {pokemon.moves.map((pokemonMove, index) => (
      <div key={index}>
        <p className='grid grid-cols-3'>{pokemonMove.move.name}</p>

      </div>
    ))}
    </div>

    <div>
    <h2 className='font-bold text-xl underline p-2'>{pokemon.name}'s Details:</h2>
    {pokemon.moves.map((pokemonMove, index) => (
      <div key={index}>
        {pokemonMove.version_group_details.map((detail, versionIndex) => (
          <p key={versionIndex} className="text-sm text-gray-600">
            {detail.move_learn_method?.name || 'Unknown Version'}
          </p>
        ))}

      </div>
    ))}
    </div>
    
  </div>
  )
}

export default Moves
