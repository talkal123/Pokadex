import React from 'react';
import { Progress } from '../ui/progress';

const BaseStates = ({ pokemon }) => {
  

  const totalStats = pokemon.stats.reduce((total, stats) => total + stats.base_stat, 0);


  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <div className="gap-6 flex flex-col">
          <div className="text-gray-400">HP</div>
          <div className="text-gray-400">Attack</div>
          <div className="text-gray-400">Defense</div>
          <div className="text-gray-400">Sp. Atk</div>
          <div className="text-gray-400">Sp. Def</div>
          <div className="text-gray-400">Speed</div>
          <div className="text-gray-400">Total</div>
        </div>
        <div className="gap-6 flex flex-col">
          {pokemon.stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="font-semibold">{stat.base_stat}</div>
              {stat.base_stat > 70 ? (
                <Progress className="[&>*]:bg-green-600 w-40" value={stat.base_stat} />
              ) : (
                <Progress className="[&>*]:bg-red-600 w-40" value={stat.base_stat} />
              )}
            </div>
          ))}
          <div className="flex items-center gap-5">
            <div className="font-semibold">{totalStats}</div>
            <div className='hidden sm:flex flex-col'>
            {totalStats > 70 ? (
                <Progress className="[&>*]:bg-green-600 w-40" value={totalStats} />
              ) : (
                <Progress className="[&>*]:bg-red-600 w-40" value={totalStats} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="mt-5 gap-10 font-bold text-xl">Breeding</h3>
        <div className="gap-5 grid grid-cols-2">
          <div className="gap-4 flex flex-col">
            <div className="text-gray-400">Base Experience</div>
          </div>
          <div className="gap-4 flex flex-col">
            <div className="font-semibold">{pokemon.base_experience}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseStates;
