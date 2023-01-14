import Welnav from "./welnav";
import Footer from "../../footer";
import { FaSignInAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { MdTouchApp, MdUpload, MdRecordVoiceOver } from "react-icons/md";
import { BsCart3, BsCart2 } from "react-icons/bs";



const hero={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'90vh',
    background: '#EBEBEB'

}

const hero1={
    padding:'50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceAround',
    alignItems: 'center',
    textAlign:'center'
}
const started={
    width:'370px',
    height:'60px',
    background:'#0BA1B2',
    fontSize:'32px',
    borderRadius:'5px',
    color:'#ffffff',
    marginTop:'49px'
}

const con ={
    marginTop:'49px',
    color:'#0BA1B2',
    fontSize:'36px'
}

const blueHero ={
    background:'#0BA1B2',
    height:'100vh',
    width:'100%',
    padding:'50px 10px'
}

const sublue = {
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
}

const buyer={
    display:'flex',
    justifyContent:'spaceAround',
    alignItems:'center',
    textAlign:'center',
    marginTop:'20px'
}

const icons={
    margin:'10px 30px',
}

const Welbody = () => (
    <div>
        <div>
            <Welnav />
        </div>
        <div style={hero}>
            <div style={hero1}>
                <div>
                    <h2 style={{ fontSize: '48px', fontWeight: '500', lineHeight: '72px', color: '#000000' }}>Welcome to Loudit</h2>
                    <h3 style={{ fontSize: '40px', fontWeight: '600', lineHeight: '60px', color: '#000000' }}>NIGERIA'S BIGGEST PRODUCT AND SERVICE MARKET PLACE</h3>
                </div>
                <div style={con}>
                    <h3>Get connected to your preferred choice quick and easy</h3>
                </div>
                <div>
                    <div style={started}>Get Started</div>
                </div>
            </div>
        </div>
        <div style={blueHero} className="blueHero">
            <div>
                <h3>How it works?</h3>
            </div>
            <div style={sublue}>

                <div style={buyer} className="icons">
                    <div><h4>As a buyer:</h4></div>
                    <div style={icons}>
                        <FaSignInAlt size='60'/>
                        <p>Sign/Sign to the <br/> Loudit Platform</p>
                    </div>
                    <div style={icons}>
                        <AiOutlineEye size='60'/>
                        <p>View available <br/>products and services </p>
                    </div>
                    <div style={icons}>
                        <MdTouchApp size='60'/>
                        <p>Select your <br/> preferences </p>
                    </div>
                    <div style={icons}>
                        <BsCart3 size='60'/>
                        <p>Get your products & <br/>services delivered</p>
                    </div>
                </div>

                <div style={buyer} className="icons">
                    <div>
                        <h4>As a seller <br/> (business owner):</h4>
                    </div>
                    <div style={icons}>
                        <FaSignInAlt size='60'/>
                        <p>Sign/Sign to the <br/>Loudit Platform</p>
                    </div>
                    <div style={icons}>
                        <BsCart2 size='60'/>
                        <p>Supply your <br/>business details</p>
                    </div>
                    <div style={icons}>
                        <MdUpload size='60'/>
                        <p>Upload your <br/>goods & services</p>
                    </div>
                    <div style={icons}>
                        <MdRecordVoiceOver size='60'/>
                        <p>Get Connected <br/>to buyers</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        
        <div>
            <Footer/>
        </div>
    </div>

)
 
export default Welbody;