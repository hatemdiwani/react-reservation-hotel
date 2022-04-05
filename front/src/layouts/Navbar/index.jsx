export default () => {
    return (
        <>
            <header>

                <div class="header-area header-sticky">
                    <div class="main-header ">
                        <div class="container">
                            <div class="row align-items-center">

                                <div class="col-xl-2 col-lg-2">
                                    <div class="logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-8">

                                    <div class="main-menu f-right d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="index.html">Acceuil</a></li>
                                                <li><a href="blog.html">Hotels</a>
                                                    <ul class="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="single-blog.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Promos</a>
                                                    <ul class="submenu">
                                                        <li><a href="rooms.html">Rooms</a></li>
                                                        <li><a href="elements.html">Element</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="index.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-2">

                                    <div class="header-btn">
                                        <a href="/login" class="btn btn1 d-none d-lg-block ">Login</a>
                                    </div>

                                </div>

                                <div class="col-12">
                                    <div class="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}