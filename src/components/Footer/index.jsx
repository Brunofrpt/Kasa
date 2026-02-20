import logoFooter from "../../assets/LOGO_footer.svg"

function Footer () {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logoFooter} alt="Logo Footer"></img>
            <p className="footer__texte">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer