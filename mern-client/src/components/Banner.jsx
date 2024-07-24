import React from 'react'
import BannerCard from '../home/BannerCard'

export default function Banner() {
  return (
    <div className='px-4 pt-16 lg:px-24 bg-teal-100 flex items-center '> 
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-400'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                <p className='md:w-4/5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci iusto numquam facilis ducimus, cumque ab quisquam recusandae? Rem quo ipsum maxime, mollitia fugit necessitatibus corrupti neque impedit repellendus omnis eveniet.</p>
                <div>
                    <input type="search" name='search' id='search' placeholder='Search' className='py-2 px-2 rounded-s-sm outline-none' />
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

        </div>
        {/* right side */}
        <div>
            <BannerCard></BannerCard>
        </div>
      
    </div>
  )
}
