import { Card } from './ui/card'
import pokeball from "../assets/pokeball.png"
import typeColors from '@/helpers/pokemonTypes';



const CardHomePage = ({ data }) => {
  const backgroundColor = typeColors[data.type.toLowerCase()] || '#fff'; 


  

  return (
    <Card className="min-h-[400px] p-5 shadow-2xl" style={{
      backgroundColor: backgroundColor,
      backgroundImage: `url(${pokeball})`,
      backgroundSize: '80px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right'
    }}>
      <div className='flex justify-between'>
        <h3 className='font-bold text-white text-xl'>{data.name}</h3>
        
        
      </div>
      <div className='grid grid-cols-2 items-center gap-10'>
        <div className='flex flex-col gap-2'>
          <div className="text-white rounded-lg  text-center bg-white/20"># {data.id}</div>
          <div className="text-white rounded-lg  p-0.5 text-center bg-white/20">{data.type}</div>
        </div>
        <div>
          <img src={data.image} className='' alt={data.name} />
        </div>
      </div>
    </Card>
  );
};

export default CardHomePage;
