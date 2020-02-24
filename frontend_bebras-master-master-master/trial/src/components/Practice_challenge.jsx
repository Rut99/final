import React from 'react';
import '../App.css';
import './PracticeChallenge.css';
class Practice_challenge extends React.Component {
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
        <meta charSet="UTF-8"></meta>


        <div id="main" className="wrap">

          <section className="page-top wrap">

            <h2 className="page-section-title">Try out these practice challenges.</h2>

          </section>
          <div className="zz-bottom"></div>
          <section className=" margin-t72 wrap">
            {/* questionstartshere */}
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  side div
</div>
                <div className="col-md-8">
                  <div className="row">
                    <p>The flowers come in white, yellow or blue.
                      Clara wants a bunch of six flowers. She tells the florist:<br></br>
                      • There must be two of each of the colours yellow, white and blue<br></br>
                      • Flowers of the same type must not have the same colour.<br></br>
                      • There should be no more than two of each type of flower.<br></br>
                      A flower shop sells the following types of flowers: <br></br>
                      <img alt="oops" src={require('../images/PracChallenge/flower.PNG')}></img> Question:
                      Which of the following bunches will Clara be happy with? </p>
                  </div>
                  <div className="row">

                    <div className="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} src={require('../images/PracChallenge/flower1.PNG')}></img></button></div>
                    <div className="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../images/PracChallenge/flower2.PNG')}></img></button></div>
                    <div className="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../images/PracChallenge/flower3.PNG')}></img></button></div>
                    <div className="col-md-3"><button onClick={this.correctoptfun.bind(this)}><img className={this.state.correctopt} alt="oops" src={require('../images/PracChallenge/flower4.PNG')}></img></button></div>

                  </div>
                  <div className="dist"></div>
                  <div className={this.state.answercorrect} style={{ "backgroundColor": "green" }}>
                    <p style={{ "color": "white" }}>Amazing! You got the question right!</p>
                  </div>
                  <div className={this.state.answerwrong} style={{ "backgroundColor": "red" }}>
                    <p style={{ "color": "white" }}>Oops! Better luck next time!</p>
                  </div>
                  <div className="dist"></div>
                </div>
              </div>
            </div>
            {/* questionendsshere */}
            <div className="dist"></div>
            {/* questionstartshere */}
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  side div
</div>
                <div className="col-md-8">
                  <div className="row">
                    <p>Four footprints have been found in the mud.<br></br>
                      The police are looking for a robber who wore shoes with these properties:<br></br>
                      • The soles have a stripy pattern<br></br>
                      • The heel is thin <br></br>
                      Question:
Choose the set of shoe prints that could belong to the robber.</p>
                  </div>
                  <div className="row">

                    {/* <div className="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} src={require('../images/PracChallenge/shoe1.PNG')}></img></button></div>
                    <div className="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../images/PracChallenge/shoe2.PNG')}></img></button></div>
                    <div className="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../images/PracChallenge/shoe3.PNG')}></img></button></div>
                    <div className="col-md-3"><button onClick={this.correctoptfun.bind(this)}><img className={this.state.correctopt} alt="oops" src={require('../images/PracChallenge/shoe4.PNG')}></img></button></div> */}

                  </div>
                  <div className="dist"></div>
                  <div className={this.state.answercorrect} style={{ "backgroundColor": "green" }}>
                    <p style={{ "color": "white" }}>Amazing! You got the question right!</p>
                  </div>
                  <div className={this.state.answerwrong} style={{ "backgroundColor": "red" }}>
                    <p style={{ "color": "white" }}>Oops! Better luck next time!</p>
                  </div>
                  <div className="dist"></div>
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

export default Practice_challenge;
