import React from 'react';
//import '../App.css';
import './PracticeChallenge.css';
class Practice_challenge6 extends React.Component {
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
                    <p>Daniel is sending text messages from his old phone.<br></br> For every letter he has to press the proper key once, twice, three or four times, followed by a short pause. In order to type 'C' he has to press the number 2 key three times because 'C' is the third letter written on this key.<br></br> In order to type 'HIM' he has to press the number 4 key twice, followed by the number 4 key 3 times and ﬁnally the number 6 key once.<br></br> Daniel presses exactly six times to enter the name of a friend.
 </p>
                  </div>
                  <div class="row">
                  <img style={{"margin-left":"30%"}} src={require('../../images/PracChallenge/txtmsg.PNG')}></img>
                  </div>
                  <br></br>
                  <div class="row">

                  <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7 >Miriam </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7>Iris </h7></button></div>
                    <div class="col-md-3"><button className={this.state.wrongopt} onClick={this.wrongoptfun.bind(this)}><h7>Emma </h7></button></div>
                    <div class="col-md-3"><button className={this.state.correctopt} onClick={this.correctoptfun.bind(this)}><h7>Ina </h7></button></div>

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

export default Practice_challenge6;
