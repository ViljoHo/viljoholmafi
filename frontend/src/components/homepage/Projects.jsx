import React from 'react'
import { useState } from 'react'
import PrjoectDialog from '../extraparts/ProjectDialog'
import pythonLogo from '../../assets/pythonlogo.png'
import javaLogo from '../../assets/javalogo.png'
import mernLogo from '../../assets/mernlogo.png'
import androidLogo from '../../assets/androidlogo.png'
import { projects } from '../../data/projectsData'

import Parser from 'html-react-parser'



const Projects = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState('')

    const projectss = [
  
  
        {
          name: 'Python projects',
          description: "Python was my first touch to programming in 2014. I remember doing simple command-line programs back then, but my programming journey paused for many years. In 2021, I got back to Python when I started my computer science studies. Press to see more info.",
          text: Parser("<span className='font-bold' >Minesweeper</span><br />This project was an final work of the course Elementary Programming. <br /><a className='text-cyan-700' href='https://github.com/ViljoHo/Viljon_miinaharava' target='_blank' rel='noreferrer'>github/minesweeper</a> <br /><br /><span className='font-bold' >carVSebike</span><br />Idea of this project is to make website which shows how much money I have saved riding an electric bike instead of driving a car. I use Polar's smart watch to measure cycled distances and this program utilizes this data to make calculations. Backend is made with django and frontend with react. At first, the intention was to learn how to make a small full stack project, but in the end I spent all my time struggling with the Polar Accesslink API and it taught me how to make api calls and oAuth2 operating principles.<br /><a className='text-cyan-700' href='https://github.com/ViljoHo/carVSebike' target='_blank' rel='noreferrer'>github/carVSebike</a> <br /><br /><span className='font-bold' >buyerBot</span><br />A car pricing program<br /><a className='text-cyan-700' href='https://github.com/ViljoHo/buyerBot' target='_blank' rel='noreferrer'>github/buyerBot</a> <br /><br />"),
          imageUrl: pythonLogo
        },
        {
          name: 'Java projects',
          description: 'I have used Java the most in school courses. Press to see more info.',
          text: Parser("<span className='font-bold' >Programming 3 course</span><br />HTTPS server made with Java.<br /><a className='text-cyan-700' href='https://github.com/ViljoHo/Ohjelmointi3' target='_blank' rel='noreferrer'>github/ohjelmointi3</a> <br /><br />"),
          imageUrl: javaLogo
        },
        {
          name: 'Mobile computing',
          description: 'I have done a few things with mobile app development.  Press to see more info.',
          text: Parser("<span className='font-bold' >Programming 4 course</span><br />An android app made with java and android studio. <br /><a className='text-cyan-700' href='https://github.com/ViljoHo/FindWorkerAndroidApp' target='_blank' rel='noreferrer'>github/FindWorkerAndroidApp</a> <br /><br /><span className='font-bold' >Mobile computing course on going (2024 spring)</span><br />The course idea is to learn mobile computing and implement some apps with Kotlin <br /><a className='text-cyan-700' href='https://github.com/ViljoHo/MobileComputingViljoHolma' target='_blank' rel='noreferrer'>github/MobileComputingViljoHolma</a> <br /><br />"),
          imageUrl: androidLogo
        },
        {
          name: 'Web development',
          description: "My interest in web development started in high school. There was one voluntary course called 'www-programming'. There I learnt basic concepts of html, CSS, and JavaScript. During my university studies, I have accumulated more comprehensive skills in web development, for example, on FullStackOpen course. Press to see more info.",
          text: Parser("<span className='font-bold' >FullStackOpen course</span><br />Doing this course at the moment (2024 spring). I am almost done with five first parts(15.1.24). You can see what this course includes at <a className='text-cyan-700' href='https://fullstackopen.com/' target='_blank' rel='noreferrer'>Fullstackopen.com</a> . One site made during this course is running online <a className='text-cyan-700' href=https://backendviljo-21f92865091a.herokuapp.com/ target='_blank' rel='noreferrer'>here.</a> <br/><a className='text-cyan-700' href='https://github.com/ViljoHo/fullStackOpenCourseRepo' target='_blank' rel='noreferrer'>Frontend codes</a><br/><a className='text-cyan-700' href='https://github.com/ViljoHo/FullStackCourseBackend' target='_blank' rel='noreferrer'>Backend codes</a> <br /><br /><span className='font-bold' >This site (viljoholma.fi) </span><br />I used React, Mongedb, Node.js, Express, Tailwind, and many other modules to make this site.<br /><br/><a className='text-cyan-700' href='https://github.com/ViljoHo/viljoholmafi' target='_blank' rel='noreferrer'>github/viljoholmafi</a>"),
          imageUrl: mernLogo
        },
      ]
    
    const openDialog = (projectData) => {
      setDialogData(projectData)
      openDialogHandler(true)
    }

    const openDialogHandler = (isOpen) =>{
      setIsDialogOpen(isOpen)
    }


    return (
        <div id='projects' className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">/ Projects</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Here is an overview of my programming experience. 
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {projects.map((project) => (
                        <li key={project.name}>
                        <div onClick={() => openDialog(project)} className="flex items-center gap-x-6 hover:bg-gray-300 rounded cursor-pointer">
                            <div className=''>
                                <img className="h-20 w-20 object-cover rounded-lg" src={project.imageUrl} alt="" />
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-black">{project.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-gray-900">{project.description}</p>
                            </div>
                        </div>
                        </li>
                     ))}
                </ul>
             </div>

             <PrjoectDialog isDialogOpen={isDialogOpen} dialogData={dialogData} openDialogHandler={openDialogHandler}/>
        </div>
    
  )
}

export default Projects