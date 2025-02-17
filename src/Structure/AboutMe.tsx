import about_pic from "../assets/image.jpeg";
import { Award } from "lucide-react";
import { User } from "lucide-react";

export const AboutMe = () => {
  return (
    <div>
      <div className="mb-5 flex flex-col justify-center items-center">
        <div className="text-lg text-gray-700">En savoir plus</div>
        <div className="text-5xl font-bold">Sur moi</div>
      </div>
      <div className="text-lg w-full px-40 mb-20 flex justify-center items-center">
        <div className="w-full flex justify-between">
          <div className="w-1/3 flex justify-center items-center">
            <img src={about_pic} alt="moi" className="w-96 h-80 rounded-3xl" />
          </div>
          <div className="w-2/3 flex flex-col p-12">
            <div className="flex justify-between mb-8">
              <ul
                className="h-40 w-64 flex flex-col justify-center items-center
                        border border-gray-500 rounded-3xl"
              >
                <li>
                  <Award
                    size={30}
                    color="white"
                    className="mb-2 bg-black rounded-xl"
                  />
                </li>
                <li className="text-center font-bold">Experience</li>
                <li className="text-gray-700 text-center">2+ years</li>
                <li className="text-gray-700 text-center">
                  Full-stack Development
                </li>
              </ul>
              <ul
                className=" h-40 w-64 flex flex-col justify-center items-center 
                        border border-gray-500 rounded-3xl"
              >
                <li>
                  <User
                    size={30}
                    color="white"
                    className="mb-2 bg-black rounded-xl"
                  />
                </li>
                <li className="text-center font-bold">Education</li>
                <li className="text-gray-700 text-center">
                  Epitech. Bachelors
                </li>
                {/* <li className='text-gray-700 text-center'>M.Sc. Masters Degree</li> */}
              </ul>
            </div>
            <div className="w-full">
              Passionné par le développement full-stack, je mets mes compétences
              techniques et ma créativité au service de projets innovants. Avec
              plus de 2 ans d'expérience, j'ai eu l'opportunité de travailler
              sur des applications web complexes, allant de la conception à la
              mise en production. Diplômé de l'Epitech, je suis constamment à la
              recherche de nouvelles technologies et de défis pour approfondir
              mes connaissances et améliorer mes compétences. Mon objectif est
              de créer des solutions robustes, évolutives et centrées sur
              l'utilisateur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
