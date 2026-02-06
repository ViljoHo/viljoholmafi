import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const PrjoectDialog = ({ isDialogOpen, dialogData, openDialogHandler }) => {


  return (
    <Transition.Root show={isDialogOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={openDialogHandler}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <img className="h-25 w-25 rounded-lg m-auto" src={dialogData.imageUrl} alt="" />
                    <div className="">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          {dialogData.name}
                        </Dialog.Title>
                        <div className="mt-2 items-center">
                          {/* <p className="text-sm text-gray-500">
                            {dialogData.text}
                          </p> */}
                          {dialogData.content?.map((item, index) => (
                            <div key={index} className="mb-4">
                              <h3 className="font-bold">{item.title}</h3>
                              <p className="text-sm leading-6 text-gray-900" >{item.description}</p>
                              {item.link && (
                                <a 
                                  className="text-cyan-700" 
                                  href={item.link.url} 
                                  target="_blank" 
                                  rel="noreferrer"
                                >
                                  {item.link.text}
                                </a>
                              )}{item.links && (
                                item.links.map((link, index) => (
                                  <a 
                                    className="text-cyan-700 block" 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    key={index}
                                  >
                                    {link.text}
                                  </a>

                                ))
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => openDialogHandler(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default PrjoectDialog