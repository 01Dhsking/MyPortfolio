import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";

export const ContactMe = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {/* <div className='text-lg text-gray-700'>Get in Touch</div> */}
        <div className="mb-10 text-5xl font-bold">Contacte Moi</div>
      </div>
      <div className="flex justify-center items-center mb-14">
        <div
          className="w-5/12 border rounded-3xl border-gray-700 
            flex justify-center items-center p-7"
        >
          <div
            className="rounded-full border-white bg-black 
                overflow-hidden mr-5"
          >
            <Mail size={35} color="white" className="w-12 cursor-pointer" />
          </div>
          <button
            className="text-2xl font-normal underline-offset-8 decoration-2
            cursor-pointer hover:text-gray-500 hover:underline mr-5"
          >
            dahissihoulrich.dev@gmail.com
          </button>
          <a
            href="https://www.linkedin.com/in/ulrich-dahissiho"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-2xl font-normal underline-offset-8 decoration-2
            cursor-pointer hover:text-gray-500 hover:underline"
          >
            <div
              className="rounded-full border-white bg-black 
                overflow-hidden mr-5"
            >
              <Linkedin size={35} color="white" className="w-12" />
            </div>
            LinkedIn
          </a>
        </div>
      </div>
      {/* <div className="flex justify-center mb-12">
        <button
          className="text-2xl font-normal underline-offset-8 decoration-2
            mx-5 cursor-pointer hover:text-gray-500 hover:underline"
        >
          About
        </button>
        <button
          className="text-2xl font-normal underline-offset-8 decoration-2
            mx-5 cursor-pointer hover:text-gray-500 hover:underline"
        >
          Experience
        </button>
        <button
          className="text-2xl font-normal underline-offset-8 decoration-2
            mx-5 cursor-pointer hover:text-gray-500 hover:underline"
        >
          Projects
        </button>
        <button
          className="text-2xl font-normal underline-offset-8 decoration-2
            mx-5 cursor-pointer hover:text-gray-500 hover:underline"
        >
          Contact
        </button>
      </div> */}
      <div className="flex justify-center text-gray-700 mb-10">
        Copyright © 2023 Dahissiho Ulrich. All Rights Reserved.
      </div>
    </div>
  );
};
