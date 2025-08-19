import '../../styles/Services.css'
import '../../assets/Moveable.jpeg'
function Services(){
    return(
      <>
        <div>
        <div className="services">
            <div className="services-text " >
                <h1 >Photography Packages</h1>
                <p>Choose the perfect package for your photography needs with transparent pricing and comprehensive features</p>
            </div>
        </div>
        <div className="card-group pt-30 w-75 mx-auto ">
  <div className="card">
    
    <div className="card-body services-text ">
      <h1 className="card-title">Basic</h1>
      <h2 className='amount'>Rs.600</h2>
      <ul>
        <li>2 Hours Coverage</li>
        <li >50 Edited Photos</li>
        <li>Online Gallery</li>
        <li>Basic Retouching</li>
      </ul>
      <div>
   <button className="btn btn-primary px-3 py-3 book-button">Book Now</button>
</div>

    </div>
    
  </div>
  <div className="card">
   
    <div className="card-body  services-text ">
      <h1 className="card-title">Professional</h1>
       <h2 className='amount'>Rs.600</h2>
       <ul>
        <li>4 Hours Coverage</li>
        <li >150 Edited Photos</li>
        <li>Online Gallery</li>
        <li>Advanced Retouching</li>
        <li>Print Release</li>
      </ul>
      <div>
             <button className="btn btn-primary px-3 py-3 book-button">Book Now</button>
      </div>
    

    </div>
    
  </div>
  <div className="card">
    
    <div className="card-body  services-text ">
      <h1 className="card-title">Premium</h1>
       <h2 className='amount'>Rs.600</h2>
       <ul>
       <li>8 Hours Coverage</li>
        <li>150 Edited Photos</li>
        <li>Online Gallery</li>
        <li>Advanced Retouching</li>
        <li>Print Release</li>
        <li>Same Day Preview</li>
      </ul>
      <div>
       <button className="btn btn-primary px-3 py-3 book-button">Book Now</button>
       </div>
    </div>
    
  </div>
</div>


</div>

</>
        
    )
}
export default Services