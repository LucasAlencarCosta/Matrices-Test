import React from "react";

const Header: React.FC = () => {
  return (
    <div className="h-16 px-4 py-2">
      <div className="relative h-[32px] w-[138px] overflow-hidden rounded">
        <img
          style={{
            color: "transparent",
            objectFit: "cover",
            objectPosition: "center",
            width: "109px",
            height: "40px",
          }}
          src="/bmail-logo.webp"
          alt="Gmail"
        />
      </div>
    </div>
  );
};

export default Header;
