import React from 'react'

const About = ({pokemon}) => {
  return (
    <div>
      <div className=' grid grid-cols-2'>
        <div className='gap-6 flex flex-col'>
            <div className='text-gray-400'>Species</div>
            <div className='text-gray-400'>Height</div>
            <div className='text-gray-400'>Weight</div>
            <div className='text-gray-400'>Abilities</div>
        </div>
        <div className='gap-6 flex flex-col'>
            <div className='font-semibold'>{pokemon.species.name}</div>
            <div className='font-semibold'>{pokemon.height} cm</div>
            <div className='font-semibold'>{pokemon.weight} kg</div>
            <div className='font-semibold'>{pokemon.abilities[0].ability.name}</div>
        </div>
      </div>
      <div className='flex flex-col'>
        <h3 className='mt-5 gap-10 font-bold text-xl'>Breeding</h3>
        <div className='gap-5 grid grid-cols-2 mt-5'>
        <div className='gap-4 flex flex-col'>
            <div className='text-gray-400'>Id</div>
            <div className='text-gray-400'>Base Experience</div>
        </div>
        <div className='gap-4 flex flex-col'>
            <div className='font-semibold'>{pokemon.id}</div>
            <div className='font-semibold'>{pokemon.base_experience}</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
