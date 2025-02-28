import logo from '../../assets/betalentLogo.png';
import { Container } from './styles';

const Header: React.FC = () => {    
    return (
        <Container>
            <img src={logo} alt="Logo" />
        </Container>
    )
}
export default Header;