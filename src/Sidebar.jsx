import React from "react";

const logo = {
  src: "https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/odin-lined.png",
  alt: "odin logo",
};

const Sidebar = () => {
  return (
    <div
      className="w-1/3 bg-red-500 h-full relative"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1585202900225-6d3ac20a6962?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full flex bg-black opacity-50 absolute top-48 p-6">
        <img
          src={logo.src}
          alt={logo.alt}
          className="w-20 ml-12"
        />
        <p className="text-8xl text-white mt-3" style={{fontFamily: "Skranji"}}>ODIN</p>
      </div>
      <cite className="absolute bottom-8 left-20 text-xs text-white">
        Photo by{" "}
        <a
          href="https://unsplash.com/photos/green-leaf-plant-in-close-up-photography-25xggax4bSA"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Haile West
        </a>{" "}
        on{" "}
        <a
          target="_blank"
          href="https://unsplash.com/photos/green-leaf-plant-in-close-up-photography-25xggax4bSA"
          rel="noreferrer"
          className="underline"
        >
          Unsplash
        </a>
      </cite>
    </div>
  );
};

export default Sidebar;
