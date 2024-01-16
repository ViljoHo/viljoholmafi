import React from 'react'
import { useState, useEffect } from 'react'

import mainService from '../../services/mainService'



const Contactme = ({ user }) => {

    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('a new comment...')

    useEffect(() => {
      mainService
        .getAllComments()
        .then(initialNotes => {
          setComments(initialNotes)
        })
    }, [])



    const addComment = (event) => {
      event.preventDefault()

      const commentObject = {
        content: newComment
      }

      mainService
        .createComment(commentObject)
        .then(returnedComment => {
            const returnedCommentWithUsername = {
              content: returnedComment.content,
              user: {
                  username: user.username
              },
              id: returnedComment.id
          }
          setComments(comments.concat(returnedCommentWithUsername))
          setNewComment('')
        })
        .catch((error) => {
          alert("You have to be logged in to save a comment.")
        })


    }

    const deleteComment = (id) => {

      const deletingComment = comments.find(comment => comment.id === id)
      if (window.confirm(`Delete ${deletingComment.content}`))
      mainService
        .deleteComment(id)
        .then(returnedComment => {
          setComments(comments.filter(comment => comment.id !== id ))
        })
        .catch((error) => {
          alert("You have to be logged in to save a comment.")
        })

    }


    return (
      <div id='contactme' className="bg-white py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">/ Contact Me</p>

          <div className='md:flex'>
            <div className='w-full md:flex-initial md:w-1/2 mr-2 bg-white'>

              <p className='font-bold text-lg mt-6'>Phone: +358443044699</p>
              <p className='font-bold text-lg mt-6'>Email: viljo.holma@gmail.com</p>
              <p className='font-bold text-lg mt-6'><a className='text-cyan-700' href='https://github.com/ViljoHo' target='_blank' rel='noreferrer'>github.com/ViljoHo</a></p>
              <p className='font-bold text-lg mt-6'><a className='text-cyan-700' href='https://www.linkedin.com/in/viljo-holma-303501267/' target='_blank' rel='noreferrer'>LinkedIn</a></p>


            </div>

            <div className='w-full md:flex-initial md:w-1/2 ml-2 bg-white'>

              <form className='mt-12 md:mt-6' onSubmit={addComment}>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-6 bg-white">
                    <h2 className="text-base ml-6 font-semibold leading-7 text-gray-900">You can also leave a public comment to this site if you are logged in.</h2>

                    <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full p-4">
                        <div className="mt-2">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-4 ring-offset-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={newComment}
                            onChange={({ target }) => setNewComment(target.value)}
                          />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write what you think about this site or something what ever you want! <span className='text-xl'>☺</span></p>
                      </div>


                    </div>
                  </div>

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </form>



            </div>

          </div>

          <div className='w-full bg-white mt-4'>
            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comment section</p>
            <ul role="list" className="divide-y divide-gray-100 overflow-auto max-h-[500px]">
              {comments.map((comment) => (
                <li key={comment.id} className="flex justify-between gap-x-6 py-5">
                  <div className='grid'>
            
            
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{comment.user.username}:</p>
                      </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col">
                      <p className="text-sm leading-6 text-gray-900">{comment.content}</p>
                    </div>
            
                  </div>
                  
                  {user && (user.username === comment.user.username) && <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                    <button
                      onClick={() => deleteComment(comment.id)}
                      className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Delete
                    </button>
                  </div>}
                </li>
              ))}
            </ul>
          </div>


      </div> 
    </div>


    )
}

export default Contactme