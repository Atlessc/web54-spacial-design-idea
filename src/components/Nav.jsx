import HomeImg from '../assets/home.png'
import Profile from '../assets/user.png'
import Support from '../assets/mug.png'
import '../App.css'
import '../styles/Nav.css'

export default function NavBar() {
    return (
        <div className='nav-container'>
            <a href='https://ko-fi.com/web54devco' className='SupportBtn' aria-label='Support me' target="_blank" rel="noreferrer">
            <div tabIndex={1}>
                <img className="nav-btn" src={Support} alt='Support me by buying me a coffee' />
            </div>
            </a>
            <div tabIndex={2}>
                <img className="nav-btn" src={HomeImg} alt='home button' />
            </div>
            <div tabIndex={3}>
                <img className="nav-btn" src={Profile} alt='user profile' />
            </div>
        </div>
    )
}