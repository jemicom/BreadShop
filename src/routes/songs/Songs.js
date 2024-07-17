import React from 'react' 
import SongItem from './SongItem'

const Songs = () => {

  const songs = []  // 0~26
  for(let a=0 ; a<27 ; a++){
    songs.push({ id:a, title : `song title ${a}`})
  }
  
  return (
    <div>
        {
            songs.map(song=><SongItem song={song}/>)
        }
    </div>
  )
}

export default Songs