import React from 'react';
import '../App.css';


class Home extends React.Component {
  render() {
    return (
      <div className="App ">
        <title>Home </title>
        <meta charset="UTF-8"></meta>

        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
        <link rel="shortcut icon" src={require('../images/favicon.ico')} />
        <link rel="stylesheet" src={require('../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
        <link rel="stylesheet" src={require('../style.css')} type="text/css" media="all" />
        <link rel="stylesheet" src={require('../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />
        <div id="main" class="wrap">
          <section id="slider-home" class="wrap">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="flexslider flexslider-home">
                    <ul class="slides">

                      <div class="row">
                        <div class="col-md-6">
                          <div class="flex-caption">
                            <h1>We care about the children education</h1>
                            <h6>Come all, let's learn about computational thinking and problem solving skills. And the best part? <strong>It’s free!</strong></h6>
                            <a href="/Login" class="btn-white margin-t32">Register or Login here</a>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="flex-img">
                            <img class="img-responsive" src={require('../images/slider/slide-1.png')} alt="" />
                          </div>
                        </div>
                      </div>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="zz-bottom"></div>

          <section class=" margin-t72 wrap">
            <div class="container">
              <div class="row">
                <div class="col-md-4 home-feature">
                  <h5>What is Bebras?</h5>
                  <div class="img-feature"><img class=" homeimg" src={require('../images/bebrassquirrel.jpg')} alt="" /></div>
                  <p>Bebras is an international initiative aiming to promote Informatics (Computer Science, or Computing) and computational thinking among school students at all ages. Participants are usually supervised by teachers who may integrate the Bebras challenge in their teaching activities. The challenge is performed at schools using computers or mobile devices.</p>

                </div>

                <div class="col-md-4 home-feature">
                  <h5>What is Computational Thinking?</h5>
                  <div class="img-feature"><img class=" homeimg" src={require('../images/think.png')} alt="" /></div>
                  <p>Computational thinking involves using a set of problem-solving skills and techniques that software engineers use to write programs and apps. The Bebras challenge promotes problem solving skills and Informatics concepts including the ability to break down complex tasks into simpler components, algorithm design, pattern recognition, pattern generalisation and abstraction. </p>

                </div>

                <div class="col-md-4 home-feature">
                  <h5>Dates</h5>
                  <div class="img-feature"><img class=" homeimg" src={require('../images/calendar.png')} alt="" /></div>
                  <p>The second week of November is declared as World-Wide BEBRAS week for solving tasks. Some countries extended it to two weeks. Many countries run all-year-round Bebras activities like participants awarding events, second round of the challenge, summer campus, teacher workshops, collecting statistics and writing research papers.</p>

                </div>
              </div>
            </div>
          </section>

          <div class="zz-top"></div>

          <section class="wrap margin-t72">

            <div class="bkg-cover  padding-72">
              <div class="container">
                <div class="row">
                  <div class="col-md-4 home-feature">
                    <h5>Participation</h5>
                    <div class="img-feature"><img class=" homeimg" src={require('../images/earth.png')} alt="" /></div>
                    <p>Joining the Bebras initiative for a country consists mainly in two parts: organising the national challenge in the country and participating to the International Task Workshop.</p>

                  </div>

                  <div class="col-md-4 home-feature">
                    <h5>Resources</h5>
                    <div class="img-feature"><img class=" homeimg" src={require('../images/books.png')} alt="" /></div>
                    <p>Previous Bebras tasks you can find in many countries’ websites as the Bebras brochures.
                  
Some previous challenges are available to try without registering or logging in. It depends on language do you know. Examples: Finland, Sweden, UK. </p>

                  </div>

                  <div class="col-md-4 home-feature">
                    <h5>Awards</h5>
                    <div class="img-feature"><img class=" homeimg" src={require('../images/awards.png')} alt="" /></div>
                    <p>We emphasise participation but also recognise top performing students. All countries provides different types of certificates available to students in each age group, for example, Certificate of Participation, Certification of Merit, Certificate of Distinction, and etc.</p>

                  </div>
                </div>
              </div>
            </div>

          </section>
          {/* <div class="zz-bottom"></div>

<section id="home-latest-activity" class="wrap margin-t72">

<div class="container">
//white
</div>

</section> */}

          <div class="zz-top-foo"></div>


        </div></div>
    );
  }


}

export default Home;
