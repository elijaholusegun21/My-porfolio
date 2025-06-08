import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      {" "}
      <div className='container max-w-5xl mx-auto '>
        <h2 className='text-3xl md:text-4xl font-bold text-center '>
          About <span className='text-primary'> Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>

          <h3 className='text-2xl font-semibold mt-5'>Passionate Web Developer</h3>
          <p className='text-muted-foreground text-justify'>
            With over 2 years of experience in web development, I specialize
            in creating responsive, accessible, and performant 
            web applications using modern technologies.
          </p>
          <p className='text-muted-foreground text-justify'>
            I thrive on turning ideas into interactive experiences that not only look
            good but feel intuitive. Whether I’m optimizing a user journey, fine-tuning
            a layout with Tailwind CSS, or integrating TypeScript for scalability, 
            my focus is always on writing clean, maintainable code. I’m a strong believer 
            in lifelong learning and continuously sharpening my craft to stay ahead 
            in this fast-paced industry.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
            <a href="#contact" className='cosmic-button'>
              {" "}
              Get in Touch
            </a>
            <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300' >
            {" "}
            Download CV
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1gap-6 mt-5 '>
           {/* Web Development */}
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
                <Code className='w-6 h-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='font-semibold text-lg'> Web Development</h4>
                <p className='text-muted-foreground'>
                  I build pixel-perfect, lightning-fast, and scalable websites — optimized for every device and every user.
                </p>
              </div>
            </div>
          </div>
          {/* UI/UX Thinking */}
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='w-6 h-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>User-Centered Design</h4>
                  <p className='text-muted-foreground'>
                    Every interface I craft puts the user first — clear navigation, visual hierarchy, and accessibility baked in.
                  </p>
                </div>
              </div>
            </div>

           {/* Collaboration & Soft Skills */}
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='w-6 h-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Team Collaboration</h4>
                  <p className='text-muted-foreground'>
                    Beyond code, I thrive in team environments — breaking down tasks, giving/receiving feedback, and shipping together.
                  </p>
                </div>
              </div>
            </div>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default AboutSection