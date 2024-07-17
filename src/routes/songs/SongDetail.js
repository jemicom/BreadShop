import React from 'react'
import { useParams } from 'react-router-dom'

 

const SongDetail = () => {

  const songs = []  // 0~26
  for(let a=0 ; a<27 ; a++){
    songs.push({ id:a, title : `song title ${a}`})
  }  

  const { id } =  useParams();
  // localhost:3000/song?title=songtitle
  console.log( id )
  return (
    <div>
        <h1>SongDetail {id}</h1>
        <div>{songs[id].id}</div>
        <div>{songs[id].title}</div>
    </div>
  )
}

export default SongDetail