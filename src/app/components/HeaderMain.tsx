import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { LuShoppingBag } from 'react-icons/lu'

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-8">
        <div   className="container sm:flex justify-between items-center">
            <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
                Products
            </div>

            <div className="w-full sm:w-[300px] md:w-[70%] relative">

            <input
            className="border-gray-200/45 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Search the product name..."
          />

          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-black-500"
            size={20}
          />
            </div>

            <div className="hidden lg:flex gap-4 text-gray-500/95 text-[30px]">
            <BiUser />
           

            <div className="relative">
            <FiHeart />
            <div className="bg-green-600/80 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
            </div>

            <div className="relative">
            <LuShoppingBag />
            <div className="bg-green-600/80 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          </div>
          </div>
        </div>
   
  )
}

export default HeaderMain