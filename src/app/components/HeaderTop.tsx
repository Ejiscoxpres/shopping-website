import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-4">
        <div className="flex justify-between items-center">
            <div  className="hidden lg:flex gap-1">
                <div className="header_top__icon_wrapper">
                <BsFacebook />
                </div>
                <div className="header_top__icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <BsLinkedin />
            </div>
            <div className="header_top__icon_wrapper">
            <BsWhatsapp />
            </div>
            <div className="header_top__icon_wrapper">
            <FaInstagram />
            </div>
            </div>

            <div className="text-blue-600 text-[14px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $40
          </div>

          <div className="flex gap-4">
            <select
              className="text-black-500 text-[13px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="INR">INR</option>
            </select>

            <select
              className="text-black-400 text-[13px] w-[85px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>


        </div>
        </div>
    </div>
  )
}

export default HeaderTop