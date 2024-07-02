import React from 'react'

const Cardo = ({buttonName,bgcol,textcol,bordercol}:{buttonName:string,bgcol:string,textcol:string,bordercol:string}) => {
  
  return (
    <div className='h-48 w-96 border border-black rounded-lg'>
      {/* 1st part */}
      <div className='flex justify-between h-12 '>
        <div className='flex w-40 text-black font-bold text-lg  justify-center items-center '>Notion+FlowList</div>
        <div className='flex w-40  justify-centre items-center'>
        <button className={'w-16 h-5  text-sm border  rounded-lg ml-24'+bgcol+textcol+bordercol}>{buttonName}</button>
        </div>
      </div>
      
      {/* 2nd part */}
      <div className='flex justify-evenly gap-4  h-20  '>
        <div className='flex w-40 justify-center items-center '>
        <img className='h-20 w-20' src="/notion.png" alt="loading..." />
        </div>
        <div className='flex w-20 justify-center items-center '>
        <img className='h-15 w-15' src="/arrow.png" alt="loading..." />
        </div>
        <div className='flex w-40 justify-center items-center '>
        <img className='h-20 w-20' src="/flow.png" alt="loading..." />
        </div>
      </div>
      {/* 3rd part */}
      <div  className='flex justify-between h-12 mt-2' >
        <div className='flex w-40 justify-center items-center '>
        <img className='h-10 w-10 border rounded-full' src="/image1.png" alt="loading..." />
        <p text-black text-xs >by Group</p>
        </div>
        <div className='flex w-40   text-black font-bold text-lg  justify-center items-center ml-40'>...</div>
      </div>
    </div>
  )
}

export default Cardo
