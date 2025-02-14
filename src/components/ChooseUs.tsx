'use client'

import React from 'react'
import { DollarSign, Filter, Menu, Moon, Star, X, Zap } from 'lucide-react'

function ChooseUs() {
  
  return (
    <div>
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          
          <h2 className="mt-2 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          JIGO - HIRAWAT ELECTRICALS
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
          We always look forward to establishing business relation with you.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 ">
          <div className='hover:shadow-lg p-10 rounded-md'>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 ">
            <img src='https://jigoindia.com/wp-content/themes/jigomain/images/trust-icon.png' />
            </div>
            <h3 className="mt-8 text-lg font-semibold" >Trust</h3>
            <p className="mt-4 text-sm ">
            We constantly endeavor to strengthen the trust placed upon us by our Distributors and Partners.
            </p>
          </div>
          <div className='hover:shadow-lg p-10 rounded-md'>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <img src='https://jigoindia.com/wp-content/themes/jigomain/images/responsibility-icon.png' />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Responsibility</h3>
            <p className="mt-4 text-sm text-gray-600">
            Our products are a key to industrial functions. We are also committed to our role in the value chain customer satisfaction.
            </p>
          </div>
          <div className='hover:shadow-lg p-10 rounded-md'>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <img src='https://jigoindia.com/wp-content/themes/jigomain/images/leadership-icon.png' />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Leadership</h3>
            <p className="mt-4 text-sm text-gray-600">
            Our leadership team consists of traditional value and new age ideas. We also groom new leaders within the organization.
            </p>
          </div>
         
        </div>
        <div style={{width:'100%',alignSelf:'center'}} className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
        <div className='hover:shadow-lg p-10 rounded-md'>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <img src='https://jigoindia.com/wp-content/themes/jigomain/images/sustainability.png' />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Sustainability</h3>
            <p className="mt-4 text-sm text-gray-600">
            All our products are as per the latest quality standard with no hazardous content harmful for environment or person.
            </p>
          </div>
          <div className='hover:shadow-lg p-10 rounded-md'>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <img src='https://jigoindia.com/wp-content/themes/jigomain/images/innovation-icon.png' />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Innovation</h3>
            <p className="mt-4 text-sm text-gray-600">
            Efficiency in production and constant improvement in innovation is the key of our quality and goodwill in the market.
            </p>
          </div>
          <div className='hover:shadow-lg p-10 rounded-md'>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <img src='https://jigoindia.com/wp-content/themes/jigomain/images/technology-icon.png' />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Support or Services</h3>
            <p className="mt-4 text-sm text-gray-600">
            We help our customers overcome any problem they happen to be facing while interacting with us or our products or service.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
