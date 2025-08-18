import React from "react";

function Sidebar({Search, setSearch}) {
    function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
 <div className="sm:hidden xl:block w-60 h-70 border-1 border-black-600 text-center flex items-center flex-col gap-5 rounded-xl sidebar-bg text-white">
    <h1 className="text-xl font-bold  mb-3 mt-5">Find Products</h1>
      
        <input className="userbd mt-5"
        type="text"
        placeholder="Search..."
        value={Search}
        onChange={handleChange}
      />

      <p className="text-sm  mt-35 text-center">&copy; 2025 Apps Dev Act2. All rights reserved.</p>
    </div>
  );
}

export default Sidebar;
