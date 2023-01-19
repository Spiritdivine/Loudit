import gray from '../home/hassets/gray.png';
import domhill from '../home/hassets/domhill.png';
import ash from '../home/hassets/ash.png';
import katsi from '../home/hassets/katsi.png';
import pink from '../home/hassets/pink.png';
import { BsArrowRightShort } from "react-icons/bs";


const Divslides1 = () => {
    return ( 
        <div>
            <div className="subdoor11">
                <div className='handle1'>
                    <div className="bluediv">
                        <h3 style={{fontSize:'90px', fontWeight:'200'}}>Fashion <br/>for days</h3>
                        <p style={{fontSize:'40px', fontWeight:'300'}}>Style with benefits</p>
                        <p style={{fontSize:'54px', fontWeight:'400'}}>Up to 50% off</p>
                    </div>
                    <div className='wrapper1'>
                        <div className='subwrap11'>
                            <div><img src={gray} alt="image"/></div>
                            <div><img src={pink} alt="image"/></div>
                        </div>
                        <div className='subwrap12'><img src={domhill} alt="image"/></div>
                    </div>
                    <div className='wrapper2'>
                        <div className='subwrap21'><img src={ash} alt="image"></img></div>
                        <div className='subwrap22'><img src={katsi} alt="image"></img></div>
                    </div>
                    <div className='arrow'><BsArrowRightShort size='40'/></div>
                </div>
                <div className='handle2'>
                    <div className='switch'>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                    </div>
                    <div>Shop Now</div>
                </div>
            </div>
        </div>
     );
}
 
export default Divslides1;