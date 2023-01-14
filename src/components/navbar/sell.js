import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const sellStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px',
    gap: '4px',
    fontSize:'14px',
    fontWeight:'500',
    width: '121px',
    height: '26px',
    margin: '3px',

    flex: 'none',
    order: '1',
    flexGrow: '0'
}

const textSell={
    width: '91px',
    height: '16px',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '0.205882px',
    position:'relative',
    top:'1px',
    color: '#000000'
}


const Sell = () => {
    return ( 

        <center className='support' style={sellStyle}>

            <span style={textSell}>Sell On Loudit</span>
            <HelpOutlineOutlinedIcon style={{position:'relative', bottom:'1px', color:'#0BA1B2'}}/>

        </center>

     );
}
 
export default Sell;