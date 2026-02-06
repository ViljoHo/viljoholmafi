import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Home from './components/homepage/Home'
import Signin from './components/signinpage/Signin'
import Register from './components/signinpage/Register'
import GetupButton from './components/extraparts/GetupButton'


import { cloneElement, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HashLink } from 'react-router-hash-link'
import { useEffect } from 'react'
import logosrc from './assets/KäsilogoOikea.svg'
import mainService from './services/mainService'






const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedViljoHolmaFiUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      mainService.setToken(user.token)
    }
  }, [])



  const handleUser = (user) => {
    setUser(user)
  }

  const logOut = () => {
    window.localStorage.removeItem('loggedViljoHolmaFiUser')
    setUser(null)
    mainService.setToken(null)


  }




  return (
    <Router>

    
    <div className="bg-white" id='welcome'>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Viljo</span>
              <img
                className="h-16 w-auto rounded-full"
                src={logosrc}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <HashLink className="text-sm font-semibold leading-6 text-gray-900" to={'/#welcome'}>Welcome</HashLink>
            <HashLink className="text-sm font-semibold leading-6 text-gray-900" to={'/#aboutme'}>About Me</HashLink>
            <HashLink className="text-sm font-semibold leading-6 text-gray-900" to={'/#projects'}>Projects</HashLink>
            <HashLink className="text-sm font-semibold leading-6 text-gray-900" to={'/#game'}>Game</HashLink>
            <HashLink className="text-sm font-semibold leading-6 text-gray-900" to={'/#contactme'}>Contact Me</HashLink>
          </div>
          {!user && <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/signin'}>Sign in<span aria-hidden="true">&rarr;</span></Link>
            </div>
          }
          {user && <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <p className='mb-0 mr-2 mt-[2px] font-semibold leading-6 text-gray-900'>Hi, {user.username}!</p>
            <button
              onClick={logOut}
              className="rounded-md bg-gray-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log out
            </button>
          </div>
          }
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-16 w-auto rounded-full"
                  src={logosrc}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button className="bg-gray-100 -mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}><HashLink className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/#welcome'}>Welcome</HashLink></button>
                  <button className="bg-gray-100 -mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}><HashLink className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/#aboutme'}>About Me</HashLink></button>
                  <button className="bg-gray-100 -mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}><HashLink className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/#projects'}>Projects</HashLink></button>              
                  <button className="bg-gray-100 -mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}><HashLink className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/#game'}>Game</HashLink></button> 
                  <button className="bg-gray-100 -mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}><HashLink className="text-base font-semibold text-gray-900" to={'/#contactme'}>Contact Me</HashLink></button>
                </div>
                {!user && <div className="py-6">
                  <Link onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/signin'}>Log in <span aria-hidden="true">&rarr;</span></Link>
                </div>}
                {user && <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    <p>Hi {user.username}!</p>
                    <button
                      onClick={logOut}
                      className="rounded-md bg-gray-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Log out
                    </button>
                 </div>
                  }
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <Routes>
         <Route path="/signin" element={<Signin handleUser={handleUser}/>} />
         <Route path="/register" element={<Register />} />
         <Route path="/" element={<Home user={user}/>} />
      </Routes>

    </div>

    <GetupButton />




    </Router>
  )
}

export default App

