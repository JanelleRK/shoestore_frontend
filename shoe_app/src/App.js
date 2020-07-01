import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shoe: [],
    };
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/Shoe/')
    .then(res => res.json())
    .then(data => this.setState({shoe: data}))
  }
  render() {
    return (
        <div >
          <h1>My shoestore</h1>
          <ul>
            {this.state.shoe.map((p) => {
              return (
              <p>
                <li>Size: {p.size}</li>
                <li>Brand: {p.brand_name}</li>
                <li>Manufacturer: {p.manufacturer}</li> 
                <li>Color: {p.color}</li> 
                <li>Material: {p.material}</li> 
                <li>Shoe Type: {p.shoe_type}</li>
                <li>Fasten Type: {p.fasten_type}</li>
              </p>
              )
            })}
          </ul>
      </div>
    );
  } 
}

export default App;
