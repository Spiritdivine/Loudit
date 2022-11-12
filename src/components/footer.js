import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return ( 
        <footer className="Bigfoot">
            <div className="Aboutit">
                <div className="sub-about">
                    <div>
                        <p><a href="#">ABOUT LOUDIT</a></p>
                    </div>
                    <div>
                        <p><a href="#">Contact US</a></p>
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Terms & Condition</a></p>
                    </div>
                    <div>
                        <p><a href="#">About Us</a></p>
                    </div>
                </div>
                <div>
                    <span><a href='#'>CONNECT WITH US</a></span>
                    <div>
                        <span><a href='#'><FacebookIcon /></a></span>
                        <span><a href='#'><TwitterIcon /></a></span>
                    </div>
                </div>
            </div>
            <div>
                <p>copyright <span><CopyrightOutlinedIcon /></span> 2021 Loudit All rights reserved</p>
            </div>
        </footer>
     );
}
 
export default Footer;