import React, { useState } from 'react'
import About from './States/About'
import BaseStates from './States/BaseStates'
import Evolution from './States/Evolution'
import Moves from './States/Moves'


const StateComponent = ({pokemon,pokemonSpecies}) => {
  const [activeTab,setActiveTab] = useState('about')
  


  return (
    <div className='bg-white w-full p-5 rounded-t-lg flex flex-col gap-10 md:p-15 '>
      <div>
        <ul className='flex justify-between gap-2 md:gap-0'>
          <div>
            {activeTab === 'about' ?(
              <li onClick={() => setActiveTab('about')} className='font-semibold cursor-pointer text-sm border-b-2 md:text-lg'>About</li>
            ): (
              <li onClick={() => setActiveTab('about')} className='font-semibold cursor-pointer hover:border-b-2 text-sm  md:text-lg'>About</li>
            )}
          </div>
          <div>
          {activeTab === 'baseState' ?(
            <li onClick={() => setActiveTab('baseState')} className='font-semibold cursor-pointer border-b-2 text-sm  md:text-lg'>States</li>
          ): (
            <li onClick={() => setActiveTab('baseState')} className='font-semibold cursor-pointer hover:border-b-2 text-sm  md:text-lg'>States</li>
          )}
          </div>
          <div>
          {activeTab === 'evolution' ?(
            <li onClick={() => setActiveTab('evolution')} className='font-semibold cursor-pointer border-b-2 text-sm  md:text-lg'>Evolution</li>
          ): (
            <li onClick={() => setActiveTab('evolution')} className='font-semibold cursor-pointer hover:border-b-2  text-sm  md:text-lg'>Evolution</li>
          )}
          </div>
          <div>
          {activeTab === 'moves' ?(
            <li onClick={() => setActiveTab('moves')} className='font-semibold cursor-pointer border-b-2 text-sm  md:text-lg'>Moves</li>
          ): (
            <li onClick={() => setActiveTab('moves')} className='font-semibold cursor-pointer hover:border-b-2  text-sm  md:text-lg'>Moves</li>

          )}
          </div>
        </ul>
      </div>
      {activeTab === 'about' &&<About pokemon={pokemon}/>}
      {activeTab === 'baseState' &&<BaseStates pokemon={pokemon}/>}
      {activeTab === 'evolution' && <Evolution pokemon={pokemon} pokemonSpecies={pokemonSpecies}/>}
      {activeTab === 'moves' && <Moves pokemon={pokemon}/>}
      
    </div>
  )
}

export default StateComponent
