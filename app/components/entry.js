var React = require('react');
var ReactDom = require('react-dom');

require('!style!css!less!../../less/main.less')
// require('../../less/main.less');

var App = React.createClass({
    getInitialState: function(){
        return {data: []};
    },

    componentDidMount: function(){
        console.log(fetch);
        var _this = this;
        setInterval(function(){
            var result = fetch('http://localhost:3000/signout/1');
            result.then(function(response){
                return response.json();
            }).then(function(res){
                _this.setState({data:res});
                console.log(res);
            }).catch(function(ex){
                console.log("failed", ex);
            })
        },3000);
    },

    render: function(){
        return (
            <div>
                <h1>{this.state.data.student}</h1>
                <h2>{this.state.data.pick_up}</h2>
                <h3>{this.state.data.pick_time}</h3>
                <div className="hide">
                    <embed height="100" width="100" src="media/song.mp3" />
                </div>
            </div>
        );
    }
})

ReactDom.render(
    <App/>,
    document.getElementById('react-root')
);
