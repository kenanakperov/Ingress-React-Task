import React from "react";

const Header = ()=>{
    return(
        <>
            <div className="header-top">
                <div className="container">
                    <nav>
                        <ul id="ads-ul">
                            <a href=""><li>Tap.az</li></a>
                            <a href=""><li>Bina.az</li></a>
                            <a href=""><li>Boss.az</li></a>
                        </ul>
                        <aside>
                            <p>Dəstək: <span>(012) 599-08-01</span>; <span>(012) 505-77-55</span></p>
                            <ul id="menu-ul">
                                <a href=""><li>Yardim</li></a>
                                <a href=""><li>RU</li></a>
                                <a href=""><li>Secilmisler</li></a>
                                <a href=""><li>Giris</li></a>
                            </ul>
                        </aside>
                    </nav>
                </div>
            </div>
            <header>
                <div className="container">
                    <nav>
                        <aside>
                            <span>TURBO.AZ</span>
                            <ul>
                                <a href=""><li>Butun elanlar</li></a>
                                <a href=""><li>Avtosalonlar</li></a>
                                <a href=""><li>Ehtiyyat hisseleri ve aksesuarlar</li></a>
                            </ul>
                        </aside>
                        <a className="new-elan-btn" href=""><p>+ Yeni elan</p></a>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header