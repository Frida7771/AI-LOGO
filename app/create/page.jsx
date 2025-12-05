import React from 'react'
import LogoTitle from './_component/LogoTitle';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

function CreateLogo() {
  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
        <LogoTitle/>

        <div className='flex item-center justify-between mt-10'>
            <Button variant="outline"> <ArrowLeft>Previous</ArrowLeft></Button>
            <Button variant="pink"><ArrowRight>Continue</ArrowRight></Button>
        </div>
    </div>
  )
}

export default CreateLogo;