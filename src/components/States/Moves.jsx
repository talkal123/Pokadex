import React from 'react'

const Moves = ({ pokemon }) => {
  console.log(pokemon);
  

  return (
    <div className='grid grid-cols-2'>
    <div>
    <h2 className='font-bold text-xl underline p-2'>Moves:</h2>
    {pokemon.moves.map((pokemonMove, index) => (
      <div key={index}>
        <p className='grid grid-cols-3 ml-2'>{pokemonMove.move.name}</p>

      </div>
    ))}
    </div>

    <div>
    <h2 className='font-bold text-xl underline p-2'> Details:</h2>
    {pokemon.moves.slice(0,12).map((pokemonMove, index) => (
      <div key={index}>
        {pokemonMove.version_group_details.map((detail, versionIndex) => (
          <p key={versionIndex} className="text-sm text-gray-600 ml-2">
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
