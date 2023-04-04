import { Link } from "react-router-dom"
import "animate.css/animate.min.css";
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const CurrentVideo = () => {
  return (
    <section>
 <AnimatedOnScroll animationIn='flipInX'>
    <div className="video">
   
        <div className='text-left'>
                <p className='video-text'><span className="video-span"> ALL OVER </span><br/>OFFICIAL MUSIC VIDEO</p>
                <button className='watch-btn'><Link style={{textDecoration: 'none', color: '#151515'}} to="/Video">SEE MORE VIDEOS</Link></button>
            </div>
           
        <div className="video-right">
        <iframe className="iframe-home" title='all over' height="550" width="100%"  src="https://www.youtube.com/embed/zwVQjisPfZY"></iframe>
        </div>
    </div>
    </AnimatedOnScroll>
    </section>
  )
}
export default CurrentVideo