import Link from "next/link";
import { StyledFooter } from "../src/styles/styledComponents/StyledFooter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/*
This is the Footer component
*/
const Footer = () => {
  return (
    <StyledFooter>
      <div className="address">
        <ul>
          <li>ADRESSE</li>
          <li>Det utrolige teater</li>
          <li>Havnegade 901</li>
          <li>9000 Aalborg</li>
          <li>EAN 5798003279845</li>
          <li>CVR 1001 0012</li>
          <li>
            <Link href="/">Find vej på kort</Link>
          </li>
        </ul>
      </div>
      <div className="billetservice">
        <ul>
          <li>BILLETSERVICE</li>
          <li>
            <Link href="">Se åbningstider</Link>
          </li>
          <li>Billettelefon: +45 96 31 80 80</li>
          <li>billet@dut.dk</li>
        </ul>
      </div>
      <div className="administration">
        <ul>
          <li>ADMINISTRATION</li>
          <li>Telefon: +45 96 31 80 90</li>
          <li>adm@dut.dk</li>
        </ul>
      </div>
      <div className="info">
        <ul>
          <li>PRAKTISK INFO</li>
          <li>
            <Link href="">Kontakt</Link>
          </li>
          <li>
            <Link href="">Kom trygt i teater</Link>
          </li>
          <li>
            <Link href="">Presseside</Link>
          </li>
          <li>
            <Link href="">Skoleforestillinger</Link>
          </li>
          <li>
            <Link href="/">Teatercaféen</Link>
          </li>
          <li>
            <Link href="/">Handelsbetingelser</Link>
          </li>
        </ul>
      </div>
      <div className="social">
        {/* passHref is to pass the href to the child component and is used if the a tag is wrapping another component */}
        <Link href="" passHref>
          <FacebookIcon />
        </Link>
        <Link href="/" passHref>
          <InstagramIcon />
        </Link>
        <Link href="/" passHref>
          <LinkedInIcon />
        </Link>
      </div>
    </StyledFooter>
  );
};

export default Footer;
