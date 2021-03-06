/**
* @jsx React.DOM
*/

var React = require('react/addons');

module.exports = React.createClass({

    getDefaultProps: function() {

        return {
            selected: false,
            name: false,
            label: null,
            id: null,
            group: null,
            row: false,
            classes: "navable-row navable label label-lg"
        };
    },


    render: function() {

        return (

            <div>

                <span id={this.props.id} data-name={this.props.name} className={JSON.parse(this.props.selected) ? this.props.classes + " label-selected" : this.props.classes + " label-unselected"} data-function="radioBox" data-parameters={this.props.id} data-group={this.props.group}>{this.props.label}</span>

            </div>

        );
    }
});
