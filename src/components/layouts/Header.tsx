 
const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4  border-b-2 border-gray-100 bg-white">
      <div className="">
        <div className="h-2 w-15 bg-red-300 rounded-2xl"></div>
        <div className="text-gray-light text-sm">50% Task Completed</div>
      </div>
        <div>
          <h3 className="font-bold mb-0">Good Morning,</h3>
          <span className="font-semibold text-sm">Aman Rawat</span>
        </div>
    </nav>
  );
};

export default Header;
