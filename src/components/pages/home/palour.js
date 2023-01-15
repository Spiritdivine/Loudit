import gray from '../home/hassets/gray.png';
import domhill from '../home/hassets/domhill.png';
import ash from '../home/hassets/ash.png';
import katsi from '../home/hassets/katsi.png';
import pink from '../home/hassets/pink.png';
import spiral from '../home/hassets/spiral.png';
import indo from '../home/hassets/indo.png';
import sneakers from '../home/hassets/sneakers.png';
import lappy from '../home/hassets/lappy.png';
import airpod from '../home/hassets/airpod.png';
import fruit1 from '../home/hassets/fruit1.png';
import skin1 from '../home/hassets/skin1.png';
import clothing2 from '../home/hassets/clothing2.png';
import clothing1 from '../home/hassets/clothing1.png';
import phone1 from '../home/hassets/phone1.png';
import furnitures1 from '../home/hassets/furnitures1.png';
import pringles from '../home/hassets/pringles.png';
import fan from '../home/hassets/fan.png';
import flash from '../home/hassets/flash.png';
import fridge from '../home/hassets/fridge.png';
import theatre from '../home/hassets/theatre.png';
import tele from '../home/hassets/tele.png';
import { BsArrowRightShort } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';


function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
}

Item.propTypes = {
/**
 * The system prop that allows defining system overrides as well as additional CSS styles.
 */
sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
    ]),
};


const Palour = () => {
    return (
        <div className="palour">
            <div className="door1">
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
                
                <div className='subdoor12'>
                    <div><img src={spiral} width={320} height={265} alt="image"></img></div>
                    <div><img src={spiral} width={250} height={250} alt="image"></img></div>
                </div>
            </div>
            <div className='door2'>
                <div className='subdoor21'>
                    <div>Deals of the day</div>
                    <div>shop now</div>
                </div>
                <div className='subdoor22'>
                    <div>
                        <img src={lappy} width={250} height={210} alt='image'></img>
                        <p>Hp Pavillion</p>
                        <p>#89 500</p><span>-50%</span>
                    </div>
                    <div>
                        <img src={indo} width={250} height={210} alt='image'></img>
                        <p>Hp Pavillion</p>
                        <p>#89 500</p><span>-50%</span>
                    </div>
                    <div>
                        <img src={airpod} width={250} height={210} alt='image'></img>
                        <p>Hp Pavillion</p>
                        <p>#89 500</p><span>-50%</span>
                    </div>
                    <div>
                        <img src={sneakers} width={250} height={210} alt='image'></img>
                        <p>Hp Pavillion</p>
                        <p>#89 500</p><span>-50%</span>
                    </div>
                    <div>
                        <img src={lappy} width={250} height={210} alt='image'></img>
                        <p>Hp Pavillion</p>
                        <p>#89 500</p><span>-50%</span>
                    </div>
                </div>
            </div>
            <div className='door3'>
                <div>Top Stores</div>
                <div>
                    <div>
                        <img src={fruit1} width={250} height={210} alt='image'/>
                        <p>Roban Stores</p>
                    </div>
                    <div>
                        <img src={fruit1} width={250} height={210} alt='image'/>
                        <p>Gabbs mini mart</p>
                    </div>
                    <div>
                        <img src={skin1} width={250} height={210} alt='image'/>
                        <p>Spar</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={clothing2} alt='image'/>
                        <p>Annie's</p>
                    </div>
                    <div>
                        <img src={clothing2} alt='image'/>
                        <p>GABBS</p>
                    </div>
                    <div>
                        <img src={clothing2} alt='image'/>
                        <p>Store Name</p>
                    </div>
                    <div>
                        <img src={clothing2} alt='image'/>
                        <p>Store Name</p>
                    </div>
                    <div>
                        <img src={clothing2} alt='image'/>
                        <p>Store Name</p>
                    </div>
                </div>
            </div>
            <div className='door4'>
                <div>Featured Category</div>
                <div>
                    <div>
                        <img src={phone1} alt='image'/>
                        <p>Store Name</p>
                    </div>
                    <div>
                        <img src={furnitures1} alt='image'/>
                        <p>Store Name</p>
                    </div>
                    <div>
                        <img src={phone1} alt='image'/>
                        <p>Store Name</p>
                    </div>
                    <div>
                        <img src={phone1} alt='image'/>
                        <p>Store Name</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={clothing1} alt='image'/>
                        <p>Grocery</p>
                    </div>
                    <div>
                        <img src={clothing1} alt='image'/>
                        <p>Computer</p>
                    </div>
                    <div>
                        <img src={clothing1} alt='image'/>
                        <p>Baby Products</p>
                    </div>
                    <div>
                        <img src={clothing1} alt='image'/>
                        <p>Health and Beauty</p>
                    </div>
                    <div>
                        <img src={clothing1} alt='image'/>
                        <p>Grocery</p>
                    </div>
                    <div>
                        <img src={clothing1} alt='image'/>
                        <p>Fashion</p>
                    </div>
                </div>
            </div>
            <div className='door5'>
                <div>
                    <div>Recommended deals for you</div>
                    <div>see all details</div>
                </div>
                <div>
                    <Box
                        sx={{
                            display: 'grid',
                            columnGap: 3,
                            rowGap: 1,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            padding: '5px',
                          }}
                        
                    >
                        <Item>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <div><img src={phone1} alt='image'/></div>
                                <div>
                                    <p>Apple Iphone 12 Pro Max 128GB</p>
                                    <p>Pacific Blue - Unlocked</p>
                                    <p>#850,000</p>
                                    <div><FaHeart/></div>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <div><img src={phone1} alt='image'/></div>
                                <div>
                                    <p>Apple Iphone 12 Pro Max 128GB</p>
                                    <p>Pacific Blue - Unlocked</p>
                                    <p>#850,000</p>
                                    <div><FaHeart/></div>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <div><img src={phone1} alt='image'/></div>
                                <div>
                                    <p>Apple Iphone 12 Pro Max 128GB</p>
                                    <p>Pacific Blue - Unlocked</p>
                                    <p>#850,000</p>
                                    <div><FaHeart/></div>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <div><img src={phone1} alt='image'/></div>
                                <div>
                                    <p>Apple Iphone 12 Pro Max 128GB</p>
                                    <p>Pacific Blue - Unlocked</p>
                                    <p>#850,000</p>
                                    <div><FaHeart/></div>
                                </div>
                            </div>
                        </Item>
                    </Box>
                </div>
            </div>
            <div className='door6'>
                <div>
                    <div>Recommended deals for you</div>
                    <div>see all details</div>
                </div>
                <div>
                    <div>
                        <img src={pringles} alt='image'/>
                        <p>pringles</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={flash} alt='image'/>
                        <p>OTG USB flash -128GB</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={fan} alt='image'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={flash} alt='image'/>
                        <p>OTG USB flash -128GB</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={fan} alt='image'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                </div>
            </div>
            <div className='door6'>
                <div>
                    <div>Flash Sales / Free Delivery</div>
                    <div>see more</div>
                </div>
                <div>
                    <div>
                        <img src={pringles} alt='image'/>
                        <p>pringles</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={flash} alt='image'/>
                        <p>OTG USB flash -128GB</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={fan} alt='image'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={flash} alt='image'/>
                        <p>OTG USB flash -128GB</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={fan} alt='image'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                </div>
            </div>
            <div className='door6'>
                <div>
                    <div>Discounted Electronics</div>
                    <div>see all details</div>
                </div>
                <div>
                    <div>
                        <img src={theatre} alt='image'/>
                        <p>LG DVD Home Theatre</p>
                        <p>#90, 500</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={fridge} alt='image'/>
                        <p>OTG USB flash -128GB</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={tele} alt='image'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={theatre} alt='image'/>
                        <p>OTG USB flash -128GB</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={tele} alt='image'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                </div>
            </div>
            <div className='door6'>
                <div>
                    <div>Under N2,000 just for you</div>
                    <div>Small money</div>
                </div>
                <div>
                    <div>
                        <img src={pringles} alt='image'/>
                        <p>pringles</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={flash} alt='image'/>
                        <p>OTG USB flash -128GB</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={fan} alt='image'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={fan} alt='image'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                    <div>
                        <img src={flash} alt='image'/>
                        <p>OTG USB flash -128GB</p>
                        <p>#1200</p>
                        <p>200 sold items</p>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Palour;