//import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function DietPlanSteps() {
  return (
    <>
      <div className='personalized-data-plan p-5 mb-5 md:p-14'>
        <h1 className='text-3xl md:text-3xl font-serif font-semibold text-center p-4 md:p-7'>
          Personalize Diet Plan Steps
        </h1>
        {/* Steps */}
        <div className='steps flex flex-col md:flex-row md:space-x-4 p-4 md:py-8'>
          {/* Step 1 */}
          <div className='box-1 w-full md:w-1/3 mb-4 md:mb-0'>
            <img src='/step1.jpeg' alt='Fill your details' className='h-64 w-64 md:h-80 md:w-80 rounded-full mx-auto' />
            <h1 className='font-semibold font-serif text-xl md:text-xl text-center mt-4 md:mt-5'>
              Fill Your Details
            </h1>
            <div className='text-justify mt-2 px-4 md:px-1'>
              <h5 className='text-md md:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora dicta natus. Fuga in illum tempore ipsum. Quis amet consequatur, minima quasi rem, aut sequi sit accusantium incidunt vel sunt?
              </h5>
            </div>
          </div>

          {/* Arrow Icon */}
          <div className='icon flex items-center justify-center py-4 md:py-0 md:px-8'>
            <FaArrowRight size={26} color='grey' />
          </div>

          {/* Step 2 */}
          <div className='box-2 w-full md:w-1/3 mb-4 md:mb-0'>
            <img src='/step2.jpeg' alt='Connect with Doctor' className='h-64 w-64 md:h-80 md:w-80 rounded-full mx-auto' />
            <h1 className='font-semibold font-serif text-xl md:text-xl text-center mt-4 md:mt-5'>
              Connect With Doctor
            </h1>
            <div className='text-justify mt-2 px-4 md:px-1'>
              <h5 className='text-md md:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora dicta natus. Fuga in illum tempore ipsum. Quis amet consequatur, minima quasi rem, aut sequi sit accusantium incidunt vel sunt?
              </h5>
            </div>
          </div>

          {/* Arrow Icon */}
          <div className='icon flex items-center justify-center py-4 md:py-0 md:px-8'>
            <FaArrowRight size={26} color='grey' />
          </div>

          {/* Step 3 */}
          <div className='box-3 w-full md:w-1/3'>
            <img src='/step3.jpeg' alt='Get Your Plans' className='h-64 w-64 md:h-80 md:w-80 rounded-full mx-auto' />
            <h1 className='font-semibold font-serif text-xl md:text-xl text-center mt-4 md:mt-5'>
              Get Your Plans
            </h1>
            <div className='text-justify mt-2 px-4 md:px-1'>
              <h5 className='text-md md:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora dicta natus. Fuga in illum tempore ipsum. Quis amet consequatur, minima quasi rem, aut sequi sit accusantium incidunt vel sunt?
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DietPlanSteps;
