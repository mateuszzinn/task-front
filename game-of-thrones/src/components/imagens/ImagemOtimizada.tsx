'use client'

import Image from "next/image"
import ned from "../../../assets/ned.jpg"
import { useState } from "react"

export default function ImagemOtimizada() {
    const[isLightBoxOpen, setIsLightBoxOpen] = useState(false)

    const openLightBox = () => setIsLightBoxOpen(true)

    const closeLightBox = () => {
        setIsLightBoxOpen(false)
        console.log(isLightBoxOpen)
    }

    return (
        <>
          <div className="relative h-screen w-screen flex items-center justify-center">
            <div
              className="max-w-4xl w-full rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={openLightBox}
            >
              <div className="relative h-64 w-full md:h-96 lg:h-auto">
                <Image
                  src={ned}
                  alt="ned stark"
                  width={500}
                  height={500}
                  layout="responsive"
                  objectFit="cover"
                  quality={100}
                  className="object-center"
                  aria-describedby="caption"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6">
                  <p id="caption" className="text-white text-lg font-medium">
                    Game of Thrones - Ned Stark - Trono de Ferro
                  </p>
                </div>
              </div>
            </div>
            {/* ------Aqui vai o lightbox ------ */}
            {isLightBoxOpen && (
              <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center"
                onClick={closeLightBox}
              >
                <div className="relative max-w-5xl w-full rounded-lg overflow-hidden">
                  <Image
                    src={ned}
                    alt="sw"
                    width={1000}
                    height={1000}
                    layout="responsive"
                    objectFit="contain"
                    quality={100}
                  />
                  <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer z-50"
                    onClick={closeLightBox}
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      );
}