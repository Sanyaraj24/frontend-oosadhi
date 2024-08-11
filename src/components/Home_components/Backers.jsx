//import React from 'react';

function Backers() {
  return (
    <>
      <div className='backer py-60 mt-32 md:py-32'>
        <h1 className='font-serif font-semibold text-center text-2xl mb-6'>Our Backers</h1>
        <div className='flex flex-col md:flex-row p-3 space-y-5 md:space-y-0 md:space-x-16 px-5 lg:px-28'>
          <div className='box1 flex justify-center w-full md:w-1/3'>
            <img src="/iiitsuratLogo.png" className='w-[60%] h-24  md:w-80 lg:h-40' alt="IIIT Surat Logo" />
          </div>
          <div className='box2 flex justify-center w-full md:w-1/3'>
            <img src="/ruminate.png" className='w-[60%] h-24  md:w-80 lg:h-40' alt="Ruminate Logo" />
          </div>
          <div className='box3 flex justify-center w-full md:w-1/3'>
            <img src="/ssip.png" className='mt-8 w-[40%] h-16 md:w-80 md:mt-16 ' alt="SSIP Logo" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Backers;