'use client'

import { Dialog, Transition } from '@headlessui/react'
import NextImage, { ImageProps } from 'next/image'
import { Fragment, useState } from 'react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const resolveSrc = (src: ImageProps['src']) => {
  if (typeof src !== 'string') {
    return src
  }

  return `${basePath}${src}`
}

const ZoomImage = ({ src, alt, className, width, height, unoptimized, ...rest }: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const resolvedSrc = resolveSrc(src)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group block max-w-full cursor-zoom-in text-left"
        aria-label={alt ? `Expand image: ${alt}` : 'Expand image'}
      >
        <NextImage
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          unoptimized={unoptimized}
          className={`${className || ''} transition-opacity group-hover:opacity-95`}
          {...rest}
        />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-70" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/85" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto p-4 sm:p-6">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-7xl">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-2 top-2 z-10 rounded-full bg-black/65 p-2 text-white transition hover:bg-black/80"
                    aria-label="Close image preview"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div className="rounded-lg p-2">
                    <NextImage
                      src={resolvedSrc}
                      alt={alt}
                      width={typeof width === 'number' ? width * 2 : 1600}
                      height={typeof height === 'number' ? height * 2 : 1200}
                      unoptimized={unoptimized}
                      className="h-auto max-h-[85vh] w-full rounded-md object-contain"
                    />
                  </div>

                  {alt && (
                    <Dialog.Description className="mt-3 text-center text-sm text-gray-200">
                      {alt}
                    </Dialog.Description>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ZoomImage
