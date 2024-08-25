import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';    
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>lamasocial</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon/>
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/40e52e367c57c8856c41364ff6fb0f6a.jpeg?lk3s=a5d48078&nonce=88484&refresh_token=c789959ea238d59a8402ed8316a84aba&x-expires=1724785200&x-signature=IK%2BeQZS5zcZc%2Fwrvj6HFnY3lrhw%3D&shp=a5d48078&shcp=81f88b70" alt="" />
                    <span>Tuyen</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;