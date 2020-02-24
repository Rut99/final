  import React from 'react';
  import '../App.css';

  class Teacher extends React.Component {
    render(){
    return (
      <div className="App">
        <title>Bebras </title>
        <meta charSet="UTF-8"></meta>

        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css'/>
  <link rel="shortcut icon" src={require('../images/favicon.ico')}/>
  <link rel="stylesheet" src={require('../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
  <link rel="stylesheet" src={require('../style.css')} type="text/css" media="all" />
  <link rel="stylesheet" src={require('../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />
  <div id="main" className="wrap">
  <section className="page-top wrap">

    <h2 className="page-section-title">Meet the Team</h2>

  </section>
  <div className="zz-bottom"></div>

  <section className=" margin-t72 wrap">
  <div className="container">
  <div className="row">
  <div className="col-sm-2"></div> 
  <div className="col-sm-8">
  <ul className="faq-list">
  <li>
  <h5 className="faq-title "><i className="fa fa-question-circle"></i>How do my students participate?</h5>
  <div  className="faq-section">
  <p>You can register as a coordinator once registration link is open. You can enter as many students as you want to and will create a log-in for them. This way, we can collect important data for you and send you an in-depth report on the results. That includes grades, aptitude and certificates. Just follow the Coordinators’ Instructions; they will help you register. 
  </p>
  </div>
  </li>
  <li>
  <h5 className="faq-title"><i className="fa fa-question-circle"></i> What does my school need to conduct this challenge?</h5>
  <div  className="faq-section">
  <p>The only thing your school needs is a connection to the internet and some computers that the students can use to complete the challenge. </p>
  </div>
  </li>
  <li>
  <h5 className="faq-title"><i className="fa fa-question-circle"></i> Who should participate in this challenge?</h5>
  <div className="faq-section">
  <p>It is recommended that all students take the challenge, because one of the objectives of this challenge is to discover aptitude. The small tasks in this challenge start off relatively easy so every student can participate and get something out of it.</p>
  </div>
  </li>
  <li>
  <h5 className="faq-title "><i className="fa fa-question-circle"></i> When will the challenge be held?</h5>
  <div  className="faq-section">
  <p>A practice challenge is available for students so that they know what to expect. The official challenge can be conducted between 18th-30th November 2019</p>
  </div>
  </li>
  </ul>
  </div>
  <div className="col-sm-2"></div> 
  </div>
  </div>
  </section>

  <div className="zz-top"></div>

  <section className="wrap margin-t72 custom-li">
  <div className="bkg-cover  padding-72">
  <div className="container">
  <div className="row">
  <div className="col-sm-2"></div> 
  <div className="col-sm-8">
    <h2>Instructions</h2>
  <ul className="faq-list">
  <li>
  <h5 className="faq-title "><i className="fa fa-plus"></i>  Before the Challenge</h5>
  <div  className="faq-section">
  <ul>
    <li>Each participating student will need a computer connected to the internet.</li>
    <li>If your school has limited lab space, you can run it on multiple days. If you decide to do so, please try to limit the interaction between students who have completed the challenge already and those who still have to complete it.</li>
    <li>A practice challenge is available for your students till October end. They may take the same to familiarize with the tasks and format.
  </li>
  </ul>
  </div>
  </li>
  <li>
  <h5 className="faq-title"><i className="fa fa-plus"></i> Week of the Challenge</h5>
  <div  className="faq-section">
    <ul>
    <li>Make sure everyone understands the format of the challenge. There are 9-15 multiple-choice questions. </li>
    <li>Instruct students to visit the website and follow the directions listed there. You may administer the challenge offline.</li>
    <li>Supervise the challenge. The system will give each student exactly 45 minutes to answer the questions. Teachers can provide scrap paper and pens/pencils to students to assist them in solving the problems.
  </li>
  </ul>
  </div>
  </li>
  <li>
  <h5 className="faq-title"><i className="fa fa-plus"></i> After the Challenge</h5>
  <div className="faq-section">
    <ul>
    <li>Make sure you save the results of every student. That way you can discover aptitude. We will reward the students with a certificate.</li>
    <li>Discuss the solutions with your className. They are available online after participation and give detailed information about the connections to Computer Science.</li>
    </ul>
  </div>
  </li>
  </ul>
  </div>
  <div className="col-sm-2"></div> 
  </div>
  </div>
  </div>

  </section>
  <div className="zz-bottom"></div>

  </div>
  </div>
    );
    }
  }

  export default Teacher;
