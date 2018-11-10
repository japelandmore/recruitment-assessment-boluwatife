import React, { Component } from 'react';
// import './Profileicon.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import bolu from "./bolu.png";

import menu from "../../images/menu.svg";

export default class Icon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return <div>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={this.state.dropdownOpen} >
                <div>
                  <img src={menu} alt="" className="hover-btn" />
                </div>
              </DropdownToggle>
              <DropdownMenu className="move-right" >
                <DropdownItem>
                  View details
                </DropdownItem>
                <DropdownItem>
                  Star
                </DropdownItem>
                <DropdownItem>
                    Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>;
    }
}
