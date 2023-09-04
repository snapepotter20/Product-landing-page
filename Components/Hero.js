const Hero = () => {
    return (
        <main className='hero container'>
            <div className='hero-content'>
                <h1>Your feet deserve the best</h1>
                <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.</p>
                <div className='hero-btn'>
                    <button>Shop now</button>
                    <button>Category</button>
                </div>
                <div className='shopping'>
                    <p>Shop your fav shoes now!</p>
                </div>
                <div className="brand-icons">
                    <a href="https://www.amazon.com/">
                        <img src="/Images/amazon.png" alt="amazon-logo" />
                    </a>
                    <a href="https://www.flipkart.com/">   
                    <img src="/Images/flipkart.png" alt="flipkart-logo" />
                    </a>
                </div>
            </div>
            <div className='hero-image'>
                <img src="/Images/hero-image.png" alt="hero" />
            </div>
        </main>
    );
}
export default Hero;