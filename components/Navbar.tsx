import Link from "next/link";
import { StyledNav } from "../src/styles/styledComponents/StyledNav";
import { Switch, useSwitch } from "../helpers/useSwitch";
import Image from "next/image";
import logo from "../src/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { toggleLogin, useLogin } from "../helpers/useLogin";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { SearchState, useSearch } from "../helpers/useSearch";
import { useRouter } from "next/router";

/*
Navbar component
using zustand toggle function to control the burger menu
*/
const Navbar = () => {
  const { data: session, status } = useSession();
  const { switchToggle, toggle } = useSwitch() as Switch;
  const { showLogin, toggleLogin } = useLogin() as toggleLogin;
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { getSearch } = useSearch() as SearchState;

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
  //use zustand to store keyword and route to search.tsx then show results
  const handleSearch = () => {
    getSearch(keyword);
    router.push("/search");
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
          <Link className={router.pathname === "/" ? "active" : ""} href="/">
            FORSIDE
          </Link>
          <Link className={router.pathname === "/shows" ? "active" : ""} href="/shows">
            FORESTILLINGER & EVENTS
          </Link>
          <Link className={router.pathname === "/actors" ? "active" : ""} href="/actors">
            SKUESPILLERE
          </Link>
          {status === "authenticated" ? (
            <Link className={router.pathname === "/admin" ? "active" : ""} href="/admin">
              MIN SIDE
            </Link>
          ) : (
            <p onClick={() => toggleLogin()}>LOGIN</p>
          )}
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
        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="INDTAST SØGEORD" />
        <button onClick={() => handleSearch()} aria-label="search_button">
          <SearchIcon />
        </button>
      </div>
    </StyledNav>
  );
};

export default Navbar;
