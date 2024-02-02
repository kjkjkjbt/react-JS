import React, { Component } from 'react';
import CardPerSon from './CardPerson';

export default class DemoProps extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <CardPerSon
              namee={'Tèo'}
              age={90}
              img={'https://i.pravatar.cc?u=20'}
            />
          </div>
          <div className="col-4">
            <CardPerSon
              namee={'Vinh'}
              age={3}
              img={'https://i.pravatar.cc?u=15'}
            />
          </div>
          <div className="col-4">
            <CardPerSon
              namee={'lâm'}
              age={25}
              img={'https://i.pravatar.cc?u=25'}
            />
          </div>
        </div>
      </div>
    );
  }
}

