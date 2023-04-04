import dime from '../images/dime.png'
import {motion as m} from 'framer-motion'
const Merch = () => {
  return (
    <m.div initial={{x:'100%'}} animate={{x:'0%'}} transition={{duration:0.95, ease: 'easeOut'}} className='merch'>
        
       <div>
       <p className='coming'>COMING SOON</p>
        <p className='watch'>Watch this space...</p>
        <img src={dime} alt='' className='merch-img'/><br/>
        
       </div>
    </m.div>
  )
}
export default Merch