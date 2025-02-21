import profile_pic from "../assets/WhatsApp Image 2025-02-17 at 11.08.54 PM.jpeg";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

export const Profil = () => {
  return (
    <div className="space-x-20 flex justify-center items-center mb-40">
      <img src={profile_pic} alt="me" className="w-96 h-96 rounded-full" />
      <div className="flex flex-col justify-center items-center">
        <div className="mb-3 text-gray-700 font-medium text-xl">
          Bonjour, je suis
        </div>
        <div className="mb-3 font-semibold text-5xl">Dahissiho Ulrich</div>
        <div className="mb-5 font-semibold text-3xl text-gray-700">
          full-stack développeur
        </div>
        <div className="mb-3"></div>
        <div className="flex space-x-4 justify-center ">
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
          <a
            href="https://github.com/01Dhsking"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-2xl font-normal underline-offset-8 decoration-2
            cursor-pointer hover:text-gray-500 hover:underline"
          >
            <div
              className="rounded-full border-white bg-black 
                overflow-hidden mr-5"
            >
              <Github size={35} color="white" className="w-12" />
            </div>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
