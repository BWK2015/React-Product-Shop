var React = require('react');
var NavItem = require('./navItem.jsx');

var NavBar = React.createClass({
    render: function(){
        var NavStyle = {
            WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            BoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            borderRadius: 0
        };
        if(this.props.bgColor){
            NavStyle.background = this.props.bgColor
        };
        var navItems = this.props.navData.map(function(item, index){
            return <NavItem key={item.title + index} title={item.title} href={item.href} />
        });
        return (
            <div>
                <nav style={NavStyle} className="navbar navbar-default">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse" >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Product Shop</a>
                    </div>
                    <div className="collapse navbar-collapse" id="nav-collapse">
                        <ul className="nav navbar-nav">
                            {navItems}
                        </ul>
                    </div>
                </nav>
            </div>
            )
    }
});

module.exports = NavBar;