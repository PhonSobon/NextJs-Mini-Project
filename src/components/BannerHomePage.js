"use client"
import React from 'react'

export default function BannerHomePage() {
  return (
    <div>
      <div class="items-center justify-center w-full h-full ">
          <div class="inset-0 h-screen bg-cover bg-center" 
              style={{backgroundImage: `url(https://wallpapercave.com/wp/wp6689710.jpg)` }}
          >
          </div>
          <div class="absolute inset-0  flex items-center justify-center h-screen w-full bg-opacity-75"></div>
          <div class="absolute inset-0   flex flex-col items-center justify-center">
              <div class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
                  style={{backgroundImage: `url(https://wallpapercave.com/wp/wp6689710.jpg)` }}
                  >

                  <div class="grid grid-cols-12 gap-1">
                      <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                          <div class="border-l-4 py-20 px-5 mx-2 absolute left-0">
                              <p class="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                                  The Mysteries Of The Forest
                              </p>
                          </div>
                          <div class=" font-semibold text-xl mb-4">07</div>
                          <div class="border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                      </div>
                      <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                          <div class="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                              <div class="p-8">
                                  <p class="text-white text-xs md:text-sm lg:text-xl mb-4">
                                      Forests are truly amazing places. 
                                      Combining impressive biodiversity with natural beauty, 
                                      the woods of the world can be both captivating and perplexing. 
                                      A hike through a forest can be a relaxing way to pass an afternoon or, 
                                      sometimes, a glimpse into the unknown.
                                  </p>
                                  <div class="bottom-0 absolute p-2 right-0">
                                      <button class="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                          <span>LEARN MORE</span>
                                      </button> 
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
