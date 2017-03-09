/**
 * Created by jane on 09/03/2017.
 */
import React from 'react';
var Greeting = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  getDefaultProps: function() {
    console.log('##########')
    return {
      name: 'Mary'
    };
  },

  render: function () {
      return <div>{this.props.name}</div>
  }
});
export default Greeting