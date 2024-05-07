import { ControlCenter } from "./Structure/ControlCenter"
import {Profil} from "./Structure/Profil"
import { AboutMe } from "./Structure/AboutMe"
import { Experience } from "./Structure/Experience"

function App() {

  return (
    <>
      <div>
        <ControlCenter />
        <Profil />
        <AboutMe />
        <Experience />
      </div>
    </>
  )
}

export default App
