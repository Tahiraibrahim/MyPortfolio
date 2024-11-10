import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                    I have a solid foundation in web development, specializing in HTML, CSS, and Javascript . My experience extends to using frameworks like React and Next.js to create dynamic and user friendly applications. I am also proficient in Tailwind CSS for efficient styling and design. Wit a passion for learning, I stay updated on the latest technologies to enhance my skills set and contribute effectively to project.
                    </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in">Typescript</h2>
                        <h2 data-aos="zoom-in">Next.js</h2>
                        <h2 data-aos="zoom-in">React.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in">Tailwind</h2>
                        <h2 data-aos="zoom-in">CSS</h2>
                        <h2 data-aos="zoom-in">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills