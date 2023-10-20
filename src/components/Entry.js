import React from 'react'
import Header from './Header'


function Entry() {

    return (
        <div>
            <Header />
            <div class = "product">
                <h2 class = "product-category">Recommended for you</h2>
                <div class = "product-container">
                    <div class = "product-card">
                        <div class = "product-image">  
                        <img src = "https://i.pinimg.com/564x/b1/04/5f/b1045fdf96ef94318d120bdd917ded2d.jpg" class = "product-thumb" alt = ""/>
                    </div>
                    <div class = "product-info">
                        <br/>
                    <h2 class = "product-brand">Nakiyinji Hostel, kikoni</h2>
                    <br/>
                  
                <span class = "price">shs 1,100,000</span><span class = "actual-price">4.5(1234) </span>
                </div>
                </div>
                <div class = "product-card">
                    <div class = "product-image">
                    <img src = "./pictures/room1.jpg" class = "product-thumb" alt = ""/>
                </div>
                <div class = "product-info">
                    <br/>
                <h2 class = "product-brand">Olympia Hostel, Kikoni</h2>
                <br/>
                <span class = "price">shs 900000</span><span class = "actual-price">ugshs 85000 </span>
                </div>
                </div>
                <div class = "product-card">
                    <div class = "product-image">
                    <img src = "./pictures/room1.jpg" class = "product-thumb" alt = ""/>
                </div>
                <div class = "product-info">
                    <br/>
                <h2 class = "product-brand">Waveny Hostel,Kikoni</h2>
                <br/>
                <span class = "price">ugshs 52000</span><span class = "actual-price">ugshs 65000 </span>
                </div>
                </div>
                <div class = "product-card">
                    <div class = "product-image">
                       
                    <img src = "./pictures/room1.jpg" class = "product-thumb" alt = ""/>
                </div>
                <div class = "product-info">
                    <br/>
                <h2 class = "product-brand">Soam</h2>
                <br/>
                <span class = "price">ugshs 52000</span><span class = "actual-price">ugshs 65000 </span>
                
            </div>
                
            </div>
            </div>
    
            <div className="product">
  <h2 className="product-category">
    Popular Residences &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
    &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
    &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;{" "}
    <span>
      <a href="./Ratings.js" className="right">
        View all hostels
      </a>
    </span>
  </h2>
  <br />
  <div className="product-container">
    <div className="product-card">
      <div className="product-image">
        <img src="./pictures/room1.jpg" className="product-thumb" alt="" />
      </div>
      <div className="product-info">
        <h2 className="product-brand">brand</h2>
        <span className="price">ugshs 52000</span>
        <span className="actual-price">ugshs 65000 </span>
      </div>
    </div>
    <div className="product-card">
      <div className="product-image">
        <img src="./pictures/room1.jpg" className="product-thumb" alt="" />
      </div>
      <div className="product-info">
        <h2 className="product-brand">brand</h2>
        <span className="price">ugshs 64000</span>
        <span className="actual-price">ugshs 85000 </span>
      </div>
    </div>
    <div className="product-card">
      <div className="product-image">
        <img src="./pictures/room1.jpg" className="product-thumb" alt="" />
      </div>
      <div className="product-info">
        <h2 className="product-brand">brand</h2>
        <span className="price">ugshs 52000</span>
        <span className="actual-price">ugshs 65000 </span>
      </div>
    </div>
    <div className="product-card">
      <div className="product-image">
        <img src="./pictures/room1.jpg" className="product-thumb" alt="" />
      </div>
      <div className="product-info">
        <h2 className="product-brand">brand</h2>
        <span className="price">ugshs 52000</span>
        <span className="actual-price">ugshs 65000 </span>
      </div>
    </div>
    <div className="product-card">
      <div className="product-image">
        <img src="./pictures/room1.jpg" className="product-thumb" alt="" />
      </div>
      <div className="product-info">
        <h2 className="product-brand">brand</h2>
        <span className="price">ugshs 52000</span>
        <span className="actual-price">ugshs 65000 </span>
      </div>
    </div>
    <div className="product-card">
      <div className="product-image">
        <img src="../pictures/man8.jpg" className="product-thumb" alt="" />
      </div>
      <div className="product-info">
        <h2 className="product-brand">brand</h2>
        <span className="price">ugshs 52000</span>
        <span className="actual-price">ugshs 65000 </span>
      </div>
    </div>
    <div className="product-card">
      <div className="product-image">
        <img src="../pictures/kid9.jpg" className="product-thumb" alt="" />
      </div>
      <div className="product-info">
        <h2 className="product-brand">brand</h2>
        <span className="price">ugshs 52000</span>
        <span className="actual-price">ugshs 65000 </span>
      </div>
    </div>
  </div>
</div>

         </div> 
         </div>     
                
          
                 
    )
   }

export default Entry