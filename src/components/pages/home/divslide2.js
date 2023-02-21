import slant1 from '../home/hassets/slant1.png';
import slant2 from '../home/hassets/slant2.png';
import slant3 from '../home/hassets/slant3.png';

const Divslides2 = () => {
    return ( 
        <div className='budget'>
            <div>
                <div>
                    <p>Phones on<br/> a budget</p>
                </div>
                <div>
                    <p>phones below #100k</p>
                    <p>accesories below #10k</p>
                </div>
            </div>
            <div>
                <div><img src={slant1} alt='image'/></div>
                <div><img src={slant3} alt='image'/></div>
                <div><img src={slant2} alt='image'/></div>
            </div>
        </div>
     );
}
 
export default Divslides2;