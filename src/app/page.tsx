import Navbar from "./Components/navbar";
export default function Home() {
  return (
    <main>
      <Navbar/>
      {/* // Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-4 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hi,
              <br />
              I&apos;am Ali Raza 
              <br className="hidden lg:inline-block" />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Hire Me!
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                CV
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
            {/* <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGbJw9CUSBCYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726161556491?e=1732147200&v=beta&t=TnBVnme6j-_m1KR4Fi6MFyTqSJe4MVc4W10q3VEMC0s"
              alt="hero"
              className="object-cover object-center rounded-full"
            /> */}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
</section>
    </main>
  );
}
