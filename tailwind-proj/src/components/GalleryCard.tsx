import React from 'react';

const GalleryCard = () => {
  return (
    <div className='max-w-sm rounded-lg overflow-hidden shadow-xl  bg-zinc-900' >
        <img className='w-full max-h-sm shadow-lg shadow-gray-800' src="https://static.wixstatic.com/media/595288_2ea41cc6e4ca4cbaa001ab3a7cfdcdb4~mv2.png/v1/fit/w_480,h_480,q_90,enc_avif,quality_auto/595288_2ea41cc6e4ca4cbaa001ab3a7cfdcdb4~mv2.png" alt='Grunge Brochure Mock-up' />
        <div className='px-6 py-4'>
            <div className='text-zinc-200 font-bold text-xl mb-2'>The Coldest Sunset</div>
            <p className='text-gray-200 text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
        </div>
    </div>

  )
}

export default GalleryCard