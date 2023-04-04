import Mavin from '../images/Mavin.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='mavin-policy'>
            <div>
                <img src={Mavin} alt=''className='mavin-logo'/>
            </div>
                 
                <p className='policy'>© 2023 MAVIN GLOBAL HOLDINGS.<br/> All Rights Reserved.| <span className='mitchell'><a href='https://mavinrecords.com/wpautoterms/privacy-policy/' target='_blank' rel="noreferrer">Privacy Policy</a></span> |</p>
                <p className='built'> Management: essien@mavinrecords.com</p>
                <p className='built'>Designed and Built by <span className='mitchell'><a href='https://mitchellamewieye.info/' target='_blank' rel="noreferrer">Mitchell</a></span></p>
            
        </div>
    </div>
  )
}
export default Footer