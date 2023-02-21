import mouse from '../home/hassets/mouse.png';
import keyboard from '../home/hassets/keyboard.png';
import screen from '../home/hassets/screen.png';

const Divslides3 = () => {
    return ( 
        <div className='slide3'>
            <div>
                <div><p>Get <br/>Productive</p></div>
                <div><p>Keyboard | Storage Devices <br/> Laptop | Mouse | Ink</p></div>
            </div>
            <div>
                <div><img src={screen} alt='pic'/></div>
                <div>
                    <div><img src={mouse} alt='pic'/></div>
                    <div><img src={keyboard} alt='pic'/></div>
                </div>
                <div className='shop'><span>Shop now</span></div>
            </div>
        </div>
     );
}
 
export default Divslides3;