import spiral from '../home/hassets/spiral.png';
import indo from '../home/hassets/indo.png';
import sneakers from '../home/hassets/sneakers.png';
import lappy from '../home/hassets/lappy.png';
import apple from '../home/hassets/apple.png';
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
import adidas from '../home/hassets/adidas.png';
import belrad from '../home/hassets/belrad.png';
import cola from '../home/hassets/cola.png';
import dior from '../home/hassets/dior.png';
import ibm from '../home/hassets/ibm.png';
import inc from '../home/hassets/inc.png';
import lg from '../home/hassets/lg.png';
import ox from '../home/hassets/ox.png';
import { TbCurrencyNaira } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Divslide2 from "../home/divslide2"


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
                <div>

                    <Divslide2/>

                </div>
                
                <div className='subdoor12'>
                    <div style={{marginBottom:'20px'}}><img src={spiral} width={250} height={230} alt="pic"></img></div>
                    <div><img src={spiral} width={250} height={230} alt="pic"></img></div>
                </div>
            </div>
            <div className='door2'>
                <div className='subdoor21'>
                    <div>Deals of the day</div>
                    <div>shop now<span><BsFillArrowRightSquareFill/></span></div>
                </div>
                <div className='subdoor22'>
                    <div style={{marginRight:'20px'}}>
                        <div>
                            <img src={lappy} width={220} height={180} alt='pic'></img>
                        </div>
                        <div style={{padding:'5px'}}>
                            <p>Hp Pavillion</p>
                        </div>
                        <div style={{display:'flex', alignItems:'center', padding:'5px'}}>
                            <div style={{marginRight:'20px'}}><span><TbCurrencyNaira size={22}/></span>89 500</div>
                            <div style={{color:'red'}}>-50%</div>
                        </div>
                    </div>
                    <div style={{marginRight:'20px'}}>
                        <div>
                            <img src={indo} width={220} height={180} alt='pic'></img>
                        </div>
                        <div style={{padding:'5px'}}>
                            <p>Hp Pavillion</p>
                        </div>
                        <div style={{display:'flex', alignItems:'center', padding:'5px'}}>
                            <div style={{marginRight:'20px'}}><TbCurrencyNaira size={22}/>89 500</div>
                            <div style={{color:'red'}}>-50%</div>
                        </div>
                    </div>
                    <div style={{marginRight:'20px'}}>
                        <div>
                            <img src={airpod} width={220} height={180} alt='pic'></img>
                        </div>
                        <div style={{padding:'5px'}}>
                            <p>Hp Pavillion</p>
                        </div>
                        <div style={{display:'flex', alignItems:'center', padding:'5px'}}>
                            <div style={{marginRight:'20px'}}><TbCurrencyNaira size={22}/>89 500</div>
                            <div style={{color:'red'}}>-50%</div>
                        </div>
                    </div>
                    <div style={{marginRight:'20px'}}>
                        <div>
                            <img src={sneakers} width={220} height={180} alt='pic'></img>
                        </div>
                        <div style={{padding:'5px'}}>
                            <p>Hp Pavillion</p>
                        </div>
                        <div style={{display:'flex', alignItems:'center', padding:'5px'}}>
                            <div style={{marginRight:'20px'}}><TbCurrencyNaira size={22}/>89 500</div>
                            <div style={{color:'red'}}>-50%</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={lappy} width={220} height={180} alt='pic'></img>
                        </div>
                        <div style={{padding:'5px'}}>
                            <p>Hp Pavillion</p>
                        </div>
                        <div style={{display:'flex', alignItems:'center', padding:'5px'}}>
                            <div style={{marginRight:'20px'}}><TbCurrencyNaira size={22}/>89 500</div>
                            <div style={{color:'red'}}>-50%</div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className='door3'>
                <div>Top Stores</div>
                <div>
                    <div>
                        <img src={fruit1} width={250} height={210} alt='pic'/>
                        <p>Roban Stores</p>
                    </div>
                    <div>
                        <img src={fruit1} width={250} height={210} alt='pic'/>
                        <p>Gabbs mini mart</p>
                    </div>
                    <div>
                        <img src={skin1} width={250} height={210} alt='pic'/>
                        <p>Spar</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={clothing2} alt='pic'/>
                        <p>Annie's</p>
                    </div>
                    <div>
                        <img src={clothing2} alt='pic'/>
                        <p>GABBS</p>
                    </div>
                    <div>
                        <img src={clothing2} alt='pic'/>
                        <p>Store Name</p>
                    </div>
                    <div>
                        <img src={clothing2} alt='pic'/>
                        <p>Store Name</p>
                    </div>
                    <div>
                        <img src={clothing2} alt='pic'/>
                        <p>Store Name</p>
                    </div>
                </div>
            </div>
            <div className='door4'>
                <div>Featured Category</div>
                <div>
                    <div>
                        <img src={phone1} alt='pic'/>
                        <div><p>Store Name</p></div>
                    </div>
                    <div>
                        <img src={furnitures1} alt='pic'/>
                        <div><p>Store Name</p></div>
                    </div>
                    <div>
                        <img src={phone1} alt='pic'/>
                        <div><p>Store Name</p></div>
                    </div>
                    <div>
                        <img src={phone1} alt='pic'/>
                        <div><p>Store Name</p></div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={clothing1} alt='pic'/>
                        <div><p>Grocery</p></div>
                    </div>
                    <div>
                        <img src={clothing1} alt='pic'/>
                        <div><p>Computer</p></div>
                    </div>
                    <div>
                        <img src={clothing1} alt='pic'/>
                        <div><p>Baby Products</p></div>
                    </div>
                    <div>
                        <img src={clothing1} alt='pic'/>
                        <div><p>Health and Beauty</p></div>
                    </div>
                    <div>
                        <img src={clothing1} alt='pic'/>
                        <div><p>Grocery</p></div>
                    </div>
                    <div>
                        <img src={clothing1} alt='pic'/>
                        <div><p>Fashion</p></div>
                    </div>
                </div>
            </div>
            <div className='door5'>
                <div>
                    <div>Recommended deals for you</div>
                    <div>see all details<span><BsFillArrowRightSquareFill/></span></div>
                </div>
                <div>
                    <Box
                        sx={{
                            display: 'grid',
                            columnGap: 5,
                            rowGap: 1,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            padding: '5px',
                          }}
                        
                    >
                        <Item>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <div><img src={apple} alt='pic'/></div>
                                <div>
                                    <p>Apple Iphone 12 Pro Max 128GB</p>
                                    <p>Pacific Blue - Unlocked</p>
                                    <p><TbCurrencyNaira size={22}/>850,000</p>
                                    <div><FaHeart/></div>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <div><img src={apple} alt='pic'/></div>
                                <div>
                                    <p>Apple Iphone 12 Pro Max 128GB</p>
                                    <p>Pacific Blue - Unlocked</p>
                                    <p><TbCurrencyNaira size={22}/>850,000</p>
                                    <div><FaHeart/></div>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <div><img src={apple} alt='pic'/></div>
                                <div>
                                    <p>Apple Iphone 12 Pro Max 128GB</p>
                                    <p>Pacific Blue - Unlocked</p>
                                    <p><TbCurrencyNaira size={22}/>850,000</p>
                                    <div><FaHeart/></div>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <div><img src={apple} alt='pic'/></div>
                                <div>
                                    <p>Apple Iphone 12 Pro Max 128GB</p>
                                    <p>Pacific Blue - Unlocked</p>
                                    <p><TbCurrencyNaira size={22}/>850,000</p>
                                    <div><FaHeart/></div>
                                </div>
                            </div>
                        </Item>
                    </Box>
                </div>
            </div>
            <div className='door6'>
                <div>
                    <div>Top selling Products</div>
                    <div>see all<span><BsFillArrowRightSquareFill/></span></div>
                </div>
                <div>
                    <div>
                        <img src={pringles} alt='pic'/>
                        <p>pringles</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                        <p >200 sold items</p>
                    </div>
                    <div>
                        <img src={flash} alt='pic'/>
                        <p>OTG USB flash -126gb</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                        <p >200 sold items</p>
                    </div>
                    <div>
                        <img src={fan} alt='pic'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                        <p >200 sold items</p>
                    </div>
                    <div>
                        <img src={flash} alt='pic'/>
                        <p>OTG USB flash -126gb</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                        <p >200 sold items</p>
                    </div>
                    <div>
                        <img src={fan} alt='pic'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                        <p >200 sold items</p>
                    </div>
                </div>
            </div>
            <div className='door6'>
                <div>
                    <div>Flash Sales / Free Delivery</div>
                    <div>see more<span><BsFillArrowRightSquareFill/></span></div>
                </div>
                <div>
                    <div>
                        <img src={pringles} alt='pic'/>
                        <p>pringles</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                        <p>4 items</p>
                    </div>
                    <div>
                        <img src={flash} alt='pic'/>
                        <p>OTG USB flash -126gb</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                        <p>14 items left</p>
                    </div>
                    <div>
                        <img src={fan} alt='pic'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                        <p>29 items left</p>
                    </div>
                    <div>
                        <img src={flash} alt='pic'/>
                        <p>OTG USB flash -126gb</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                        <p>14 items left</p>
                    </div>
                    <div>
                        <img src={fan} alt='pic'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                        <p>29 items left</p>
                    </div>
                </div>
            </div>
            <div className='door6'>
                <div>
                    <div>Discounted Electronics</div>
                    <div>see all details<span><BsFillArrowRightSquareFill/></span></div>
                </div>
                <div>
                    <div>
                        <img src={theatre} alt='pic'/>
                        <p>LG DVD Home Theatre</p>
                        <p><TbCurrencyNaira size={22}/>90, 500</p>
                    </div>
                    <div>
                        <img src={fridge} alt='pic'/>
                        <p>OTG USB flash -126gb</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                    </div>
                    <div>
                        <img src={tele} alt='pic'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                    </div>
                    <div>
                        <img src={theatre} alt='pic'/>
                        <p>OTG USB flash -126gb</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                    </div>
                    <div>
                        <img src={tele} alt='pic'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                    </div>
                </div>
            </div>

            <div className='brands'>
                <div>Brands</div>
                <div>
                    <div style={{marginBottom:'16px'}}>
                        <div><img src={belrad} alt='pic'/></div>
                        <div><img src={ibm} alt='pic'/></div>
                        <div><img src={cola} alt='pic'/></div>
                        <div><img src={dior} alt='pic'/></div>
                        <div><img src={adidas} alt='pic'/></div>
                        <div><img src={ox} alt='pic'/></div>
                        <div><img src={lg} alt='pic'/></div>
                    </div>
                    <div>
                        <div><img src={inc} alt='pic'/></div>
                        <div><img src={inc} alt='pic'/></div>
                        <div><img src={inc} alt='pic'/></div>
                        <div><img src={inc} alt='pic'/></div>
                        <div><img src={inc} alt='pic'/></div>
                        <div><img src={inc} alt='pic'/></div>
                        <div><img src={inc} alt='pic'/></div>
                    </div>
                </div>
            </div>


            <div className='door6'>
                <div>
                    <div>Under N2,000 just for you</div>
                    <div>Small money<span><BsFillArrowRightSquareFill/></span></div>
                </div>
                <div>
                    <div>
                        <img src={pringles} alt='pic'/>
                        <p>pringles</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                    </div>
                    <div>
                        <img src={flash} alt='pic'/>
                        <p>OTG USB flash -126gb</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                    </div>
                    <div>
                        <img src={fan} alt='pic'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                    </div>
                    <div>
                        <img src={fan} alt='pic'/>
                        <p>OX Rechargeable Fan with 2.....</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                    </div>
                    <div>
                        <img src={flash} alt='pic'/>
                        <p>OTG USB flash -126gb</p>
                        <p><TbCurrencyNaira size={22}/>1200</p>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Palour;