var React =require('react');

var NavItem = React.createClass({
    getInitialState: function(){
        return {
            hover: false   
        }
    },
    mouseOver: function(){
        this.setState(function(prevState, props){
            return {
                hover: true   
            }
        })
    },
    mouseOut: function(){
        this.setState(function(prevState, props){
            return {
                hover: false   
            }
        })  
    },
    render: function(){
        return (
            <li className={this.state.hover ? "active":""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} >
                <a href={this.props.href}>{this.props.title}</a>
            </li>
            )
    }
});

module.exports = NavItem;