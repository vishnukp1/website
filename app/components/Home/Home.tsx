import Navbar from './Navabar';

export default function Home() {
  
  return (
    <div className=" min-h-screen bg-[url('/home-bg-img.svg')] bg-cover bg-center "   >
     
      <Navbar />
      <div className="z-10 flex flex-col items-center justify-center text-center text-white h-screen px-4">
        <h1 className="text-7xl md:text-6xl font-extrabold leading-tight mb-14">
          Your Imagination Is <br /> Your Only Limit
        </h1>
        <p className="text-[1rem] font-medium md:text-base mb-10 max-w-md">
          We always try to make our customer Happy. We provide all kind of facilities.
          Your Satisfaction is our main priority
        </p>
        <button className="bg-[#00A651]  text-white px-6 py-2 rounded-lg font-semibold transition">
          Discover more
        </button>
      </div>
    </div>
  );
}
