export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">My Website</div>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};