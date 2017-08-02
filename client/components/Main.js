import React from 'react';
import { Link } from 'react-router';

 const Main = React.createClass({
    render() {
        return (
            <div>
                <Link className="a-tag" to="/">
                    <h1 className="title-red">
                        <div className="rr animated bounceInDown upcase">r</div>
                        <div className="re animated bounceInDown">e</div>
                        <div className="rd animated bounceInDown">d</div>
                        <div className="ru animated bounceInDown">u</div>
                        <div className="rx animated bounceInDown">x</div>
                        <div className="rs animated bounceInDown">s</div>
                        <div className="rt animated bounceInDown">t</div>
                        <div className="ra animated bounceInDown">a</div>
                        <div className="rg animated bounceInDown">g</div>
                        <div className="rr animated bounceInDown">r</div>
                        <div className="ra animated bounceInDown">a</div>
                        <div className="rm animated bounceInDown">m</div>
                    </h1>
                </Link>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;
