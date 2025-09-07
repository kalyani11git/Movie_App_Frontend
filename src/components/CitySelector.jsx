import { useState } from "react";
import { ChevronDown } from "lucide-react";

const cities = ["Pune", "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai"];

const CitySelector = ({ city, setCity }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedCity) => {
    setCity(selectedCity);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Selected city */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 cursor-pointer"
      >
        <span>{city}</span>
        <ChevronDown size={16} />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
          {cities.map((c) => (
            <div
              key={c}
              onClick={() => handleSelect(c)}
              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                c === city ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {c}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitySelector;
