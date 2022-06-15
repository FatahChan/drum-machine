import React from "react";
import DrumPadComponent from "./DrumPad.Component";

export default class DrumPadsComponent extends React.Component{
    render() {
        const drum_pads = this.props.notes.map((note) =>(
            <>
                <DrumPadComponent key={note.id} play={this.props.play} keyCode={note.keyCode} keyTrigger={note.keyTrigger} id={note.id} url={note.url}/>
            </>
                )
        )
        return(
            <div id="drum-pads">
                {drum_pads}
            </div>
        )
    }
}