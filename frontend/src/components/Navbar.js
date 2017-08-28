import React from 'react';
import { Navbar,  NavbarBrand } from 'reactstrap';

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
        <Navbar light style={{ backgroundColor: '#cdc'}}>
          <NavbarBrand href='/'>Home</NavbarBrand>
          <NavbarBrand href="/characters">Characters</NavbarBrand>
          <NavbarBrand href="/scenarios">Scenarios</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
