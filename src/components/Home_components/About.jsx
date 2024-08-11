//import React from 'react'


function About() {
  return (
    <>
<div className='Content-part1 flex flex-col md:flex-row p-6 md:p-16 md:pt-32 space-y-10 md:space-y-0 md:space-x-10 py-10 mb-10'>
    {/*part1*/}
  <div className='Contentpart1-left w-full md:w-2/3 '>
    <h2 className='font-medium font-serif text-3xl md:text-5xl'>
      What We
      Actually Do
    </h2>
    <p className='font-normal text-base md:text-lg py-4 text-justify mt-5 md:mt-10'>
      Oosadhi is a holistic platform that serves as your friend and
      lifestyle enhancer, combining the power of yoga, homeopathy,
      Ayurveda, and personalized diet plans. Our expert team of yoga
      trainers, dieticians, and doctors are dedicated to helping you break
      free from unhealthy habits and embrace a healthier way of life. With
      personalized guidance and support, we empower you to achieve
      physical fitness, explore natural remedies, and improve your dietary
      habits for a holistic well-being experience.
    </p>
  </div>

  {/*part2*/}
  <div className="h-96 w-full md:w-2/3 p-6 md:p-10" style={{backgroundImage:"url('/Transaparent_logo.png')", }}>
    {/**1st row plans */}
    <div className="row1 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">

    {/**box1 */}
    <div className='box1 relative'>
    <div className='border border-gray-200 rounded-lg shadow-lg p-7 bg-white w-full md:w-64 h-36'>
        <img src="/wallet.png" className='absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-full rounded-lg h-14' />
        <h1 className='font-serif text-lg md:text-xl font-semibold text-center p-1'>Diet Plan</h1>
        <h4 className='text-md font-serif p-2'>Basic and Personalized Diet plan for everyone</h4>
    </div>
    </div>

    {/**box2 */}
    <div className='box2 relative'>
    <div className='border border-gray-200 rounded-lg shadow-lg  bg-white w-full md:w-64 h-36'>
        <img src="/wallet.png" className='absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-full rounded-lg h-14' />
        <h1 className='font-serif text-lg md:text-xl font-semibold text-center mt-8'>Yoga</h1>
        <h4 className='text-md font-serif p-2 '>Basic and Personalized Diet plan for everyone</h4>
        <h4 className='bg-[#02AD4F] w-full text-center text-white font-serif font-medium rounded-sm'>Coming Soon</h4>
    </div>
    </div>


    </div>

     {/**2st row plans */}
     <div className="row2 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 py-10 lg:py-20">
        {/**box3 */}
    <div className='box3 relative '>
    <div className='border border-gray-200 rounded-lg shadow-lg  bg-white w-full md:w-64 h-36'>
        <img src="/wallet.png" className='absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-full rounded-lg h-14' />
        <h1 className='font-serif text-lg md:text-xl font-semibold text-center mt-8'>Ayurveda</h1>
        <h4 className='text-md font-serif p-2'>Basic and Personalized Diet plan for everyone</h4>
        <h4 className='bg-[#02AD4F] w-full text-center text-white font-serif font-medium rounded-sm '>Coming Soon</h4>
    </div>
    </div>

    {/**box4 */}
    <div className='box4 relative'>
    <div className='border border-gray-200 rounded-lg shadow-lg  bg-white w-full md:w-64 h-36'>
        <img src="/wallet.png" className='absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-full rounded-lg h-14' />
        <h1 className='font-serif text-lg md:text-xl font-semibold text-center mt-8'>Homeopathy</h1>
        <h4 className='text-md font-serif p-2'>Basic and Personalized Diet plan for everyone</h4>
        <h4 className='bg-[#02AD4F] w-full text-center text-white font-serif font-medium rounded-sm '>Coming Soon</h4>
    </div>
    </div>

     </div>


  </div>
</div>
    </>
  )
}

export default About
