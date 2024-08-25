import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/40e52e367c57c8856c41364ff6fb0f6a.jpeg?lk3s=a5d48078&nonce=88484&refresh_token=c789959ea238d59a8402ed8316a84aba&x-expires=1724785200&x-signature=IK%2BeQZS5zcZc%2Fwrvj6HFnY3lrhw%3D&shp=a5d48078&shcp=81f88b70" alt="" />
                        <span>Tuyen</span>
                    </div>

                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>

                    <div className="item">
                        <img src={Groups} alt="" />
                        <span>Groups</span>
                    </div>

                    <div className="item">
                        <img src={Market} alt="" />
                        <span>Marketplace</span>
                    </div>

                    <div className="item">
                        <img src={Watch} alt="" />
                        <span>Watch</span>
                    </div>

                    <div className="item">
                        <img src={Memories} alt="" />
                        <span>Memories</span>
                    </div>
                </div>

                <hr />

                <div className="menu">
                    <span>Your shortcuts</span>

                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Events</span>
                    </div>

                    <div className="item">
                        <img src={Gaming} alt="" />
                        <span>Gaming</span>
                    </div>

                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Gallery</span>
                    </div>

                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>

                    <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>
                </div>

                <hr />

                <div className="menu">
                    <span>Others</span>
                    
                    <div className="item">
                        <img src={Fund} alt="" />
                        <span>Fundraiser</span>
                    </div>

                    <div className="item">
                        <img src={Tutorials} alt="" />
                        <span>Tutorials</span>
                    </div>

                    <div className="item">
                        <img src={Courses} alt="" />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;