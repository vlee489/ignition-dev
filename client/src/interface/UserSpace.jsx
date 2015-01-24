/**
 * @jsx React.DOM
 */

'use strict';

var React               = require('react/addons')
,   _                   = require('lodash')
,   Avatar              = require('./Avatar.jsx')
,   api                 = require('socket.io-client')('/api')
,   mixins              = require('./mixins/mixins.jsx')
,   Timer               = require('./Timer.jsx');

/* Components
-------------------------------------------------- */
module.exports = React.createClass({

    mixins: [mixins.listener],

    getInitialState: function() {
        return {
            session: {
                Username: "Guest"
            }
        }
    },

    componentDidMount: function() {
        api.emit('request', { request: 'getSession'} );
    },

    getDefaultProps: function() {
        return {

            id: "userspace"

        }
    },

    render: function() {

        return (

            <div id={this.props.id} className="parent">
                <div clasName="user-space-left container">

                    <Avatar Username={this.state.session.Username} />

                    <div className="badge-player-number">1</div>

                    <div className="clearfix"></div>

                    <hr />


                        <div className="user-space-player">

                            <div className="col-xs-10 text-left">
                                {this.state.session.Username}
                            </div>

                            <div className="col-xs-2">
                                <i className="ion-android-microphone-off"></i>
                            </div>

                        </div>

                        <div className="clearfix"></div>

                        <hr />

                        <div className="gold-trophy-block col-xs-3">
                            <i className="ion-trophy"></i>
                        </div>

                        <div className="col-xs-9 achievement-count">
                            3/21
                        </div>

                </div>

            </div>

        )
    }
});
