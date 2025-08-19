import '../../styles/Gallery.css';

function Gallery() {
  // Array of image URLs with optimized sizes for different screen sizes
  const images = [
    // First row images
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&h=600&fit=crop&crop=face&q=80",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    
    // Second row images (wider)
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=800&h=600&fit=crop&crop=face&q=80",
    
    // Third row images
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&h=600&fit=crop&crop=face&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
  ];

  return (
    <>
      <div className='services'>
        <div className='services-text'>
          <h1>Gallery/Portfolio</h1>
          <p>
            We pride ourselves on simple work ethics – creativity and client satisfaction. 
            We respect the client's need to create wonderful memories, and we commit ourselves 
            to create them with our cameras. Here are a few stills from our archives!
          </p>
        </div>
        
        <div className='gallery-container'>
          {/* First Row - 3 columns */}
          <div className='gallery-row row-3'>
            {images.slice(0, 3).map((img, index) => (
              <div className='gallery-card' key={`img-${index}`}>
                <img 
                  src={img} 
                  alt={`Gallery ${index + 1}`} 
                  loading="lazy"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            ))}
          </div>
          
          {/* Second Row - 2 columns */}
          <div className='gallery-row row-2'>
            {images.slice(3, 5).map((img, index) => (
              <div className='gallery-card wide' key={`img-${index + 3}`}>
                <img 
                  src={img} 
                  alt={`Gallery ${index + 4}`} 
                  loading="lazy"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            ))}
          </div>
          
          {/* Third Row - 3 columns */}
          <div className='gallery-row row-3'>
            {images.slice(5).map((img, index) => (
              <div className='gallery-card' key={`img-${index + 5}`}>
                <img 
                  src={img} 
                  alt={`Gallery ${index + 6}`} 
                  loading="lazy"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className='mission-section'>
          <div className='mission-content'>
            <h2>Our Mission</h2>
            <p>
              Capturing timeless memories with creativity and passion, 
              ensuring every client feels their story is beautifully told 
              through our lenses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
