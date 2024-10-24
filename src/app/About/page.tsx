import Navbar from "../Components/navbar";
export default function About (){
    return(
      <main>
        <Navbar/>
        <section className="text-gray-600 body-font py-4">
  <div className="container mx-auto flex md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 px-4">
      {/* <Image className="object-cover object-center rounded-full" alt="hero" src="https://media.licdn.com/dms/image/v2/D4D03AQGbJw9CUSBCYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726161556491?e=1732147200&v=beta&t=TnBVnme6j-_m1KR4Fi6MFyTqSJe4MVc4W10q3VEMC0s"/> */}
    </div>
    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center px-4">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
    </div>
  </div>
</section>
</main>
    )
}