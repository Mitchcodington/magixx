import Music from "../pages/Music"
import MusicData from "./MusicData"

export default function Musicnav(){
    const music = MusicData.map(musiclist => {
        return (
        <Music
        // songtitle = {musiclist.songtitle}
        //  artist= {musiclist.artist}
        // date= {musiclist.date}
        // coverimg= {musiclist.coverimg}
        link= {musiclist.link}

        />
        )
    })
  return (
    <div className="music-list">
        {music}
        </div>
        
  )
}
