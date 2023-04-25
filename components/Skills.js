import Projects from './Projects'
import Experience from "./Experience";
import Resume from "./Resume";

export default function Skills() {
  return (
      <section  className="flex noisy skills justify-center items-center text- flex-col  border-zinc-700 ">
        <div className="flex  xl:w-[1200px] lg:w-[1000px] sm:w-[500px] w-[300px] gap-16 flex-col  justify-center lg:flex-nbackdrop-blurowrap">
          <Experience />
        </div>
      <Projects />
        <div className="w-[90%] mt-40">
          <Resume />
        </div>
    </section>
  )
}
