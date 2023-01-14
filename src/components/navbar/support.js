import { useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const sw = {
    borderRight:'1px solid #C4C4C4',
    height: '36px',
    marginLeft:'2px',
    width:'114px'
}

const textSupport = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    /* identical to box height */

    letterSpacing: '0.205882px',

    color: '#525252',


    /* Inside auto layout */

    flex: 'none',
    order: '2',
    flexGrow: '1'
}

const data = [{id: 0, label: "item 1"}, {id: 1, label: "item 2"}, {id: 2, label: "item 3"}];

const Support = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <div className='dropdown' style={sw}>
      <div className='dropdown-header' onClick={toggleDropdown} style={textSupport}>
        <IconContext.Provider value={{ className: "shared-class", size: 20 }}>
            <BiSupport/>
        </IconContext.Provider>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Support"}
        <IoIosArrowDown className={`fa fa-chevron-right icon ${isOpen && "open"}`} />
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

export default Support;