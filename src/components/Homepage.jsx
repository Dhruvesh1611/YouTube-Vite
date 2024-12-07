import React from "react";
import '../components/../App.css'
import Contents from "./Contents.jsx";
import './Contents.css'

function Homepage() {
    return (
        <>
            <div className="searchbar">
                <div className="search"><p1>search</p1>
                    <div className="search_icone"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" /></div>
                </div>
                <div className="items">
                    <div className="mic"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" /></div>
                    <div className="create it"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" /></div>
                    <div className="find it"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" /></div>
                    <div className="bell it"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" /></div>
                    <div className="profile it"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true" alt="" /></div>
                </div>
            </div>
            <div className="option">
                <div className="text3">all</div>
                <div className="text1">Coke Studio</div>
                <div className="text1">UX</div>
                <div className="text1">Case Study</div>
                <div className="text1">Music</div>
                <div className="text1">Bnagla Lofi</div>
                <div className="text1">Tour</div>
                <div className="text1">Saintmartin</div>
                <div className="text1">Tech</div>
                <div className="text1">iPhone 13</div>
                <div className="text1">User Interface Design</div>
                <div className="text1">Computer</div>
            </div>
            {/* <div className="component">
                <div className="r1">
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text">
                        <div className="first">
                        <div className="logo1"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true" alt="" /></div>
                        <div className="textfirst"><p3>Bulbuli | Coke Studio Bangla |
                        Season One | Ritu Raj X Nandita</p3></div>
                        </div></div>
                    </div>
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                </div>
                <div className="r1">
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                </div>
                <div className="r1">
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                    <div className="c1">
                    <div className="photo1"></div>
                    <div className="text"></div>
                    </div>
                </div>
            </div> */}
            <Contents/>
        </>
    )
}
export default Homepage;
