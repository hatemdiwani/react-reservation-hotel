export default () => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                {/* Single Blog */}
                <div className="single-blog mb-30">
                    <div className="blog-img">
                        <a href="single-blog.html"> <img src="assets/img/our_blog/blog-img2.jpg" alt /></a>
                    </div>
                    <div className="blog-caption">
                        <div className="blog-cap-top d-flex justify-content-between mb-40">
                            <span>news</span>
                            <ul><li>by<a href="#"> Jhon Guru</a></li></ul>
                        </div>
                        <div className="blog-cap-mid">
                            <p><a href="single-blog.html">5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</a></p>
                        </div>
                        {/* Comments */}
                        <div className="blog-cap-bottom d-flex justify-content-between">
                            <span>Feb 28, 2020</span>
                            <span><img src="assets/img/our_blog/blog-comments-icon.jpg" alt />3</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}