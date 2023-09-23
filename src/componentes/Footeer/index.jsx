import "./Footer.css";
import footerBG from "../imgFooter/footer.png" 

const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:`url(${footerBG})`}}>
        <div className="redes">
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/instagram.png" alt="instagram" />
        </a>
        </div>
        <img src='/img/Logo.png' alt='org' /> 
        <strong>Desarrollado por Giankarlow Linares</strong>
    </footer>
}
export default Footer;