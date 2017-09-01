import React from 'react';
import { Navbar,  NavbarBrand } from 'reactstrap';
import font from '../assets/font';

export default class NavB extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light style={{ backgroundColor: '#cdc', padding: 0, margins: 0, fontFamily: font, color: '#000', textShadow: '2px 2px #fff'}}>
          <NavbarBrand href='/' className='active'>Home</NavbarBrand>
          <NavbarBrand href="/characters" className='active'>Characters</NavbarBrand>
          <NavbarBrand href="/scenarios" className='active'>Scenarios</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
