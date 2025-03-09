import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20] bg-">
       <section id="home" className="h-screen bg-yellow-100 flex items-center justify-center">
        <h1>Home-Welcome</h1>
      </section>
      <section id="about" className="h-screen bg-red-100 flex items-center justify-center">
        <h1>About</h1>
      </section>
      <section id="projects" className="h-screen bg-green-100 flex items-center justify-center">
        <h1>Projects</h1>
      </section>
      <section id="skills" className="h-screen bg-blue-100 flex items-center justify-center">
        <h1>Skills</h1>
      </section>
    </div>
    
  );
}
