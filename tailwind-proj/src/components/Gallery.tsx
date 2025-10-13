import React from 'react'
import GalleryCard from './GalleryCard.tsx'

function Gallery(props) {
  return (
    <div className='text-gray-200 max-w-[800px] mt-[-96px] w-full mx-auto text-center flex flex-col columns-3 justify-center'>
      <h1 className='text-gray-200 font-bold text-4xl mb-10'>Gallery</h1>
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
    </div>
  )
}

Gallery.propTypes = {}

export default Gallery
