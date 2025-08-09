import './Banner.css'
function Banner(){
    return(
           <div className="hero-section">
             <section className="hero-img">
             <div className='hero-text'>
                 <h1 className='hero-heading'>Capturing Life's Most Precious Moments</h1> <br/>
              <p className='hero-paragraph'>Professional photography services for weddings, events, portraits, and corporate needs. Creating timeless memories with artistic vision and technical excellence.</p>
               <div className="hero-buttons">
                        <button className="btn-primary">View Portfolio</button>
                        <button className="btn-outline">Book Session</button>
                    </div>
             </div>
             </section>
           </div>
    )
}
export default Banner;