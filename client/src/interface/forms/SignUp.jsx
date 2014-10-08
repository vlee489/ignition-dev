/**
 * @jsx React.DOM
 */

var React = require('react/addons'), 
    api = require('socket.io-client')('/api');


module.exports = React.createClass({

    getDefaultProps: function() {

    return {
            navable: true,
            navStack: 2
        }
    },

    render: function() {

        return (

            <div>
                <div className="container-fluid">
                    <div className="row-fluid">
                        <div className="col-xs-12">
                                    
                            <h2><span className='col-xs-11'>Create a new profile</span><span className='col-xs-1'><i className='ion-person-add'></i> </span></h2>
                            
                            <div className='clearfix'></div>
                            
                            <hr />
                            

                            <form accept-charset="UTF-8" role="form">
                            <fieldset>
                                
                                <div className="form-group">
                                
                                    <input className="form-control" placeholder="Choose Username" name="username" type="text" />
                                    <input className="form-control" placeholder="E-mail Address" name="email" type="text" />
                                
                                </div>
                                
                                <div className="form-group">
                                    
                                    <input className="form-control" placeholder="Password" name="password" type="password" />
                                    <input className="form-control" placeholder="Password" name="password2" type="password"  />
                               
                                </div>
                           
                                <input className="btn btn-lg btn-success btn-block navable" type="submit" value="Create new Profile" />
                            </fieldset>
                            </form>
                              
                        </div>
                    </div>
                </div>
            </div>              
         
        );
    }
});



