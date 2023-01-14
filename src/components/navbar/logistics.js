import { TbTruckDelivery } from "react-icons/tb";
import { IconContext } from "react-icons";

const logicStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '4px',
    height:'36px',
    width:'143px',

    borderRadius: '10px',
    margin:'0px 15px'
}

const textLogic = {
    width: '103px',
    height: '16px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '0.205882px',
    marginLeft:'3.5px',

    color: '#000000',

    flex: 'none',
    order: '1',
    flexGrow: '1'
}

const Logistics = () => {
    return ( 
        <div className="support" style={logicStyle}>
             
            <IconContext.Provider value={{ className: "shared-class", size: 25, color:'#525252' }}>
                <TbTruckDelivery/>
            </IconContext.Provider>
            <span style={textLogic}>Loudit Logistics</span>
            
        </div>
     );
}
 
export default Logistics;