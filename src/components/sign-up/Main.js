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

const Main = () => {
    
    return ( 
        <div className="embody">
            <div className="sub-embody">
                <h1 style={{marginBottom:'15px', fontSize:'26px', fontWeight:'700', lineHeight:'39px'}}>Getting Started</h1>
                <p>Welcome to the best shopping experience</p>

                <div className="form" id='form'>
                    
                    <div className='inputControl'  >
                        <TextField fullWidth id="standardName" label="Full Name" variant="standard" />
                        <div className='error'></div>
                    </div>
                    <div className='inputControl'>
                        <TextField fullWidth id="standardNumber" label="Phone Number" variant="standard" />
                        <div className='error'></div>
                    </div>
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
                                <FormControlLabel control={<Checkbox/>} label="Show Password" />
                            </FormGroup>
                            
                        </div>
                        <div className="forget">
                            <a href="#">Forget Password?</a>
                        </div>
                    </div>
                    <div className="submitbtn">
                        <ThemeProvider theme={theme}>
                            <Button color="secondary" variant='contained' fullWidth  typeof='submit' style={{height:'56px', borderRadius:'10px', fontSize:'24px', fontWeight:'500'}}>Sign Up</Button>
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
                            <div style={{position:'relative', bottom:'5px'}}><span style={{position:'relative', bottom:'13px'}}>Sign up with</span><FcGoogle fontSize='33.33px'/></div>
                        </div>
                        <div className="signupstreamdiv fb">  
                            <div style={{position:'relative', bottom:'5px'}}><span style={{position:'relative', bottom:'13px'}}>Sign up with</span><FacebookRoundedIcon htmlColor='blue' fontSize='large'/></div>
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
 
export default Main;