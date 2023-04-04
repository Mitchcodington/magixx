import Subscribe from "../components/Subscribe"
import {motion as m} from 'framer-motion'
const Tour = () => {
  return (
    <m.section initial={{x:'100%'}} animate={{x:'0%'}} transition={{duration:0.95, ease: 'easeOut'}} className="tour-sec">
    <div className="expe-city">
        <p className="expe">EXPERIENCE THE MAGIXX</p>
        <p className="city">Coming to a City near you.</p>
        <div className="sub">
        <Subscribe/>
        </div>
    </div>
    
    </m.section>
  )
}
export default Tour