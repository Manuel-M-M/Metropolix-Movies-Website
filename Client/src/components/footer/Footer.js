import { useHistory } from 'react-router-dom';
import './Footer.css'
import Logo from '../../img/logos/cuadrado_verdeNegro.png';


function Footer() {

    const history = useHistory();

    
    return (
        <>
       <footer className="footer-distributed">
 
		<div className="footer-left">
            <a href="123" 
                    onClick={() => {
                        history.push("/Home")
                    }}
            ><h3 className="footerH3">Metropoli
                <span>X</span>
            </h3>
            </a>
		    <p className="footer-company-name">
                <span>Created by:</span> Manuel Moraga Molina &copy; 2021
            </p>
		</div>
		<div className="footer-center">
            <div>
                <i className="fa fa-phone"></i>
                <p>+1 555 123456</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">contact@metropolix.com</a></p>
            </div>
		</div>
		<div className="footer-right">
		    <div className="footer-icons">
                <a
                    href="https://www.themoviedb.org" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <img 
                        id="footerLogo" 
                        src={Logo} 
                        alt=""
                    />
                </a>
		    </div>
		</div>
		</footer>
        </>
    )
};

export default Footer;
