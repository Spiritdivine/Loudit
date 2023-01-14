import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const cartStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 6px 0px 0px',
    gap: '8px',

    width: '141px',
    height: '40px',

    /* primary color */

    background: '#0BA1B2',
    borderRadius: '10px',

    /* Inside auto layout */

    flex: 'none',
    order: '4',
    flexGrow: '0'
}

const textCart = {

    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
    /* identical to box height */

    top:'4px',
    right:'0px',
    position:'relative',
    display:'flex',
    textAlign:'center',
    letterSpacing: '0.205882px',

    color: '#FFFFFF',


    /* Inside auto layout */

    flex: 'none',
    order: '1',
    flexGrow: '1',
}

const textSpan = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '21px',
    /* identical to box height */

    position:'relative',
    top:'4px',
    letterSpacing: '0.205882px',

    /* primary color */

    color: '#0BA1B2',


    /* Inside auto layout */

    flex: 'none',
    order: '0',
    flexGrow: '0'
}

const Cart = () => {
    return ( 
        <div className='support ahia' style={cartStyle}>
            <ShoppingCartOutlinedIcon style={{position: 'relative', bottom:'1px', left:'7px'}}/>
            <span style={textCart}>My Cart<div className='innerSpan'><span style={textSpan}>0</span></div></span>
        </div>
     );
}
 
export default Cart;