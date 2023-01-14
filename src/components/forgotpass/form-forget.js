import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const theme = createTheme({
    palette: {
      primary: {
        // This is green.A700 as hex.
        main: '#fff',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#0BA1B2',
      },
    },
  });

const FormForget = () => {
    return ( 
        <div className='embody'>

            <div className="sub-embody" style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'599px', width:'500px', padding:'20px', position:'relative'}}>

                <h1 style={{marginBottom:'16px'}}>Forgot Password</h1>
                <p>Can't remember your login credentials? <br/>Enter your details below and <br/> We'll send instructions if your account exists.</p>

                <div className="form">

                  <div className='inputControl' style={{marginBottom:'30px'}}>
                    <TextField fullWidth id="standardEmail" label="E-Mail" variant="standard" />
                    <div className='error'></div>
                  </div>

                  <div className="submitbtn">
                    <ThemeProvider theme={theme}>
                    <Button color="secondary" variant='contained' fullWidth  typeof='submit' style={{height:'56px', borderRadius:'10px', fontSize:'24px', fontWeight:'500'}}>Reset Password</Button>
                    </ThemeProvider>
                  </div>
                    

                </div>
                <div className="form">

                  <div className='inputControl' style={{marginBottom:'10px'}}>
                    <p>I remember my password</p>
                  </div>

                  <div className="submitbtn">
                    <ThemeProvider theme={theme}>
                    <Button color="primary" variant='contained' fullWidth  typeof='submit' style={{height:'56px', borderRadius:'10px', fontSize:'24px', fontWeight:'500', border:'1px solid #0BA1B2'}}>Sign In</Button>
                    </ThemeProvider>
                  </div>
                    

                </div>
                

            </div>

        </div>
     );
}
 
export default FormForget;