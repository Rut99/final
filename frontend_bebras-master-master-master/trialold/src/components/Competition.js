import React from 'react';
import '../App.css';

class Competition extends React.Component {
  render() {
    return (
      <div className="App">
        <title>Bebras </title>
        <meta charset="UTF-8"></meta>

        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
        <link rel="shortcut icon" src={require('../images/favicon.ico')} />
        <link rel="stylesheet" src={require('../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
        <link rel="stylesheet" src={require('../style.css')} type="text/css" media="all" />
        <link rel="stylesheet" src={require('../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />
        <div id="main" class="wrap">
          <section class="page-top wrap">

            <h2 class="page-section-title">Enter the Competition</h2>

          </section>
          <div class="zz-bottom"></div>




        </div>
      </div>
    );
  }
}

export default Competition;
