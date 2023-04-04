

export default function Music(props){
   
  return ( <div className="music-list">
<iframe  width="300" height="320" title="Iframe Example"
    src={props.link}allow="autoplay">
    </iframe>
  
    </div>
   )
}
