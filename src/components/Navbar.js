import instag from '../images/instag.png'
import tweet from '../images/tweet.png'
import face from '../images/face.png'
import tic from '../images/tic.png'
import youtube from '../images/youtube.png'
import blackclose from '../images/blackclose.png'
import blackmenu from '../images/blackmenu.png'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <section className='nav-sec'>
        <img
          src={toggle ? blackclose : blackmenu}
          alt="menu"
          id='menu'
          className="w-[30px] h-[120px] max-w-{2px} bg-transparent cursor-pointer object-contain fixed top-2 right-0 z-[60] mt-[-30px] mr-[30px]"
          onClick={() => setToggle(!toggle)}/>
          <div 
          className={`${
            !toggle ? "hidden" : "flex flex-col"
          } w-[70%] h-[50%] bg-transparent z-[50] absolute top-1 right-0 px-0 my-3 min-w-[140px] rounded-xl sidebar`}
        >
            <ul className='flex flex-col items-center justify-center  bg-dimGray py-4'>
                        
                    
                    <li className='mt-7 tracking-widest bg-dimGray'><NavLink to="/MusicNav" style={({ isActive }) => ({ 
                            color: isActive ? '#ffc017' : 'white' })}>
                            MUSIC
                        </NavLink></li>
                    <li className='mt-7 tracking-widest bg-dimGray'><NavLink to="/Video" style={({ isActive }) => ({ 
                            color: isActive ? '#ffc017' : 'white' })}>
                            VIDEO
                        </NavLink></li>
                    <li className='mt-7 tracking-widest bg-dimGray'><NavLink to="/Tour" style={({ isActive }) => ({ 
                            color: isActive ? '#ffc017' : 'white' })}>
                            TOUR | GIG
                        </NavLink></li>
                         
                <li className='mt-7 tracking-widest bg-dimGray'><NavLink to="/Merch" style={({ isActive }) => ({ 
                            color: isActive ? '#ffc017' : 'white' })}>
                            SHOP MERCH
                        </NavLink></li>
                <li className='mt-7 tracking-widest bg-dimGray'><a href='https://www.theiredefoundation.org/donate-now/' target='_blank' rel="noreferrer"> Magixxfund</a></li>
                </ul>
        </div>


        <div className='top-nav'>
           

            <h1 className='bnxn'><Link style={{textDecoration: 'none', color: 'azure'}} to="/">MAGIXX</Link></h1>
            <div>
                <ul className='list'>
                
                    
                    <li className='li'><NavLink to="/MusicNav" style={({ isActive }) => ({ 
                            color: isActive ? '#ffc017' : 'white' })}>
                            MUSIC
                        </NavLink></li>
                    <li className='li'><NavLink to="/Video" style={({ isActive }) => ({ 
                            color: isActive ? '#ffc017' : 'white' })}>
                            VIDEO
                        </NavLink></li>
                    <li className='tour'><NavLink to="/Tour" style={({ isActive }) => ({ 
                            color: isActive ? '#ffc017' : 'white' })}>
                            TOUR | GIG
                        </NavLink></li>
                        
                </ul>
            </div>
           
        </div>

       <div className='mid-nav'>
            <ul className='mid-list'>
                
                <li className='mid-li'><NavLink to="/Merch" style={({ isActive }) => ({ 
                            color: isActive ? '#ffc017' : 'white' })}>
                            SHOP MERCH
                        </NavLink></li>
                <li className='mid-li'><a href='https://www.theiredefoundation.org/donate-now/' target='_blank' rel="noreferrer"> Magixxfund</a></li>
                
                <div className='socials'>
                    <p className='a-p'><a href='https://www.instagram.com/iam_magixx/?hl=en' target='_blank' rel="noreferrer"><img src={instag} alt='' className='social'/></a></p>
                    <p className='a-p'><a href='https://twitter.com/iam_magixx?lang=en' target='_blank' rel="noreferrer"><img src={tweet} alt=''className='social'/></a></p>
                    <p className='a-p'><a href='https://web.facebook.com/kingmagixx/?_rdc=1&_rdr' target='_blank' rel="noreferrer"><img src={face} alt='' className='social'/></a></p>
                    <p className='a-p'><a href='https://www.tiktok.com/@king.magixx' target='_blank' rel="noreferrer"><img src={tic} alt='' className='social'/></a></p>
                    <p className='a-p'><a href='https://www.youtube.com/channel/UCxB1Xmz7BomgGotLDMLAUdQ' target='_blank' rel="noreferrer"><img src={youtube} alt='' className='youtube'/></a></p>
                </div>
            </ul>

    </div>
    <p className='out'>Colors and loyal | out now | <span className='listen'><Link style={{textDecoration:'none', color:'#ffc017'}} to="/MusicNav">Listen</Link></span></p>
    </section>
  )
}
export default Navbar