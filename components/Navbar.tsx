import Link from "next/link";
import { StyledNav } from "../src/styles/styledComponents/StyledNav";
import { Switch, useSwitch } from "../helpers/useSwitch";
import Image from "next/image";
import logo from "../src/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { toggleLogin, useLogin } from "../helpers/useLogin";
import { getCsrfToken, useSession } from "next-auth/react";

/*
Navbar component
using zustand toggle function to control the burger menu
*/
const Navbar = ({ csrfToken }: any) => {
  const { data: session, status } = useSession();
  const { switchToggle, toggle } = useSwitch() as Switch;
  const { showLogin, toggleLogin } = useLogin() as toggleLogin;
  console.log(session);
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
          <p onClick={() => toggleLogin()}>LOGIN</p>
        </div>
      </div>
      <div className="login">
        <form method="post" action="/api/auth/callback/credentials">
          <h1>Login</h1>
          <p>Indtast brugernavn og adgangskode for at logge på</p>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label className="Username">
            Brugernavn:
            <input className="username" name="username" type="text" />
          </label>
          <label className="Password">
            Adgangskode:
            <input className="password" name="password" type="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="search">
        <input type="text" placeholder="INDTAST SØGEORD" />
        <button>
          <SearchIcon />
        </button>
      </div>
    </StyledNav>
  );
};
export async function getServerSideProps(context: any) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      csrfToken: csrfToken || null,
    },
  };
}
export default Navbar;
