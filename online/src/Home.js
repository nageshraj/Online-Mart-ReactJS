import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='Home'>
            <div className="Home__container">
                <img className="Home__image" src = "" alt="" />
            

            <div className="Home__row">
                <Product
                id='01'
                title="White Chocolate Bark" 
                price={250} 
                image='https://static.onecms.io/wp-content/uploads/sites/19/2015/09/30/cranberry-pistachio-white-chocolate-bark-sea-salt-cl.jpg' 
                rating={5}
                 />

                <Product 
                id='02'
                title="Dark Chocolate Bark" 
                price={250} 
                image='https://cookieandkate.com/images/2018/12/easy-chocolate-bark-recipe-2.jpg' 
                rating={5}
                 />
                
                
            </div>

            <div className="Home__row">
                <Product 
                id='03'
                title="Oreo Chocolate Bark" 
                price={330} 
                image='https://www.bakersroyale.com/wp-content/uploads/2011/09/Cookies-and-Cream-Oreo-Bark_Bakers-Royale.jpg' 
                rating={5}
                 />

                <Product 
                id='04'
                title="Marble Chocolate Bark" 
                price={330} 
                image='https://www.cravingsofalunatic.com/wp-content/uploads/2014/10/Peanut-Butter-and-Chocolate-Bark-51.jpg' 
                rating={5}
                 />

                <Product 
                id='05'
                title="Dry Fruit Chocolate Bark" 
                price={360} 
                image='https://data.thefeedfeed.com/recommended/15227671285ac3951854c24.jpg' 
                rating={5}
                 />
                
                
            </div>

            <div className="Home__row">
            <Product title="CranberryChocolate Bark" 
                price={400} 
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhtErtxGHOO8mfDufw2vtRa-x3fKqAzyh4w&usqp=CAU' 
                rating={5}
            />
            
            </div>
           </div> 
        </div>
    )
}

export default Home
