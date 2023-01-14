import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown, MdAccessibilityNew } from "react-icons/md";

const data = [{id: 0, label: "item 1"}, {id: 1, label: "item 2"}, {id: 2, label: "item 3"}];

const DropDown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        <MdAccessibilityNew/>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Support"}
        <IoIosArrowDown className={`fa fa-chevron-right icon ${isOpen && "open"}`}/>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
            <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropDown;