import Link from "next/link";
import { StyledNav } from "../src/styles/styledComponents/StyledNav";
import { useSwitch } from "../helpers/useSwitch";
import Image from "next/image";
import logo from "../src/images/logo.svg";

const Navbar = () => {
  const { switchToggle, toggle } = useSwitch();
  return (
    <StyledNav show={toggle}>
      <div className="burger" onClick={() => switchToggle()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="logo">
        <Image src={logo.src} alt="Logo_det_utrolige_teater" fill={true} priority />
      </div>
      <div className="nav">
        <div className="links">
          <Link href="/">FORSIDE</Link>
          <Link href="/">FORESTILLINGER & EVENTS</Link>
          <Link href="/">SKUESPILLERE</Link>
          <Link href="/">MIN SIDE</Link>
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
