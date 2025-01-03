import './hero.css'

const HeroSection = () => {
    return (
        <div className='hero-main' id='hero'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <div className="hero-content">
                            <div className="hero-content-heading">
                                <h4 className='p-0 m-0'>Welcome to</h4>
                                <h1 className='p-0 m-0'>Cave Consulting</h1>
                            </div>
                            <p className='p-0 m-0'>“A sanctuary where you can escape the noise of the world and reconnect with your inner self. Amid the hustle and bustle of daily life, moments of stillness to reflect, explore, and find clarity are rare. Whether you’re navigating challenges, feeling isolated, or seeking inner peace, you don’t have to face life’s transitions or hardships alone. Let this be your space for understanding, healing, and discovering the strength within.”</p>
                            <div className="hero-content-btn">
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
