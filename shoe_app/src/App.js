import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shoe: []
    };
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/shoe/')
    .then(res => res.json())
    .then(data => this.setState({shoe: data}))
  }
  render() {
    return (
        <div >
          <ul>
            {this.state.shoe.map(p => {
              return (
              <li key={p.id}>
                Size: {p.size} 
                Brand: {p.brand_name}
                Manufacturer: {p.manufacturer} 
                Color: {p.color} 
                Material: {p.material} 
                Shoe Type: {p.shoe_type}
                Fasten Type: {p.fasten_type}
              </li>)
            })}
            </ul>
      </div>
    );
  } 
}

export default App;
