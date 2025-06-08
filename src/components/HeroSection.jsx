import { ArrowDown } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section 
        id='hero'  
        className='relative min-h-screen flex flex-col items-center justify-center px-4'
    >
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-3xl md:text-5xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm </span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'> 
                        {" "}
                        Elijah
                    </span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>
                        {" "} 
                        Omokolade
                    </span>
                    <span className='text-primary ml-3 opacity-0 animate-fade-in-delay-3'> 
                        {" "}Ashaolu
                    </span>
                </h1>
                <p className='text-lg md:text-xl text-muted-foreground opacity-0 max-2-2xl mx-auto animate-fade-in-delay-4'>
                    I create stellar web experiences with modern technologies.
                    Specializing in front-end development, I build responsive, user-friendly
                    interfaces that engage and delight users.
                </p>
                <div className='pt-4 opacity-0 animate-fade-in-delay-5'>
                    <a href="#projects" className='cosmic-button'>
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
            <span className='text-sm text-muted-foreground mb-2'> Scroll </span>
            <ArrowDown className='w-5 h-5 text-primary '/>
        </div>
    </section>
  )
}

export default Hero
