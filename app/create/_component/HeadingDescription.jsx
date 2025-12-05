import React from 'react'

function HeadingDescription({title,description}) {
  return (
    <div>
        <h2 className='font-bold text-3xl text-pink-500'>{title}</h2>
        <p className='text-lg text-grey-500'>{description}</p>
    </div>
  ) 
}

export default HeadingDescription