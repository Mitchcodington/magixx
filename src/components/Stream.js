import spotify from '../images/spotify.png'
import boomplay from '../images/boomplay.png'
import audiomack from '../images/audiomack.png'
import youtubemusic from '../images/youtubemusic.png'
import apple from '../images/apple.png'
import deezer from '../images/deezer.png'
import shazam from '../images/shazam.png'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const Stream = () => {
  return (
    <section className='stream-sec'>
       <AnimatedOnScroll animationIn="bounceInRight">
        <div className='stream-platform'>
       
        <p className='stream'>Stream Magixx</p>
       
        <div className='platform'>
        <p className='a-p-stream'><a href='https://open.spotify.com/artist/0rskhjcLm5BxjwZDRs4142' target='_blank' rel="noreferrer"><img src={spotify} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://www.boomplay.com/artists/1053678' target='_blank' rel="noreferrer"><img src={boomplay} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://music.youtube.com/search?q=magixx' target='_blank' rel="noreferrer"><img src={youtubemusic} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://www.shazam.com/gb/artist/magixx/1364115145' target='_blank' rel="noreferrer"><img src={shazam} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://music.apple.com/ng/artist/magixx/1364115145' target='_blank' rel="noreferrer"><img src={apple} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://audiomack.com/magixx' target='_blank' rel="noreferrer"><img src={audiomack} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://www.deezer.com/en/artist/14216835' target='_blank' rel="noreferrer"><img src={deezer} alt='' className='music-platform'/></a></p>
        </div>
        </div>
        </AnimatedOnScroll>
    </section>
  )
}
export default Stream