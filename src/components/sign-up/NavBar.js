import logo from '../images/Loudit1.svg'
import Sell from '../navbar/sell';
import Logistics from '../navbar/logistics';
import Search from '../navbar/search';
import Cart from '../navbar/cart';
import Support from '../navbar/support';
import Stores from '../navbar/stores';
import Profile from '../navbar/profile';
import { Link, Outlet } from 'react-router-dom';




export const otherStyle = {
    margin: '0px',
    display: 'flex',
    color:'#525252',
    fontWeight:'500',
    fontSize:'16px',
    alignItems: 'center',
    padding:'5px',
    height: '30px',
    lineHeight:'24px',
    flexWrap: 'wrap'
}

export const fontStyle = {
    margin: '0px',
    display: 'flex',
    fontWeight:'500',
    fontSize:'16px',
    alignItems: 'center',
    padding:'5px',
    height: '30px',
    lineHeight:'24px',
    flexWrap: 'wrap'}

const NavBar = () => {
    return ( 
        <nav className="navi">
            <ul style={{position:'relative', bottom:'0px'}}>

                <Link to="/">
                <img src={logo} className='logo' alt='logo' style={{ width: 110, height: 40 }}></img>
                </Link>
                
                <Link to="signup">
                
                    <Sell/>
                    
                </Link>
                <Link to="/welbody">
                    
                    <Logistics/>
                    
                </Link>
            
                <div>
                    <Search/>
                </div>
                
                <li style={{width:'114px'}}>
                    <Support/>
                </li>
                <li style={{width:'103px'}}>
                    <Stores/>
                </li>
                <li style={{marginRight:'4px', width:'96px'}}>
                    <Profile/>
                </li>
                <li>
                    <Cart/>
                </li>
                 

            </ul>
            <Outlet/>

        </nav>
     );
}
 
export default NavBar;