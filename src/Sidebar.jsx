import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/3 bg-red-500 h-full relative" style={{backgroundImage: `url("https://images.unsplash.com/photo-1585202900225-6d3ac20a6962?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, backgroundPosition: "center", backgroundSize:"cover"}}>
      <cite className="absolute bottom-8 left-20 text-xs text-white">Photo by <a href="https://unsplash.com/photos/green-leaf-plant-in-close-up-photography-25xggax4bSA" target="_blank" rel="noreferrer" className="underline">Haile West</a> on <a target="_blank" href="https://unsplash.com/photos/green-leaf-plant-in-close-up-photography-25xggax4bSA" rel="noreferrer" className="underline">Unsplash</a></cite>
    </div>
  );
};

export default Sidebar;
