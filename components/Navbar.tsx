import Link from "next/link";
import { StyledNav } from "../src/styles/styledComponents/StyledNav";
import { Switch, useSwitch } from "../helpers/useSwitch";
import Image from "next/image";
import logo from "../src/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { toggleLogin, useLogin } from "../helpers/useLogin";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

/*
Navbar component
using zustand toggle function to control the burger menu
*/
const Navbar = () => {
  const { data: session, status } = useSession();
  const { switchToggle, toggle } = useSwitch() as Switch;
  const { showLogin, toggleLogin } = useLogin() as toggleLogin;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //handle login function that checks if user have typed in username and password before sending a request to login
  const handleLogin = () => {
    if (!username) {
      alert("Please enter your username");
      return;
    }
    if (!password) {
      alert("Please enter your password");
      return;
    }
    toggleLogin();
    signIn("credentials", { username, password });
  };
  return (
    <StyledNav showBurger={toggle} showLogin={showLogin}>
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
          <Link href="/shows">FORESTILLINGER & EVENTS</Link>
          <Link href="/actors">SKUESPILLERE</Link>
          {status === "authenticated" ? <Link href="/">MIN SIDE</Link> : <p onClick={() => toggleLogin()}>LOGIN</p>}
        </div>
      </div>
      <div className="login">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => handleLogin()}>Login</button>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="INDTAST SØGEORD" />
        <button aria-label="search_button">
          <SearchIcon />
        </button>
      </div>
    </StyledNav>
  );
};

export default Navbar;
