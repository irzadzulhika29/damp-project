import React, { useState } from 'react';
import ChevronDownIcon from '../assets/svg/chevron-down-icon.svg';

const Dropdown = ({ className, label, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (item) => {
        setSelectedValue(item);
        setIsOpen(false);
    };

    return (
        <div  onClick={handleOpen} className={`relative rounded-md flex p-3 items-center justify-between ${className}`}>
            <p className="text-blue">{selectedValue ? selectedValue : label}</p>
            <div className="flex items-center gap-2">
                <img
                  
                    className="w-5 h-5 cursor-pointer"
                    src={ChevronDownIcon}
                    alt="chevron-down-icon"
                />
            </div>
            {isOpen && (
                <div className="rounded-md absolute top-full left-0 w-full bg-white border-sky border mt-1 shadow-md  z-10">
                    {value.map((item, index) => (
                        <p
                            key={index}
                            onClick={() => handleSelect(item)}
                            className={`p-2 cursor-pointer hover:bg-gray-200 ${
                                index !== 0 && index !== value.length - 1 ? 'border-t border-b' : ''
                              }`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
