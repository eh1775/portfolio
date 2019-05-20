import React, {Component} from 'react';

class Navigation extends Component {

    render() {
        return (
            <div className="button">

                <button name="About Me" onClick={e => this.props.onClick(e.target.name)}>About Me</button>
                <button name="Project" onClick={e => this.props.onClick(e.target.name)}>Project</button>
                <button name="Research" onClick={e => this.props.onClick(e.target.name)}>Research</button>
                <button name="Prototype" onClick={e => this.props.onClick(e.target.name)}>Prototype</button>
                <button name="Future Work" onClick={e => this.props.onClick(e.target.name)}>Future Work</button>

            </div>
        );
    }
}


export default Navigation;