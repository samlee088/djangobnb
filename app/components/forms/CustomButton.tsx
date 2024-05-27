import React from "react";

interface CustomButtonProps {
  label: string;
}
const CustomButton: React.FC<CustomButtonProps> = ({ label }) => {
  return (
    <div className="w-full py-4 bg-airbnb hover:bg-airbnbDark text-white rounded-xl transition cursor-pointer">
      {label}
    </div>
  );
};

export default CustomButton;
