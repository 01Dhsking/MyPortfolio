import { BadgeCheck } from "lucide-react";

export const Experience = () => {
  const experienceFrontend: Array<string> = ["HTML", "Tailwind", "React"];

  const experienceBackend: Array<string> = ["NodeJS", "Express", "PostgreSQL", "Firebase", "NextsJS"];

  return (
    <div>
      <div className="mb-5 flex flex-col justify-center items-center">
        <div className="text-lg text-gray-700">Explorer mes</div>
        <div className="mb-10 text-5xl font-bold">Experiences</div>
      </div>
      <div className="space-x-8 mb-20 flex justify-center">
        <div className="p-10 w-1/3 border border-gray-500 rounded-3xl">
          <div className="mb-7 font-semibold text-3xl text-gray-70f0">
            Frontend Development
          </div>

          <div className="w-full">
            <ul className="grid grid-cols-2">
              {experienceFrontend.map((experience, index) => (
                <li key={index}>
                  <div className="mb-8 flex">
                    <BadgeCheck
                      size={28}
                      className="bg-black text-white rounded-full mr-5"
                    />
                    <ul>
                      <li className="font-medium text-xl">{experience}</li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="p-10 w-1/3 flex flex-col items-center
            border border-gray-500 rounded-3xl "
        >
          <div className="mb-7 font-semibold text-3xl text-gray-700">
            Frontend Development
          </div>
          <div className="w-full">
            <ul className="grid grid-cols-2">
              {experienceBackend.map((experience, index) => (
                <li key={index}>
                  <div className="mb-8 flex">
                    <BadgeCheck
                      size={28}
                      className="bg-black text-white rounded-full mr-5"
                    />
                    <ul>
                      <li className="font-medium text-xl">{experience}</li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
