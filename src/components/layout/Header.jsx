import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logoMain.svg'
import ButtonLink from '../ButtonLink';

const Header = () => {

    const location = useLocation()

    return(
        <header className='py-3 sticky-md-top'> 
            <div className='container d-flex justify-content-center justify-content-md-between'>
                <Link to="/">
                    <img src={logo} style={{width: "150px"}} alt="logo de aluraflix"/>
                </Link>
                {
                    location.pathname === "/" 
                    && <ButtonLink name="Nuevo video" type="btn-outline-light" paddingX="4" url="new-video"/>
                }
            </div>
        </header>
    )
} 

export default Header;