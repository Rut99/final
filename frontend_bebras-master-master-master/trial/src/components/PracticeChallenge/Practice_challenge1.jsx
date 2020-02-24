import React from 'react';
//import '../App.css';
import './PracticeChallenge.css';
class Practice_challenge1 extends React.Component {
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
        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
          <link rel="shortcut icon" src={require('../../images/favicon.ico')} />
          <link rel="stylesheet" src={require('../../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
          <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
          <link rel="stylesheet" src={require('../../style.css')} type="text/css" media="all" />
          <link rel="stylesheet" src={require('../../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />

        <div id="main" class="wrap">

          <section class="page-top wrap">

            <h2 class="page-section-title">Try out these practice challenges.</h2>

          </section>
          <div class="zz-bottom"></div>
          <section class=" margin-t72 wrap">
            {/* questionstartshere */}
            <div class="container">
              <div class="row">
              {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 15 }}> */}
  

                <div class="col-md-2">
                  <ul><li><a href=""></a></li></ul>
</div>
                <div class="col-md-8">
                  <div class="row">
                    <p>The flowers come in white, yellow or blue.
Clara wants a bunch of six flowers. She tells the florist:<br></br>
                      • There must be two of each of the colours yellow, white and blue<br></br>
                      • Flowers of the same type must not have the same colour.<br></br>
                      • There should be no more than two of each type of flower.<br></br>
                      A flower shop sells the following types of flowers: <br></br>
                      <img alt="oops" src={require('../../images/PracChallenge/flower.PNG')}></img> Question:
Which of the following bunches will Clara be happy with? </p>
                  </div>
                  <div class="row">

                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} src={require('../../images/PracChallenge/flower1.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../../images/PracChallenge/flower2.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.wrongoptfun.bind(this)}><img className={this.state.wrongopt} alt="oops" src={require('../../images/PracChallenge/flower3.PNG')}></img></button></div>
                    <div class="col-md-3"><button onClick={this.correctoptfun.bind(this)}><img className={this.state.correctopt} alt="oops" src={require('../../images/PracChallenge/flower4.PNG')}></img></button></div>

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
            {/* </div> */}
          </section>
        
        </div>
      </div>
    );
  }
}

export default Practice_challenge1;
