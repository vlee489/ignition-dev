/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons')
,   _               = require('lodash')
,   WizardHeader    = require('./WizardHeader.jsx');

module.exports = React.createClass({

    getDefaultProps: function() {

    },

    render: function() {

        return (
      
            <div className="container parent" id="welcome">

                <WizardHeader title="Welcome" icon="ion-game-controller-a" subtitle="Controlling the Inteface" active="0" steps="4" />

                <button className="navable btn btn-block btn-lg btn-alt">CONTINUE</button>

            </div>

        );
    }
});