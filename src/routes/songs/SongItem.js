import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = ({song}) => {
  return (
    <div>
        <Link to={`/songs/${song.id}`}>SongItem {song.title}</Link>
    </div>
  )
}

export default SongItem