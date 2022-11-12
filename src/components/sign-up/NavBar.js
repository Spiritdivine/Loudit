import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../images/Loudit1.svg'
import { Link, Outlet } from 'react-router-dom'
import { TbTruckDelivery } from "react-icons/tb";

const fontStyle = {
    display: 'flex',
    color:'#525252',
    fontWeight:'500',
    fontSize:'16px',
    alignItems: 'center',
    padding:'5px',
    borderRight:"1px solid #C4C4C4",
    height: '30px',
    lineHeight:'24px',
    flexWrap: 'wrap'}

const NavBar = () => {
    return ( 
        <div className="navi">
            <ul style={{position:'relative', bottom:'10px'}}>
                <li><a href='/'><img src={logo} className='logo' alt='logo' style={{ width: 110, height: 40 }}></img></a></li>
                <li className='support'>
                    <Link to='/forgot' style={fontStyle}>
                        <span>Sell On Loudit</span>
                        <HelpOutlineOutlinedIcon/>
                    </Link>
                </li>
                <li>
                    <Link to='/' style={fontStyle}>
                        <TbTruckDelivery/>
                        <span>revolve</span>
                    </Link>
                </li>
                
                <li className='search' >
                    <div style={{height:40, width:393, flexWrap:'wrap'}}>
                        <input className="searchbar" typeof="text" placeholder="search"/>
                        <button ><SearchIcon fontSize='large'/></button>
                    </div>
                    
                </li>
                <li className='support'>
                    <Link to='/signin' style={fontStyle}>
                        <SupportAgentOutlinedIcon/>
                        <span>Support</span>
                    </Link>
                </li>
                <li className='support'>
                    <Link to='/signup' style={fontStyle}>
                        <StoreOutlinedIcon />
                        <span>Stores</span>
                    </Link>
                </li>
                <li className='support'>
                    <Link to='/signup' style={fontStyle}>
                        <Person2OutlinedIcon />
                        <span>Profile</span>
                    </Link>
                </li>
                <li className='support' style={{background:'#00B4CC', borderRadius:'5px'}}>
                    <Link to='/' style={fontStyle}>
                        <ShoppingCartOutlinedIcon />
                        <span>My Cart<span style={{background:'#ffffff', borderRadius:'5px'}}>0</span></span>
                    </Link>
                </li>
                
            </ul>

            <Outlet/>

        </div>
     );
}
 
export default NavBar;