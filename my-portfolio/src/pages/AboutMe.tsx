import photo from "../assets/photo.svg";

export function AboutMe() {
  return (
    <>
      <div className="flex items-center justify-center h-screen px-24 py-32 gap-32 bg-[#FFFFFF] text-black">
        <div className="flex-col basis-5/12">
          <div className="bg-[#DBE0E9] w-fit px-11 py-2 mb-6 rounded-4xl">
            <span className="font-section-title font-black text-[#7495EE] text-4xl">
              About Me
            </span>
          </div>
          <div className="text-2xl">
            <div className="pb-4">
              I'm an ambitious recent graduate of the University of Concordia,
              Quebec, with a degree in Software Engineering (Co-op/C-Edge).
            </div>
            <div className="pb-4">
              My real passions? Web development and the magic of Artificial
              Intelligence.
            </div>

            <div className="pb-4">
              Let's embark on this digital adventure together as I bring
              creativity and code to life!
            </div>
          </div>
        </div>

        <img src={photo} alt="Profile Photo" />
      </div>
    </>
  );
}
