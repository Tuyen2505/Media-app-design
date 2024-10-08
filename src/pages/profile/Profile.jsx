import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img
                    src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="cover"
                />
                <img
                    src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""
                    className="profilePic"
                />
            </div>

            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="https://www.facebook.com/mtuyen.250503">
                            <FacebookTwoToneIcon fontSize="medium" />
                        </a>
                        <a href="https://www.facebook.com/mtuyen.250503">
                            <InstagramIcon fontSize="medium" />
                        </a>
                        <a href="https://www.facebook.com/mtuyen.250503">
                            <TwitterIcon fontSize="medium" />
                        </a>
                        <a href="https://www.facebook.com/mtuyen.250503">
                            <LinkedInIcon fontSize="medium" />
                        </a>
                        <a href="https://www.facebook.com/mtuyen.250503">
                            <PinterestIcon fontSize="medium" />
                        </a>
                    </div>
                    <div className="center">
                        <span>Jane Doe</span>

                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>VN</span>
                            </div>

                            <div className="item">
                                <LanguageIcon />
                                <span>tuyen.dev</span>
                            </div>
                        </div>

                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                
                <Posts />
            </div>

        </div>
    );
};

export default Profile;
