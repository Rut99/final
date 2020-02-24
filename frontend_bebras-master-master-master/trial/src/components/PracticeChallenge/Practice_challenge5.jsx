import React from 'react';
//import '../App.css';
import './PracticeChallenge.css';
class Practice_challenge5 extends React.Component {
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
                    <p>A beaver wants to buy a bird house for her daughter’s birthday. Her daughter says:<br></br> "I would like a bird house with 2 windows and a heart".
<br></br>

                      Question: Which bird house should her Mum buy?
 </p>
                  </div>
                  <div class="row">

                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} src={require('../../images/PracChallenge/house1.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../../images/PracChallenge/house2.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.correctoptfun.bind(this)}><img className={this.state.correctopt} alt="oops" src={require('../../images/PracChallenge/house3.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../../images/PracChallenge/house4.PNG')}></img></button></div>

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

export default Practice_challenge5;
