import pythonLogo from '../assets/pythonlogo.png'
import javaLogo from '../assets/javalogo.png'
import mernLogo from '../assets/mernlogo.png'
import androidLogo from '../assets/androidlogo.png'

export const projects = [
  {
    id: 'python',
    name: 'Python projects',
    description: "Python was my first touch to programming in 2014. I remember doing simple command-line programs back then, but my programming journey paused for many years. In 2021, I got back to Python when I started my computer science studies. Press to see more info.",
    imageUrl: pythonLogo,
    content: [
      {
        title: 'Minesweeper',
        description: 'This project was a final work of the course Elementary Programming.',
        link: {
          url: 'https://github.com/ViljoHo/Viljon_miinaharava',
          text: 'github/minesweeper'
        }
      },
      {
        title: 'carVSebike',
        description: 'Idea of this project is to make website which shows how much money I have saved riding an electric bike instead of driving a car. I use Polar\'s smart watch to measure cycled distances and this program utilizes this data to make calculations. Backend is made with django and frontend with react. At first, the intention was to learn how to make a small full stack project, but in the end I spent all my time struggling with the Polar Accesslink API and it taught me how to make api calls and oAuth2 operating principles.',
        link: {
          url: 'https://github.com/ViljoHo/carVSebike',
          text: 'github/carVSebike'
        }
      },
      {
        title: 'buyerBot',
        description: 'A car pricing program',
        link: {
          url: 'https://github.com/ViljoHo/buyerBot',
          text: 'github/buyerBot'
        }
      }
    ]
  },
  {
    id: 'java',
    name: 'Java projects',
    description: 'I have used Java the most in school courses. Press to see more info.',
    imageUrl: javaLogo,
    content: [
      {
        title: 'Programming 3 course',
        description: 'HTTPS server made with Java.',
        link: {
          url: 'https://github.com/ViljoHo/Ohjelmointi3',
          text: 'github/ohjelmointi3'
        }
      }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile computing',
    description: 'I have done a few things with mobile app development. Press to see more info.',
    imageUrl: androidLogo,
    content: [
      {
        title: 'Programming 4 course',
        description: 'An android app made with java and android studio.',
        link: {
          url: 'https://github.com/ViljoHo/FindWorkerAndroidApp',
          text: 'github/FindWorkerAndroidApp'
        }
      },
      {
        title: 'Mobile computing course on going (2024 spring)',
        description: 'The course idea is to learn mobile computing and implement some apps with Kotlin',
        link: {
          url: 'https://github.com/ViljoHo/MobileComputingViljoHolma',
          text: 'github/MobileComputingViljoHolma'
        }
      }
    ]
  },
  {
    id: 'web',
    name: 'Web development',
    description: "My interest in web development started in high school. There was one voluntary course called 'www-programming'. There I learnt basic concepts of html, CSS, and JavaScript. During my university studies, I have accumulated more comprehensive skills in web development, for example, on FullStackOpen course. Press to see more info.",
    imageUrl: mernLogo,
    content: [
      {
        title: 'FullStackOpen course',
        description: 'The Full Stack Open course is an excellent overview of full-stack development. During the course, I learned the fundamentals of web development, including building React frontends, state management, styling, and understanding how data moves between the frontend and backend. I gained experience with implementing REST API–based backends and storing data in both NoSQL databases and traditional relational databases. The course also covered user management and authentication, as well as the basics of testing applications through both unit tests and end-to-end testing. Most recently, I learned the basics of container technologies and deploying code to production using CI/CD tools.',
        links: [
          {
            url: 'https://fullstackopen.com/',
            text: 'More info about fullstackopen course'
          },
          {
            url: 'https://github.com/ViljoHo/fullStackOpenCourseRepo',
            text: 'github/fullStackOpenCourse'
          },
          {
            url: 'https://github.com/ViljoHo/full-stack-open-pokedex',
            text: 'github/fullStackopen-CI/CD'
          }
        ]
      },
      {
        title: 'This site (viljoholma.fi)',
        description: 'I used React, MongoDB, Node.js, Express, Tailwind, and many other modules to make this site.',
        link: {
          url: 'https://github.com/ViljoHo/viljoholmafi',
          text: 'github/viljoholmafi'
        }
      }
    ]
  }
]