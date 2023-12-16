const HeroSection = () => {
    return (
    <main className="hero container">
        <div className="hero-contant">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe eveniet rem vitae odit voluptate obcaecati amet, vel similique delectus dolorum, alias atque suscipit, maiores nobis deleniti dicta autem qui?</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="sec-btn">Categary</button>
            </div>

            <div className="shoping">
                <p>Also Available on</p>

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart"/>
                </div>
            </div>
        </div>
        <div className="hero-img">
            <img src="/images/hero-image.png" alt="amazon" />    
        </div>
    </main>
    );
};

export default HeroSection;