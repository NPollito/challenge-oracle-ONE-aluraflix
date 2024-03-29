import logo from '../../assets/images/logoMain.svg'
import Button from '../Button';

const Header = () => {
    return(
        <header className='py-3'> 
            <div className='container d-flex justify-content-center justify-content-md-between'>
                <img src={logo} style={{width: "150px"}} alt="logo de aluraflix"/>
                <Button name="Nuevo video" newBtn/>
            </div>
        </header>
    )
} 

export default Header;