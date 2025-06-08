import { ArrowRight, ExternalLink, Github, Tags } from 'lucide-react'
import React from 'react'

const projects =[
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'An online store built with React and Tailwind CSS, featuring product listings, a shopping cart',
    image: '/projects/project1.png',
    tags:['React', 'Tailwind CSS'],
    demoUrl: 'https://e-commerce-nu-mocha.vercel.app/',
    githubUrl:'https://github.com/elijaholusegun21/e-commerce',
  },

  {
    id: 2,
    title: 'Movieo',
    description: 'A Responsive Movie Streaming UI Built with React & TMDB APIShort, catchy, and gives just enough detail to impress without oversharing.',
    image: '/projects/project2.png',
    tags:['React', 'Tailwind CSS', 'TMDB API'],
    demoUrl: 'https://movie-app-web-five.vercel.app/',
    githubUrl:'https://github.com/elijaholusegun21/movie-app',
  },

  {
    id: 3,
    title: 'Great Minds Real Estate',
    description: 'A Real Estate Website Built with React and Tailwind CSS, featuring property listings, search functionality, and user authentication.',
    image: '/projects/project3.png',
    tags:['React', 'Tailwind CSS'],
    demoUrl: 'https://greatmind-real-estate.vercel.app/',
    githubUrl:'https://github.com/elijaholusegun21/Real-estate',
  }
]


const ProjectSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          {" "}
          Featured <span className='text-primary'> Projects</span>
          </h2>

          <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Here are some of my recent projects that showcase my skills and creativity. 
            Each project is a testament to my dedication to building high-quality 
            web applications.   
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {projects.map((project, key) => (
                <div 
                  key={key}
                  className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
                >
                  <div className='h-48 overflow-hidden'>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                  </div>

                  <div className='p-6'>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.tags.map((tag, i) => (
                        <span key={i} className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                    <p className='text-muted-foreground text-sm mb-4 text-justify'>{project.description}</p>
                    <div className='flex justify-between items-center'>
                      <div className='flex space-x-3'>
                        <a 
                          href={project.demoUrl} 
                          target='_blank'
                          rel="noopener noreferrer"
                          className='text-foreground/80 hover:text-primary transition-colors duration-300'
                        >
                          <ExternalLink size={20}/>
                        </a>
                        <a 
                          href={project.demoUrl}
                          target='_blank'
                          rel="noopener noreferrer"
                          className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                          <Github size={20}/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className='mt-12 text-center'>
              <a href="https://github.com/elijaholusegun21"
                 className='cosmic-button w-fit flex items-center gap-2 mx-auto'
                 target='_blank'
                 rel="noopener noreferrer"
               >
                Check My GitHub <ArrowRight size={16} />
              </a>
          </div>
      </div>
    </section>
  )
}

export default ProjectSection
