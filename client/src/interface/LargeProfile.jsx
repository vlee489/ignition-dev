/**
 * @jsx React.DOM
 */

/* TODO: Get event listener to update state correctly on newly stored games.
-------------------------------------------------- */

'use strict';

var React = require('react/addons'),
    api = require('socket.io-client')('/api'),
    _ = require('lodash'),
    SaveStates = require('./SaveStates.jsx'),
    AchievementList = require('./AchievementList.jsx');

module.exports = React.createClass({

  getInitialState: function() {
          return {
            "title": "The Legend of Zelda",            
            "boxart": "https://s3.amazonaws.com/data.archive.vg/images/games/5379/wk866gfk32dkbw0f6x27_original.png",
            "genre": "Action > Adventure",
            "playtime": "1:12:02",
            "saves": [{}],
            "achievements": [{}]
        };
    },

    componentDidMount: function () {

     },

    
    render: function() {

        var saveNodes = this.state.savestates.map(function (state, i) {
            return <SaveStates filename={state} image={platform.short} emulators={platform.emulators} navStack={i+1} />
        });

        var achievementNodes = this.state.savestates.map(function (achievement, i) {
            return <AchievementList filename={state} image={platform.short} emulators={platform.emulators} navStack={i+1} />
        });
        return (

        <div id="Profile" className="hidden">
    
        <div className="container-fluid">
         
         <header>
            <div className="navable col-md-2 boxed pull-left" data-nav='1'>
               <i className="icon ion-ios7-arrow-thin-left"></i> &nbsp; Game Listing
            </div>
         
            <span className='pull-right col-md-2'>
            <i className='icon ion-minus-round start'></i>  START &nbsp; <span className='mute'>: &nbsp; PLAY</span>
            </span>
         </header>
         
         <div className="clearfix"></div>

         <br /><br />

         <div className="col-md-2" id="profile-boxart">  
            <img src={this.state.boxart} className="img-responsive" />
            <ul id="profile-sub-buttons" className="hidden">
               <li><button className='btn btn-purple'><i className='fa fa-video-camera '></i> &nbsp; Live Stream</button></li>
            </ul>
         </div>
      
         <div className="col-md-4" id="profile-gameinfo">
            <h2 id="profile-gametitle">{this.state.title}</h2>
            <span className='muted'>{this.state.genre}</span>
            <br />
            <div className="timer">Time Played: {this.state.playtime}</div>
            <br />
            <a id="play-game" className='btn-alt btn-lg navable selectedNav' data-nav='2' data-function="launchGame" data-parameters="">Play Game</a>
            &nbsp; 
            <a className='btn-alt btn-lg navable' data-nav='3'>Multiplayer</a>
         </div>
        
        <saveNodes />

        <div className="col-md-9 profile-section">
        <h1>Achievements <span className="achievement-stats">1 out of 10 Accomplished.</span></h1>
        <ul id="achievements">

            <achievementNodes />
    
        </ul>
        </div>
           
         <div className="col-md-10 profile-section hidden">
            <h1>Screenshots</h1>
            
         </div>
       
         <div className="col-md-10 profile-section hidden">
            <h1>Description</h1>
            <br />
            <p>He's Back! And this time the evil Dr. Wily (once the supreme power in the universe) has created even more sinister robots to mount his attack. But as MegaMan, you've also grown in power and ability. Can you save mankind from the evil desires of Dr. Wily? Each of the eight empires is ruled by a different super-robot. You must defeat each enemy on his own turf, building up weapons as you go. Only after all are destroyed will you go head-on with the mastermind himself, the evil Dr. Wily. </p>
         </div>
        
         <div className="col-md-10 profile-section hidden">
            <h1>Movies</h1>
           
         </div>
      
      </div>
   </div>

        )
    }
});