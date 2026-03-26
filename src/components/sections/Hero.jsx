function Hero(){
    return(
        <section className="section section--hero hero" id="hero">
            <div className="container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Amadi Masuev
                    </h1>
                    <p className="hero__subtitle">
                        Frontend Developer
                    </p>
                    <p className="hero__description">
                        I build clean, structured user interfaces and enjoy working
                        with Javascript and component-based systems.
                    </p>

                    <div className="hero__actions"> 
                        <a className="btn btn--primary" href="#projects">View projects</a>
                        <a className="btn btn--ghost" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;