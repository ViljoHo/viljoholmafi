import React from 'react'
import { useState } from 'react'

import { ArrowUpIcon } from '@heroicons/react/20/solid'

const GetupButton = () => {
    const [upButtonVisible, setUpButtonVisible] = useState(false)

    const toggleUpButtonVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300){
        setUpButtonVisible(true)
      }
      else if (scrolled <= 300){
        setUpButtonVisible(false)
      }
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    window.addEventListener('scroll', toggleUpButtonVisible)


    return (

        <div style={{display: upButtonVisible ? 'inline' : 'none'}} className={'fixed bottom-5 right-5'}>
            <button onClick={scrollToTop} className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
                <ArrowUpIcon className="flex left-2/4 top-2/4 h-7 w-7 text-white-600" aria-hidden="true"/>
            </button>

        </div>
  )
}

export default GetupButton