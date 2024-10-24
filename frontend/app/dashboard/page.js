// DashboardPage.jsx
import Image from 'next/image'
import React from 'react'
import './page.css' 
import Card from '@/components/Card'
import { CIRCLE_DATA } from '@/constants/data'

const DashboardPage = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 py-16 lg:mb-35 px-[10%]">
      <div className="flex flex-wrap">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="bg-clip-text text-3xl text-white lg:text-5xl tracking-tight">
              Intelipod 2.0
            </h1>
            <p className="text-white my-2 max-w-xl py-6 font-semibold text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate
              atque iusto vero odit corrupti hic repudiandae! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ex cupiditate atque iusto vero
              odit corrupti hic repudiandae!
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <Image
            src="/cmti-logo.png"
            alt="Intelipod"
            width={300}
            height={300}
            priority
          />
        </div>
        
        <div className="profession-container absolute top-1/2 right-0 -translate-y-1/2 w-[768px] h-[768px] overflow-hidden">
          <div className="profession-box absolute top-0 right-0 w-full h-full rounded-full flex justify-center items-center">
            {
            CIRCLE_DATA.map(({icon, tittle}, index) => (
              <div
                key={index}
                className="profession absolute left-0 flex flex-col items-center text-[#cdcdcf] bg-transparent p-3"
                style={{ "--i": index }}
              >
                <span className='text-white pb-5'>{icon}</span>
                <h1 className="text-3xl font-semibold leading-none">{tittle}</h1>
              </div>
            ))}
            <div className="circle w-[72%] h-[72%] rounded-[50%] border-[3px] border-[#754ef9]"></div>
          </div>
        </div>

      </div>

      <Card />
    </div>
  )
}

export default DashboardPage