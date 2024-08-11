//import React from 'react';

function PersonalizedDietPlan() {
  return (
    <>
      <div className='flex flex-col md:flex-row w-full py-4 md:py-4'>
        {/** Details Section */}
        <div className='md:w-2/3 p-6 md:p-12 bg-[#E0FBE2]'>
          <h1 className='font-serif text-2xl md:text-3xl font-semibold mb-8 md:mb-10'>Get Your Personalized Diet Plan</h1>
          <h4 className='text-md md:text-md font-serif'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident excepturi, neque similique nisi suscipit nam, dolorem porro hic numquam impedit non voluptatem consequuntur velit nihil eaque id molestiae repellat veniam! Perferendis, quibusdam quasi autem non animi pariatur at ab nobis! Debitis aut unde, maiores modi deserunt corrupti consequuntur est.
          </h4>
          <button
            type="button"
            className="text-white text-base md:text-lg mt-8 md:mt-8 font-semibold bg-green-500 rounded-sm px-6 md:px-8 py-2 md:py-3 hover:border-green-500 hover:bg-green-700">
            Get Started
          </button>
        </div>

        {/** Image Section */}
        <div className='w-full  md:w-1/3'>
          <img src="/dietplan.jpg" alt="personalized diet plan" className='w-full  h-[40%] object-cover md:h-full' />
        </div>
      </div>
    </>
  );
}

export default PersonalizedDietPlan;
