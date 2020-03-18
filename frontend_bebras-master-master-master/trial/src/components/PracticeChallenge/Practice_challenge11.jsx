import React from 'react';
//import '../App.css';
import './PracticeChallenge.css';
class Practice_challenge11 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctopt: '',
      wrongopt: '',
      answercorrect: 'hidden',
      answerwrong: 'hidden'
    }


  }
  correctoptfun() {
    //alert('hi')
    var cs = (this.state.answercorrect === "hidden") ? "show" : "hidden";
    this.setState({ "answercorrect": cs });
    var cs = (this.state.answerwrong === "hidden") ? "hidden" : "hidden";
    this.setState({ "answerwrong": cs });
    var css = (this.state.correctopt === "") ? "correctoption" : "";
    this.setState({ "correctopt": css });
  }
  wrongoptfun() {
    //alert('hi')
    var cs = (this.state.answerwrong === "hidden") ? "show" : "hidden";
    this.setState({ "answerwrong": cs });
    var cs = (this.state.answercorrect === "hidden") ? "hidden" : "hidden";
    this.setState({ "answercorrect": cs });
    var css = (this.state.wrongopt === "") ? "wrongoption" : "";
    this.setState({ "wrongopt": css });
    var css1 = (this.state.correctopt === "") ? "correctoption" : "correctoption";
    this.setState({ "correctopt": css1 });
  }

  render() {


    return (
      <div className="P">
        <title>Bebras </title>
        <meta charset="UTF-8"></meta>


        <div id="main" class="wrap">

          <section class="page-top wrap">

            <h2 class="page-section-title">Try out these practice challenges.</h2>

          </section>
          <div class="zz-bottom"></div>
          <section class=" margin-t72 wrap">
            {/* questionstartshere */}
            <div class="container">
              <div class="row">
                <div class="col-md-2">
                  {/* side div */}
</div>
                <div class="col-md-8">
                  <div class="row">
                    <p>Agents Boris and Bertha communicate using secret messages. Boris wants to send Bertha the secret message:<br></br> MEETBILLYBEAVERAT6 <br></br>He writes each character in a 4 column grid from left to right and row by row starting from the top. He puts an X in any unused spaces. The result is shown below.<br></br>
                      </p>
                  </div>
                  <div class="row">
                  <img style={{"margin-left":"30%"}} src={require('../../images/PracChallenge/cryptography.PNG')}></img>
                  </div>
                  <div class="row">
                      <p>Then he creates the secret message by reading the characters from top to bottom and column by column starting from the left: <br></br>	MBYVTEIBE6ELERXTLAAX <br></br>Bertha then uses the same method to reply to Boris. The secret message she sends him is: <br></br>	OIERKLTEILH!WBEX<br></br>
                      Question:<br></br> What message does Bertha send back? </p>
                  </div>
                  <br></br>
                <div className="row">
                <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7 >OKIWILLMEETHIM! </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7>OKWHERETOMEET!   </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7>WILLYOUBETHERETOO?   </h7></button></div>
                    <div class="col-md-3"><button className={this.state.correctopt} onClick={this.correctoptfun.bind(this)}><h7>OKIWILLBETHERE! </h7></button></div>

                  </div>
                  <div class="dist"></div>
                  <div className={this.state.answercorrect} style={{ "backgroundColor": "green" }}>
                    <p style={{ "color": "white" }}>Amazing! You got the question right!</p>
                  </div>
                  <div className={this.state.answerwrong} style={{ "backgroundColor": "red" }}>
                    <p style={{ "color": "white" }}>Oops! Better luck next time!</p>
                  </div>
                  <div class="dist"></div>
                </div>
              </div>
            </div>
            {/* questionendsshere */}
          </section>

        </div>
      </div>
    );
  }
}

export default Practice_challenge11;
