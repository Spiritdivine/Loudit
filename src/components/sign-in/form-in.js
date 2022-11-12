import { Checkbox, TextField, FormGroup, FormControlLabel, Button } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
            <div className="sub-embody">

                <h1>Let's Sign You In</h1>
                <p>Welcome back, you've been missed!</p>

                <div className="form">

                    <div><TextField fullWidth id="standard-basic" label="E-Mail" variant="standard" /></div>
                    <div><TextField fullWidth id="standard-basic" label="Password" variant="standard" /></div>

                    <div className="sub-form2">
                        <div>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Remember Me" />
                            </FormGroup>
                        </div>
                        <div className="forget">
                            <a href="#">Forget Password?</a>
                        </div>
                    </div>

                    <ThemeProvider theme={theme}>
                        <Button color="secondary" variant='contained' fullWidth>Sign In</Button>
                    </ThemeProvider>

                    <div className="no-account">
                        <p>Don't have an account? <span>Sign Up</span></p>
                    </div>
                    <div className="Or">
                        <span>OR</span>
                    </div>
                    <div className="signupstream">
                        <div className="signupstreamdiv">
                            <div>Sign up with<GoogleIcon htmlColor='secondary' fontSize='large'/></div>
                        </div>
                        <div className="signupstreamdiv">  
                            <div>Sign up with<FacebookRoundedIcon htmlColor='blue' fontSize='large'/></div>
                        </div>
                    </div>
                    <div className="bysign">
                        <p><a href="#">By signing up,</a></p>
                        <p> you agree to our <span><a href="#">Terms of Use</a></span> and <span><a href="#">Privacy Policy</a></span></p>
                    </div>

                </div>
                
            </div>
            

        </div>
     );
}
 
export default FormIn;