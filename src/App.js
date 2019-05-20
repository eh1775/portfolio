import React, { Component } from 'react';
import drawing from './drawing.jpg';
import './App.css';

class App extends Component {
    //state goes here
    constructor(props){
      super(props);
  
      this.state = {
          currentButton: "",
          isVisible: false, 
          drawingVisible: false
      };
  
    }
  
    //functions go here
    aboutClicked = () => {
      this.setState({
        currentButton: "I am a senior at NYU Shanghai studying Business and Marketing. Interested in DTC Brands, Fintech and Behavioral Economics",
        drawingVisible: false,
        isVisible: false
      });
    }

    projectClicked = () =>{
      this.setState ({
        currentButton: 'My project is a model standard "Pick Three Lottery". It is desgined as a tool for researchers in behavioral economics and psychology on studying addiction. ' + 
        "I conducted several user tests with individuals to understand their general experience using the App. " +
        "After making adjustments based on this feedback I presented a paper drawing of the App. " +
        "Through discussions I learned from users which features would drive continually engagement. " + 
        "I also consulted articles on general psychology casino design including an article from theVerge and an article from the Telegraph",
        drawingVisible: !this.state.drawingVisible,
        isVisible: false
      })
    }

    prototypeClicked = () =>{
      this.setState ({
        isVisible: !this.state.isVisible,
        drawingVisible: false,
        currentButton: "Implemented is a keypad with numbers from 0 to 9. Once the participant selects three numbers and clicks play, the result is displayed with the randomly generated correct sequence, the number of points lost and a statement to get participants to play again",
      })
    }


    futureClicked = () =>{
      this.setState ({
        currentButton: "Future improvements include both the user experience/design, gameplay. " + 
        "For the design, it would be great to add sound effects when the user clicks the buttons. It would also improve the experience if there was a bit of animation before the result was showed to build suspense " + 
        "For the gameplay, in order to drive engagement, it would great to randomize giving participants a small set of points after a random number of plays. " + 
        "In order to for researchers this in a larger environment very quickly, I could put this on a blockchain and pay participants small amounst of cryptocurrency. " + 
        "It would also be helfpul to have a function that shows/hides a box that displays a number of points that a player starts with the test for differences in player behavior",
        drawingVisible: false,
        isVisible: false
      })
    }
  
    //render returns what appears on page
    render() {
      return (
        <div className="App">
        <h1>Hi! I'm Emily</h1>
          <div className="ButtonRow">
            <button value = {this.state.aboutButton} onClick={this.aboutClicked}>About Me</button>
            <button onClick={this.projectClicked}>Project</button>
            <button onClick={this.prototypeClicked}>Prototype</button>
            <button onClick={this.futureClicked}>Future Work</button>

          </div>
          
          <div className="ResultBox">
            <p>{this.state.aboutButton}</p>
            { this.state.isVisible ? (
                 <iframe src="https://giphy.com/embed/61Z51JR4SNysUVVdKN" width="480" height="252" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            ) : null }
            <p className="result">{this.state.currentButton}</p>
            { this.state.drawingVisible ? (
                 <img src= {drawing} width="480" height="252"></img>
            ) : null }
          </div>
  
        </div>
      );
    }
  
} 


export default App;
