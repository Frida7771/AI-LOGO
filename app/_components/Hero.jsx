import React from 'react'
import Lookup from '../_data/Lookup';
export default function Hero() {
  return (
    <div>
        <h2>{Lookup.HeroHeading}</h2>
        <h2>{Lookup.HeroSubheading}</h2>
        <p>{Lookup.HeroDesc}</p>
    </div>
  )
}
