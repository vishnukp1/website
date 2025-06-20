import { FaRegStar } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="  w-full flex justify-between items-center px-32 py-8 text-white z-10">
      <div className="text-2xl font-bold font-laila">
        <div>Travel</div>
  <div className="font-extrabold">Goo</div>
      </div>
      <ul className="flex space-x-8 text-[1.25rem] font-meduim">
        <li><a href="#" className="hover:text-green-400">Home</a></li>
        <li><a href="#" className="hover:text-green-400">About Us</a></li>
        <li><a href="#" className="hover:text-green-400">Packages</a></li>
      </ul>
      <div className="flex items-center gap-9">
        <FaRegStar className="text-4xl text-[#FF7A00] hover:text-yellow-400 cursor-pointer" />
        <FaUserCircle className="text-4xl hover:text-green-400 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
