import React from 'react'
import { useState } from 'react'
import { cn } from '@/lib/utils'



const skills = [
    // frontend skills
{  name: 'HTML/CSS', category: 'frontend' },
{  name: 'JavaScript', category: 'frontend' },
{  name: 'React', category: 'frontend' },
{  name: 'TypeScript', category: 'frontend' },
{  name: 'Tailwind CSS', category: 'frontend' },
{  name: 'Bootstrap', category: 'frontend' },

// tools
  { name: 'Git/GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Chrome DevTools', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'Vite', category: 'tools' },
  { name: 'NPM', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Docker', category: 'tools' }, 
];

const categories =['all','frontend','tools' ];

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills = skills.filter(
        skill => activeCategory === 'all' || skill.category === activeCategory
    );
     
  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary'>
       <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            My <span className='text-primary'> Skills</span>
        </h2>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {categories.map((category, key) => (
                <button
                    key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn('px-5 py-2 rounded-lg transition-colors duration-300 capitalize',
                    activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'
                    )} 
                >
                    {category}
                </button>
            ))}
            
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredSkills.map((skill, key) => (
                <div 
                    key={key} 
                    className='bg-card p-6 rounded-lg shadow-xs card-hover'
                >
                    <div className='text-left mb-4'>
                        <h3 className='font-semibold text-lg'>{skill.name}</h3>
                    </div>
                    <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                        <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out'
                         />
                    </div>
                </div>
            ))}
        </div>
        </div> 
    </section>
  )
}

export default SkillsSection
