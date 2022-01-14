/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {


    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
   constructor() {
       super();
       const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({value:''})
        };

        this.state = {
            filteredData:[]
        }; 

        fetch('http://localhost:3035/searchData', requestOptions)
            .then(response => response.json())
            .then(data=>{
                console.log(data.data);
                this.setState({filteredData: data.data});
        })
        
   }
    filtered = (data) =>{
        console.log(data)
        this.setState({filteredData:data});
    }

    render() {
        return (
            <div className="App">
                <Menu onFiltered = {this.filtered} />
                <Home filteredData={this.state.filteredData} />
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
