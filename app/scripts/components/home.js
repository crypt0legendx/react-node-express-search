/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
   constructor(props){
       super(props);
       console.log(this.props.filteredData);
   }
   
    render() {
        
        return (
            <section id="home">
                <div className="content" style={{paddingTop:'40px'}}>
                    {
                        this.props.filteredData.map((d,i)=>{
                            return (
                                <div className='shop-item' key={i}>
                                    <div className='item-header'>
                                        <div className='header-section'>
                                        <div className='item-name'>{d.name}</div>
                                        <div className='item-rate'></div>
                                        </div>
                                        <div className='header-section'>
                                        <div className='item-about'>{d.tags.toString()}</div>
                                        <div className='item-favor'></div>
                                        </div>
                                    </div>
                                    <div className='item-body'>
                                        <img src={d.picture} />
                                        <button className='item-preview-action'>PREVIEW</button>
                                    </div>
                                    <div className='item-footer'>
                                        <div className='item-price'>
                                            ${d.price}
                                        </div>
                                        <button className='shop-action'>SHOP</button>
                                    </div>
                                    
                                </div>                                
                            )
                        })
                    }
                </div>
            </section>
        );
    }


}

// Export out the React Component
module.exports = Home;