import React, { Component } from 'react';
import './Container.css';

export class Container extends Component {
  render() {
    return (
      <div className="container clearfix">
        {this.props.children}
      </div>
    );
  }
}
