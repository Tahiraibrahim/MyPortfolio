import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id:0,
        title:"Intractive Resume",
        desc: "A html css and typescript and next.js based intractive resume builder",
        img: "/project-1.jpg",
        tags: ["Html" , "CSS" , "Typescript"],
    },
    {
      id:1,
      title:"Hello World",
      desc: "A html css and next.js first project creative website hello world page",
      img: "/project-2.jpg",
      tags: ["Next.js" ,"Html" , "CSS"],
    },
    {
    id:2,
    title:"Dynamic Routing",
    desc: "A html css and next.js project with routing website dynamic routing website",
    img: "/project-3.jpg",
    tags: ["Html" , "CSS" , "Next.js"],
    },
    {
      id:3,
      title:"Sherable Resume",
      desc: "A html css and next.js project website with pdf and sherable resime builder",
      img: "/project-4.jpg",
      tags: ["Html" , "CSS" , "Next.js"],
    },
    {
      id:4,
      title:"Dynamic Routes",
      desc: "A html css and next.js website with routes group website dynamic routes website",
      img: "/project-5.jpg",
      tags: ["Html" , "CSS" , "Next.js"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  )
}

export default Projects