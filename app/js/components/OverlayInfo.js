'use strict';

import React              from 'react';

class OverlayInfo extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div ref="overlay-content" className="overlay-content info-content content-width">
        <h3 className="overlay-heading animate-this">ABOUT</h3>
        <div className="overlay-body animate-this">
          <p className="overlay-body-text">New York based Designer/Developer with experience in buzz words (something something). Currently available for Freelance Projects.</p>
        </div>
        <h3 className="overlay-heading animate-this">EXPERIENCE</h3>
        <div className="overlay-body is-flex animate-this">
          <div className="overlay-column">
            <div className="column-element google">
              <h4 className="el-heading">Google Inc.</h4>
              <p className="overlay-body-text">
                2014 - 2016<br/>
                Position: Creative Technologist
              </p>
            </div>
            <div className="column-element lbi">
              <h4 className="el-heading">Digitas LBI</h4>
              <p className="overlay-body-text">
                2010 - 2011<br />
                Position: Front End Developer
              </p>
            </div>
          </div>
          <div className="overlay-column">
            <div className="column-element mlbam">
              <h4 className="el-heading">MLB Advanced Media</h4>
              <p className="overlay-body-text">
                2011 - 2012<br />
                Position: Front End Developer - Mobile
              </p>
            </div>
            <div className="column-element warehouse">
              <h4 className="el-heading">Warehouse Agency</h4>
              <p className="overlay-body-text">
                2009 - 2010<br />
                Position: Flash Developer
              </p>
            </div>
          </div>
        </div>
        <h3 className="overlay-heading animate-this">CONTACT</h3>
        <div className="overlay-body animate-this">
          <p className="overlay-body-text"><a target="_blank" href="">Twitter</a> / <a target="_blank" href="">Github</a> / <a target="_blank" href="">LinkedIn</a></p>
          <p className="overlay-body-text">info@keiyasui.com</p>
        </div>
      </div>
    );
  }

}

export default OverlayInfo;