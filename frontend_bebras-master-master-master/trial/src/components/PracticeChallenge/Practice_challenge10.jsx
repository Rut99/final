import React from 'react';
//import '../App.css';
import './PracticeChallenge.css';
class Practice_challenge10 extends React.Component {
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
                    <p>You are playing a game of tic-tac-toe with your friend. First your friend has to place an 'O', then you place your 'X'. You continue taking turns in this way. The player who places their three marks in a horizontal, vertical or diagonal line wins.<br></br> It is your turn to put an 'X' in the grid below: 
Which postion will you choose on the grid to place your 'X’ so that you have the best chance of winning. </p>
                  </div>
                  <div class="row">
                  <img style={{"margin-left":"30%"}} src={require('../../images/PracChallenge/XO.PNG')}></img>
                  </div>
                  <br></br>
                <div className="row">
                <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7 >4 </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7>1  </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7>3  </h7></button></div>
                    <div class="col-md-3"><button className={this.state.correctopt} onClick={this.correctoptfun.bind(this)}><h7>2 </h7></button></div>

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

export default Practice_challenge10;
