import React from 'react'
import GalleryCard from './GalleryCard.tsx'

function Gallery(props) {
  return (
   <div className ='max-w-100 bg-zinc-100'>
      <div className=' text-zinc-950 max-w-[1240px] mt-[-96px] p-5 w-full mx-auto text-center flex flex-col justify-center'>
        <h1 className='font-bold text-4xl mb-10'>Gallery</h1>
        <div className="columns-3">
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
        </div>
      </div>
    </div> 
  )
}

Gallery.propTypes = {}

export default Gallery
