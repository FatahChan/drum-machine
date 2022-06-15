import React from "react";
export default class DrumPadComponent extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.play(this.props.keyTrigger);
    }
    render() {
        return(
            <div className="drum-pad btn btn-primary" onClick={this.handleClick} id={this.props.id}>
                <audio id={this.props.keyTrigger} className="clip" src={this.props.url}/>
                {this.props.keyTrigger}
            </div>
        )
    }
}