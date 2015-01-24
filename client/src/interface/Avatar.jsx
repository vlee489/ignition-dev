/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons')
,   NetworkStatus   = require('./NetworkStatus.jsx')
,   api             = require('socket.io-client')('/api')
,   _               = require('lodash')
,   throttled;

module.exports = React.createClass({

    getInitialState: function() {

        return {
            session: [],
            profile: {
                IP: null,
                Online: false,
                Avatar: <i className='ion-person'></i>
            }

        }
    },

    getDefaultProps: function() {

        return {
            Username: "Guest"
        }

    },

    componentDidMount: function() {

        this.updateAvatar();

        var _this = this;

        api.on('api', function(data) {
            if (data.session) {
                _this.setState(data);

            }
        });

    },

    componentWillReceiveProps: function(props) {

        this.updateAvatar();

    },

    updateAvatar: function() {

        var _this = this;

        if (_this.props.Username) {


            if (_this.props.Username != "Guest") {


            api.emit('request', { request: 'getProfile', param: _this.props.Username});

            api.on('network-api', function(obj) {

                if (!_.isEmpty(obj.userProfile)) {

                    if (obj.userProfile[0].Username == _this.props.Username) {

                        _this.setState({profile: obj.userProfile[0]});

                    }
                }

            });
}
    }
    },

    render: function() {

        var Avatar;

        Avatar = true;

        if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(this.state.session.Avatar)) {
            Avatar = true
        }

        else {
            Avatar = false;
        }

        var cx = React.addons.classSet;
        var classes = cx({
            'avatared': Avatar,
            'square': true,
            'pull-left': true
        });


        return (


            <div className={classes}>
                {Avatar ? <img src={this.state.session.Avatar} className='img-responsive' /> : <i className='ion-person'></i>}
            </div>
        );
    }
});
