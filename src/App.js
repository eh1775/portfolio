import React, { Component } from 'react';
import drawing from './drawing.jpg';
import './App.css';

class App extends Component {
    //state goes here
    constructor(props){
      super(props);
  
      this.state = {
          currentButton: "",
          research: "", 
          insights: "",
          isVisible: false, 
          drawingVisible: false
      };
  
    }
  
    //functions go here
    aboutClicked = () => {
      this.setState({
        currentButton: "I am a senior at NYU Shanghai studying Business and Marketing. I have worked on product for Smartbiz Loans and Zipsocket. Interested in DTC Brands, Fintech and Behavioral Economics",
        drawingVisible: false,
        isVisible: false,
        research: "",
        insights: ""
      });
    }

    projectClicked = () =>{
      this.setState ({
        currentButton: 'My project is a model of a standard "Pick Three Lottery". It is desgined as a tool for researchers in behavioral economics and psychology. ',

        research: "I consulted articles on general psychology on casino design including an article from theVerge and an article from the Telegraph. " + 
        "I presented several users a paper drawing of the application and asked them for general feedback on the overall design. " + 
        "I then conducted some basic user testing with several users in order to test for engagement.",

        insights: "Through discussions I learned that decreasing the number of clicks increased engagement. " + 
        "I also found that the design and feeling, particular flashy, bright colors also drove engagement because it felt more fun and engaging for the users. " + 
        "Lastly, I also found that displaying the sequence of the house increased engagement because it encouraged people to get the number sequence the next time they played.",

        drawingVisible: !this.state.drawingVisible,
        isVisible: false
      })
    }

    prototypeClicked = () =>{
      this.setState ({
        isVisible: !this.state.isVisible,
        drawingVisible: false,
        currentButton: "I Implemented a keypad with numbers from 0 to 9. Once the participant selects three numbers and clicks play, the result is displayed with the randomly generated correct sequence, the number of points lost and a statement to get participants to play again",
        research: "",
        insights: "", 
      })
    }


    futureClicked = () =>{
      this.setState ({
        currentButton: "Future improvements include both the user experience/design and gameplay. " + 
        "For the design, it would be great to add sound effects when the user clicks the buttons. It would also improve the experience if there was a bit of animation before the result was showed to build suspense. " + 
        "For the gameplay, in order to drive engagement, it would great to randomize giving participants a small set of points after a random number of plays. " + 
        "In order to for researchers to test this in a larger environment very quickly, I could put this on a blockchain and pay participants small amounst of cryptocurrency. " + 
        "It would also be helfpul to have a function that shows/hides a box that displays a number of points that a player starts with to test for differences in player behavior",
        drawingVisible: false,
        isVisible: false,
        research: "",
        insights: ""
      })
    }
  
    //render returns what appears on page
    render() {
      return (
        <div className="App">
        <h1>Hi! I'm Emily</h1>
          <div className="ButtonRow">
            <button value = {this.state.aboutButton} onClick={this.aboutClicked}>About Me</button>
            <button onClick={this.projectClicked}>Project</button> <br></br>
            <button onClick={this.prototypeClicked}>Prototype</button>
            <button onClick={this.futureClicked}>Future Work</button>

          </div>
          
          <div className="ResultBox">

            <div className = "prototype">
            { this.state.isVisible ? (<iframe src="https://giphy.com/embed/61Z51JR4SNysUVVdKN" width="480" height="252" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>) : null }
            { this.state.isVisible ? (<p><a href= "https://sheltered-retreat-77584.herokuapp.com/">Demo</a></p>) : null }
            </div>

            <p className="result">{this.state.currentButton}</p>

            <div className = "paperDrawing"> 
            { this.state.drawingVisible ? (
                 <img src= {drawing} width="480" height="252"></img>
            ) : null }
            </div>

            <p className="result">{this.state.research}</p>
            <p className="result">{this.state.insights}</p>
            <p className="result">{this.state.demo}</p>

          </div>
  
        </div>
      );
    }
  
} 


export default App;
