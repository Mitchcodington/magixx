import { Link } from 'react-router-dom'
import magixx from '../images/magixx.webp'
import React from 'react';



const Hero = () => {
  return (
    <section>
        <div className='hero'>
            <div className='left-img'>
                <img src={magixx} alt='gwagwalada art cover' className='colors' />
              
            </div>
            
            <div  className='right-img'>
                <p className='colors-text'> <span className='color'>COLORS</span><br/> <span className='and'>AND</span><br/> LOYAL</p>
                <button className='listen-btn'><Link style={{textDecoration: 'none',borderRadius:'10px', color: '#151515',background: '#ffc017',padding: '1em 1em' }}  to="/MusicNav">STREAM</Link></button>
            </div>
        </div>
    </section>
  )
}
export default Hero