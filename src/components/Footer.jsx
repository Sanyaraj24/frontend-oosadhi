import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitterCircular, TiSocialLinkedinCircular } from "react-icons/ti";

function Footer() {
  return (
    <div className="bg-[#252531] text-white py-10 px-4 md:px-28 lg:px-28">
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
        {/* Contact Us */}
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>
          
          {/* Location */}
          <div className="flex items-center space-x-3 mb-4">
            <IoLocationSharp size={28} color="#02AD4F" />
            <div>
              <h3 className="text-lg font-sans">Office Address</h3>
              <p className="text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eos!</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 mb-4">
            <MdEmail size={26} color="#02AD4F" />
            <div>
              <h3 className="font-sans text-lg">Email Us</h3>
              <p className="text-sm">Oosadhi@gmail.com</p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-center space-x-3 mb-4">
            <IoCall size={26} color="#02AD4F" />
            <div>
              <h3 className="font-sans text-lg">Call Us</h3>
              <p className="text-sm">+91 902922002</p>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-semibold mb-6">Subscribe To Us</h2>
          <div className="relative">
            <input
              type="text"
              className="bg-[#252531] border-2 border-[#02AD4F] h-10 w-full px-4 pr-20 rounded-3xl focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="absolute top-0 right-0 h-10 w-12 rounded-3xl bg-[#02AD4F] text-white">Subscribe</button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/3 text-center">
          <img src="/logo_black_bg.png" alt="Oosadhi.com" className="w-[30%] mx-auto mb-6" />
          <div className="flex justify-center space-x-4 mb-4">
            <LiaFacebook size={32} />
            <FaInstagram size={22} className="p-1 rounded-xl ring-offset-2 ring-1 mt-1.5 " />
            <TiSocialTwitterCircular size={32} />
            <TiSocialLinkedinCircular size={32} />
          </div>
          <h5 className="text-sm font-semibold">©2022 OOSADHI - A Natural Treatment Platform</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
