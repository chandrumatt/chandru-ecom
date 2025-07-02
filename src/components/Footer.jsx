import { ChevronsRight } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white w-100vw h-auto  flex justify-evenly p-10 mt-20">
        <ul className="flex flex-col gap-4 mt-6">
          <li className="text-xl font-semibold">Exclusive</li>
          <li>Subscribe</li>
          <li>Get 10% off on your first Order</li>
          <li className="relative">
            <input
              placeholder="Enter your Email"
              className="pr-8 pl-2 py-2 border border-white "
            />
            <span className="absolute top-2 right-6">
              {" "}
              <ChevronsRight />
            </span>
          </li>
        </ul>

        <ul className="flex flex-col gap-4 mt-6">
          <li className="text-xl font-extrabold">Support</li>
          <li>
            11 Bijoy sarani, Dhaka, <br></br> DH 1515, Bangladesh.
          </li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>

        <ul className="flex flex-col gap-4 mt-6">
          <li className="text-xl font-extrabold">Account</li>
          <li>My Account</li>
          <li>Login\Register</li>
          <li>Cart</li>
          <li>Whistlist</li>
          <li>Shop</li>
        </ul>

        <ul className="flex flex-col gap-4 mt-6">
          <li className="text-xl font-extrabold">Quick line</li>
          <li>Privacy policy</li>
          <li>Terms of use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>

        <div className=" flex flex-col gap-4 mt-6">
          <h1>Download Now</h1>
          <p>Save s3 with App new feature only</p>
          
            <div className="flex">
            <div>
              <img
                src="/Qr Code.png"
                className="w-[60px] h-auto object-contain"
              />
            </div>
            <div className="flex flex-col pl-2">
              <div>
                <img
                  src="GooglePlay.png"
                  className="w-[90px] h-auto object-contain"
                />
              </div>
              <div>
                <img
                  src="AppStore.png"
                  className=" w-[90px] h-auto object-contain"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Footer;
