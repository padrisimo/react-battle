var React = require('react');
var queryString = require('query-string'); 

class Results extends React.Component {
    componentWillMount() {
        var players = queryString.parse(this.props.location.search) 
        api.battle([
            players.playerOneName,
            palyers.playerTwoName
        ]).then(function () {
            
        })
    }
    render(){
        
        return(
            <div>Results</div>
        )
    }
}