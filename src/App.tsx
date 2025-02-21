// import { ControlCenter } from "./Structure/ControlCenter"
import { Profil } from "./Structure/Profil"
import { AboutMe } from "./Structure/AboutMe"
import { Experience } from "./Structure/Experience"
import { Project } from "./Structure/Project"
import { ContactMe } from "./Structure/ContactMe"

function App() {

  return (
    <>
      <div>
        {/* <ControlCenter /> */}
        <div className="mb-[100px]" />
        <Profil/>
        <AboutMe />
        <Experience />
        <Project />
        <ContactMe />
      </div>
    </>
  )
}

export default App
