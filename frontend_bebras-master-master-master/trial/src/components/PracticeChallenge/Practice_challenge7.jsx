import React from 'react';
//import '../App.css';
import './PracticeChallenge.css';
class Practice_challenge7 extends React.Component {
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
                    <p>A number is represented on a Chinese abacus by the position of its beads.<br></br> The value of a bead on the top part is 5; the value of a bead on the bottom part is 1. <br></br>The abacus is reset to zero by pushing the beads away from the centre. <br></br>To represent the number 1 746 503 the appropriate beads are moved towards the centre of the abacus:
<br></br>What number does the following abacus represent? </p>
                  </div>
                  <div class="row">
                  <img style={{"margin-left":"30%"}} src={require('../../images/PracChallenge/abacus.PNG')}></img>
                  </div>
                  <br></br>
                  <div class="row">

                  <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7 >8014732 </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7>8013331 </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7>2014331 </h7></button></div>
                    <div class="col-md-3"><button className={this.state.correctopt} onClick={this.correctoptfun.bind(this)}><h7>7014831 </h7></button></div>

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

export default Practice_challenge7;
