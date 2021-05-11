import React from 'react'
// import '../app.css'

export default function Display({colors, bgImage}) {
  return (
    <div style={{
      border: '1px solid salmon',
      width:'300px',
      height: '300px',
      backgroundColor: colors,
      backgroundImage: bgImage,
      
    }}>
      hi
    </div>
  )
}
