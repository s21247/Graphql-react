import React, {useCallback, useEffect, useState} from "react";
import Image1 from '../../images/Image3.jpg'
import Image2 from '../../images/Image1.jpg'
import Image3 from '../../images/Image2.jpg'
import useImagePreloader from "../Hooks/useImagePreloader";
const MainImage = () => {
  const preloadSrcList: string[] = [Image1,Image2,Image3]
  const [obj,setObj] = useState<{currentImage: number,images: string[] }>({
    currentImage: 1,
    images: preloadSrcList
  })

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setObj({
      currentImage: +e.currentTarget.value,
      images: [...obj.images]
    })
  },[obj])

  useEffect(() => {
    const switchImage = () => {
      if(obj.currentImage < obj.images.length - 1) {
        setObj({
          currentImage: obj.currentImage + 1,
          images: [...obj.images]
        })
      }else {
        setObj({
          currentImage: 0,
          images: [...obj.images]
        })
      }
    }
    const interval = setInterval(() => {
      switchImage()
    },25000)

    return () => clearInterval(interval)

  },[obj,handleChange])

  const {imagesPreloaded} = useImagePreloader(preloadSrcList)
  if(!imagesPreloaded){
    return <p>Preloading assets</p>
  }


  return (
    <div className="carousel relative container mx-auto h-full max-w-128">
      <div className="carousel-inner overflow-hidden relative w-full">
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          value={1}
          aria-hidden="true"
          hidden={true}
          checked={obj.currentImage===1}
          onChange={handleChange}
        />
        <div
          className="carousel-item absolute opacity-0 bg-cover h-80 md:h-128">
          <div
            className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
            style={{
              backgroundImage: "url(" + obj.images[1] + ")",
            }}
          >
            <div className="container mx-auto mt-20 md:mt-0">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-black text-large md:text-2xl my-auto md:my-4">
                  Stripy Zig Zag Pillow and Duvet Set
                </p>
                <a
                  className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                  href="/"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-3"
          className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-2"
          className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden={true}
            value={2}
            checked={obj.currentImage===2}
            onChange={handleChange}
        />
        <div
            className="carousel-item absolute opacity-0 h-80 md:h-128">
          <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
              style={{
                backgroundImage: "url(" + obj.images[0] + ")",
              }}
          >
            <div className="container w-full mx-auto mt-20 md:mt-0">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-gray-200 text-large md:text-2xl my-4">
                  Light Pendant Lightning
                </p>
                <a
                    className="relative text-gray-200 text-xl inline-block no-underline border-b border-gray-200 leading-relaxed hover:text-black hover:border-black"
                    href="/"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-1"
          className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-3"
          className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        <input
          className="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden={true}
          checked={obj.currentImage===0}
          onChange={handleChange}
          value={0}
        />
        <div
          className="carousel-item absolute opacity-0 h-80 md:h-128"
        >
          <div
            className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
            style={{
              backgroundImage: "url(" + obj.images[2] + ")",
            }}
          >
            <div className="container mx-auto mt-20">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-black text-large md:text-2xl my-auto md:my-4">
                  Brown and blue hardbound book
                </p>
                <a
                  className="relative text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                  href="/"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-2"
          className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center  inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-1"
          className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-3"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default MainImage;
