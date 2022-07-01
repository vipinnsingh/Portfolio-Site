// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Vipin SIngh" />

            <div className='header__content'>
                <h1>Vipin Singh</h1>
                <p>Solidity Developer</p>
                <a href="mailto:vipinsingh262000@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header; 