"use client"

import React from 'react'
import Lookup from '../_data/Lookup';
import {Button} from '../../components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

function Hero() {
  const [logoTitle, setLogoTitle]=useState();
  return (
    <div className='flex items-center mt-32 flex-col gap-5'>
        <h2 className='text-pink-500 text-5xl text-center font-bold '>{Lookup.HeroHeading}</h2>
        <h2 className ='text-5xl text-center font-bold'>{Lookup.HeroSubheading}</h2>
        <p className='text-lg text-grey-500 text-center'>{Lookup.HeroDesc}</p>

        <div className='flex gap-6 w-full max-w-2xl mt-10'>
          <input placeholder={Lookup.InputTitlePlaceHolder}
          className='p-3 border rounded-md flex-1 shadow-md'
            onChange={(event)=>setLogoTitle(event?.target.value)}
          />
          <Link href={'/create?title='+logoTitle}>
          <Button variant="pink" className="p-6 whitespace-nowrap">Get Started</Button>
          </Link>
        </div>
    </div>
  )
}

export default Hero;

