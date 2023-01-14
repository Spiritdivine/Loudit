import { Checkbox, TextField, FormGroup, FormControlLabel, Button } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FcGoogle } from "react-icons/fc";

const theme = createTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: '#0BA1B2',
      },
    },
  });

const FormIn = () => {
    return ( 
        <div className="embody">
            <div className="sub-embody" style={{height:'582px'}}>

                <h1 style={{marginBottom:'16px'}}>Let's Sign You In</h1>
                <p>Welcome back, you've been missed!</p>

                <div className="form">

                    <div className='inputControl'>
                        <TextField fullWidth id="standardEmail" label="E-Mail" variant="standard" />
                        <div className='error'></div>
                    </div>
                    <div className='lastInput'>
                        <TextField fullWidth id="standardPass" label="Password" variant="standard" />
                        <div className='error'></div>
                    </div>

                    <div className="sub-form2">
                        <div>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Remember me" />
                            </FormGroup>
                        </div>
                        <div className="forget">
                            <a href="#">Forget Password?</a>
                        </div>
                    </div>

                    <div className="submitbtn">
                        <ThemeProvider theme={theme}>
                        <Button color="secondary" variant='contained' fullWidth  typeof='submit' style={{height:'56px', borderRadius:'10px', fontSize:'24px', fontWeight:'500'}}>Sign In</Button>
                        </ThemeProvider>
                    </div>

                    <div className="no-account">
                        <p>Don't have an account? <span>Sign Up</span></p>
                    </div>
                    <div className="Or">
                        <span style={{margin:'5px'}}>OR</span>
                    </div>
                    <div className="signupstream">
                        <div className="signupstreamdiv gg">
                            <div style={{position:'relative', bottom:'5px'}}><span style={{position:'relative', bottom:'0px'}}>Sign up with</span><FcGoogle fontSize='33.33px'/></div>
                        </div>
                        <div className="signupstreamdiv fb">  
                            <div style={{position:'relative', bottom:'5px'}}><span style={{position:'relative', bottom:'0px'}}>Sign up with</span><FacebookRoundedIcon htmlColor='blue' fontSize='large'/></div>
                        </div>
                    </div>

                </div>
                
            </div>
            

        </div>
     );
}
 
export default FormIn;