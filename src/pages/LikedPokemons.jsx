import CardLiked from '@/components/CardLiked'
import Nav from '@/components/Nav'
import React from 'react'

const LikedPokemons = ({likedPokemons}) => {
  return (
    <div className='p-10 max-w-[1100px] mx-auto flex flex-col gap-6'>
        <Nav />
        <CardLiked likedPokemons={likedPokemons} />
    </div>
  )
}

export default LikedPokemons
