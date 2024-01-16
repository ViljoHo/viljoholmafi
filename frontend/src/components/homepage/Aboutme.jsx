import React from 'react'
import { BriefcaseIcon, HeartIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import Parser from 'html-react-parser'
import collage from '../../assets/images/kollaasimin.png'

const Aboutme = () => {

    const features = [


        {
          name: 'Spare time.',
          description:
            " I'm all about the great outdoors and staying active. My main hobbies revolve around ice hockey, hitting the gym, and enjoying the tranquility of fishing.",
          icon: HeartIcon,
        },
        {
          name: 'Study.',
          description: "The third year of study in computer science at the University of Oulu is underway. Some of the most fascinating courses for me have been all the programming ones. In addition, the <a className='text-cyan-700' href='https://fullstackopen.com/' target='_blank' rel='noreferrer'>FullStackOpen</a> course going on at the moment has been really interesting.",
          icon: AcademicCapIcon,
        },
        {
          name: 'Work experience.',
          description: "My first job was as a telemarketer. My task was to get demonstration visits to sellers by phone. I did this for three summers and partly during high school. Since then, I have worked as a window cleaner and house painter on my own as a light entrepreneur. <span className='text-slate-950 text-lg'>Now I am looking for a first trainee position in the tech field!</span>",
          icon: BriefcaseIcon,
        },
      ]



    return (
        <div id='aboutme' className="overflow-hidden bg-white py-24 2xl:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">/ About Me</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      I am a twentysomething year old student from Oulu.
                    </p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                            {feature.name}
                          </dt>{' '}
                          <dd className="inline">{Parser(feature.description)}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                {/* lg:max-w-max sm:max-w-sm */}
                <img
                  src={collage}
                  alt="Photo collage about me"
                  className="w-[48rem] mt-6 max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 2xl:max-w-max md:-ml-4 lg:-ml-0"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
        </div>

  )
}

export default Aboutme