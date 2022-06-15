import React from "react";
import DisplayComponent from "./Compoment/Display.Component";
import DrumPadsComponent from "./Compoment/DrumPads.Component";
import noteBank from './Data/noteBank.js'

export default class App extends React.Component{
  constructor(props) {
      super(props);
      this.play = this.play.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);

  }
  componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
  }
  play(keyTrigger){
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
  }
  handleKeyPress(event) {
    const trigger = noteBank.filter(element => element.keyCode === event.keyCode);
    if(trigger.length > 0){
      console.log(trigger[0].keyTrigger);
      this.play(trigger[0].keyTrigger.toString());
    }
  }

  render() {
    return (
        <div className="App">
          <div id="drum-machine">
            <DisplayComponent />
            <DrumPadsComponent play={this.play} notes={noteBank}/>
          </div>
        </div>
    );
  }


}
