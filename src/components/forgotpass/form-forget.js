import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const theme = createTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: '#0BA1B2',
      },
    },
  });

const FormForget = () => {
    return ( 
        <div className='embody'>
            <div className="sub-embody">

                <h1>Forgot Password</h1>
                <p>Can't remember your login credentials? <br/>Enter your details below and <br/> We'll send instructions if your current account exists.</p>

                <div className="form">

                    <div><TextField fullWidth id="standard-basic" label="E-Mail" variant="standard" /></div>

                    <div className='forgetbtn' style={{margin:'10px'}}>
                      <ThemeProvider theme={theme}>
                        <Button color="secondary" variant='contained' fullWidth>Secondary</Button>
                      </ThemeProvider>
                    </div>
                    

                </div>
                <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                  }}>
                    <ShoppingCartOutlinedIcon />
                    <span>revolve</span>
                </div> 
                
            </div>
        </div>
     );
}
 
export default FormForget;