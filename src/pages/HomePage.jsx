export default function HomaPage() {
  return (
    <div className="w-full flex md:flex-row flex-col justify-center p-10">
      <div className="md:w-1/2 space-y-5">
        <h1 className="text-5xl font-semibold">
          Welcome to my world IDIOTS, come here and do this shit with me!
        </h1>
        <p className="text-3xl font-semibold">AHHH I'M FUCKING GOODDDDDDDDD</p>
        <button className="bg-blue-500 px-5 py-2 rounded-sm text-xl font-semibold transition-transform hover:scale-105 hover:bg-blue-600 shadow-md">
          Do it now!
        </button>
      </div>
      <div>
        <img
          className="w-xl h-auto object-cover shadow-lg rounded-md"
          src="https://res.cloudinary.com/dkrrib3mb/image/upload/v1753169464/Untitled_qpm9cb.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
