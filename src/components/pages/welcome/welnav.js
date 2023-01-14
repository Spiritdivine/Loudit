import Sell from "../../navbar/sell";
import Support from "../../navbar/support";

const welnavsty = {
    display:'flex',
    justifyContent:'spaceBetween',
    alignItem:'center'
}

const div1 = {
    height: '50px',
    width: '140px',
    borderRadius: '5px',
    padding: '10px',
    background: '#0BA1B2',
    margin:'5px',
    textAlign:'center',
    cursor:'pointer',
    marginLeft:'30px'
}
const div2 = {
    height: '50px',
    width: '140px',
    borderRadius: '5px',
    padding: '10px',
    color:'#0BA1B2',
    background: '#FFFFFF',
    border: '1px solid #0BA1B2',
    margin:'5px',
    cursor:'pointer',
    textAlign:'center',
    marginLeft:'30px'
}

const wdiv2 = {
    display:'flex',
    justifyContent:'spaceBetween',
    alignItem:'center'
}

const Welnav = () => {
    return ( 
        <nav className="welnav">
            
            <div style={welnavsty}>
                <div>
                    <Sell/>
                </div>
                
                <div>
                    <Sell/>
                </div>
            </div>
            <div style={wdiv2}>

                <div style={{position:'relative', top:'10px'}}>
                    <Support/>
                </div>
                <div style={div1}>Log In</div>
                <div style={div2}>Sign Up</div>

            </div>
            
        </nav>
     );
}
 
export default Welnav;