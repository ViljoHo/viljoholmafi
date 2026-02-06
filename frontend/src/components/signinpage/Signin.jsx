import React from 'react'
import { useState } from 'react'
import signinService from '../../services/signin'
import mainService from '../../services/mainService'
import logo from '../../assets/KäsilogoOikea.svg'

import { Link, useNavigate } from 'react-router-dom'

const Signin = ({ handleUser, testi }) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await signinService.signin({
        username, password,
      })

      window.localStorage.setItem(
        'loggedViljoHolmaFiUser', JSON.stringify(user)
      )

      mainService.setToken(user.token)
      handleUser(user)
      setUsername('')
      setPassword('')
      navigate('/')
    } catch (error) {
      if (error.status === 401) {
        setErrorMessage('wrong username or password')
      } else{
        setErrorMessage(error.message)
      }
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

    }
  }



  return (
    <div className='relative isolate px-6 pt-14 lg:px-8 mt-12 lg:mt-36'>
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{errorMessage}</h1>

      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>




      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-32 w-auto rounded-full"
            src={logo}
            alt="my logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="Username"
                  type="Text"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                  required
                  className='block w-full rounded-md border-1'
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  required
                  className='block w-full rounded-md border-1'
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to={'/register'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register here!</Link>
          </p>
        </div>
      </div>





    </div>
  )
}

export default Signin