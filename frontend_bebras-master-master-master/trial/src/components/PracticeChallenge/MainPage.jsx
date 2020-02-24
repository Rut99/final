import React from 'react';
//import '../App.css';
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctopt: '',
      wrongopt: '',
      answercorrect: 'hidden',
      answerwrong: 'hidden'
    }


  }

  render() {

    return (
      <div className="P">
        <title>Bebras </title>
        <meta charset="UTF-8"></meta>


        <div id="main" class="wrap">

          <section class="page-top wrap">

            <h2 class="page-section-title" >Try out these practice challenges.</h2>

          </section>
          <div class="zz-bottom"></div>
          <section class=" margin-t72 wrap">
              <div>
              <a style={{fontSize:25}} href="/Page">To try practice challenge click here!</a>

              </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
          </section>
        </div>
      </div>
    );
  }
}

export default MainPage;
