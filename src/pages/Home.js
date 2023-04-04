import Hero from "../components/Hero"
import CurrentVideo from "../components/CurrentVideo"
import Subscribe from "../components/Subscribe"
import Stream from "../components/Stream"
import {motion as m} from 'framer-motion'



const Home = () => {
  return (
    <m.div initial={{y:'100%'}} animate={{y:'0%'}} transition={{duration:0.95, ease: 'easeOut'}}>
        <div>
      <Hero/>
      <Stream/>
      <CurrentVideo/>
      <Subscribe/>
     
      </div>
    </m.div>
  )
}
export default Home