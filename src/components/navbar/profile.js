import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const sp = {
    borderRight:'1px solid #C4C4C4',
    height: '36px',
    marginLeft:'1px',
    width:'92px'
}

const textProfile = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign:'left',
    /* identical to box height */

    letterSpacing: '0.205882px',

    color: '#525252',


    /* Inside auto layout */

    flex: 'none',
    order: '2',
    flexGrow: '1'
}

const data = [{id: 0, label: "item 1"}, {id: 1, label: "item 2"}, {id: 2, label: "item 3"}];

const Profile = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <div className='dropdown' style={sp}>
      <div className='dropdown-header' onClick={toggleDropdown} style={textProfile}>
        <Person2OutlinedIcon/>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Profile"}
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

export default Profile;