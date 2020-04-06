import React from "react"
import Link from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skill from "../components/Skill"
import Wedge from "../components/Wedge"
import Card from "../components/Card"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

import $ from 'jquery';

import './index.css'
import 'bulma/css/bulma.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>

    <div>
      <div className="Hero">
          <div className="HeroGroup">
            <h1>I'm a full-stack developer.</h1>
            <p>I enjoy making things that make an impact.</p>
            <Link to="/#my-work" className="button show-projects">
              View my work<FontAwesomeIcon className="project-arrow" icon={faArrowRight} />
            </Link>
          </div>
      </div>

      <section className="About has-text-centered" id="my-work">
        <div className="sectionHeader animated slide-in-left">
          <h2>About</h2>
        </div>
        <div className="sectionText animated fade-in-up">
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              <p>I've always had a passion for learning new things.  I hold over a decade of diverse development experience in front-end, back-end and iOS applications.  With a background in business and a career in technology, I get excited about all aspects of product development from strategy and concepting to design and development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Projects">
        <div className="Cards">
          <div className="sectionHeader animated slide-in-right">
            <h2>Projects</h2>
          </div>
          <div className="CardGroup">
            <Card 
              title="SmartDash"
              caption="Smart kan-ban task system."
              link="https://github.com/andrewsteinmeyer/SmartDash"
              text="Javascript"
              image={require('../images/mountains.png')} />
            <Card 
              title="ePortal"
              caption="Think Periscope meets QVC."
              link="https://github.com/andrewsteinmeyer/Portal_Swift"
              text="Swift"
              image={require('../images/iOS.png')} />
            <Card 
              title="ShortList"
              caption="Put your invites on autopilot."
              link="https://github.com/andrewsteinmeyer/ShortList_Swift"
              text="Swift"
              image={require('../images/lines.png')} />
          </div>
        </div>
      </section>

      <section className="Skills has-text-centered">
        <div className="sectionHeader animated slide-in-left">
          <h2>Skills</h2>
        </div>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <div className="columns">
                <div className="skill-group column">
                  <p className="skill-title animated slide-in-left">Front-End</p>
                  <div className="bar-container center animated slide-in-left">
                    <div className="header-bar"></div>
                  </div>
                  <div className="columns front-end">
                    <div className="column has-text-centered">
                      <Skill
                        title="HTML5"
                        image={require('../images/html5.png')} />
                    </div>
                    <div className="column has-text-centered">
                      <Skill
                        title="CSS3"
                        image={require('../images/css3.png')} />
                    </div>
                    <div className="column has-text-centered">
                      <Skill
                        title="React"
                        image={require('../images/react.png')} />
                    </div>
                    <div className="column has-text-centered">
                      <Skill
                        title="Javascript"
                        image={require('../images/javascript.png')} />
                    </div>
                    <div className="column has-text-centered">
                      <Skill
                        title="JQuery"
                        image={require('../images/jquery.png')} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="skill-group-backend column">
                  <p className="skill-title animated slide-in-left">Back-End</p>
                  <div className="bar-container center animated slide-in-left">
                    <div className="header-bar"></div>
                  </div>
                  <div className="columns back-end">
                    <div className="column has-text-centered">
                      <Skill
                        title="Node"
                        image={require('../images/nodejs.png')} />
                    </div>
                    <div className="column has-text-centered">
                      <Skill
                        title="Rails"
                        image={require('../images/rails.png')} />
                    </div>
                    <div className="column has-text-centered">
                      <Skill
                        title="Perl"
                        image={require('../images/perl.png')} />
                    </div>
                    <div className="column has-text-centered">
                      <Skill
                        title="Postgres"
                        image={require('../images/postgresql.png')} />
                    </div>
                    <div className="column has-text-centered">
                      <Skill
                        title="MongoDB"
                        image={require('../images/mongodb.png')} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="skill-group-mobile column">
                  <p className="skill-title animated slide-in-left">Mobile</p>
                  <div className="bar-container center animated slide-in-left">
                    <div className="header-bar"></div>
                  </div>
                  <div className="columns mobile">
                    <div className="column has-text-centered">
                      <Skill
                        title="Swift"
                        image={require('../images/swift.png')} />
                    </div>
                    <div className="column has-text-centered">
                      <Skill
                        title="Objective-C"
                        image={require('../images/objective-c.png')} />
                    </div>
                    <div className="column has-text-centered">
                      <Skill
                        title="Fastlane"
                        image={require('../images/fastlane.png')} />
                    </div>
                  </div>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </section>

      <section className="Contact has-text-centered">
        <Wedge />
        <div className="sectionHeader animated slide-in-left">
          <h2>Contact</h2>
        </div>
        <div className="contactArea">
          <div className="columns is-centered">
            <div className="column is-two-fifths contact-column animated fade-in-up">
              <form method="post" className="contact-form" name="contact-submit" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="contact-submit" value="contact-submit" />
                <input placeholder="Name" type="text" name="name" required></input>
                <input placeholder="Enter email" type="email" name="contact-email" required></input>
                <textarea placeholder="Your Message" type="text" name="message" required></textarea>
                <input className="button submit-form is-pulled-right" type="submit" id="submit" value="SUBMIT"></input>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="Footer has-text-centered">
        <div className="columns is-centered">
          <div className="column is-one-third">
            <a className="social-icons button" href="https://www.linkedin.com/in/andrewsteinmeyer" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} color="white" />
            </a>
            <a className="social-icons button" href="https://github.com/andrewsteinmeyer" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithubAlt} color="white" />
            </a>
            <a className="social-icons button" href="mailto:jandrewsteinmeyer@gmail.com" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} color="white"/>
            </a>
            <p>ANDREW STEINMEYER © 2020</p>
          </div>
        </div>
      </section>

    </div>

  </Layout>
)

if (typeof document !== `undefined`) {
  //Jquery to attach animations on scroll
  $(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
      $('.slide-in-left').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('fadeInLeft');
        }
      });

      $('.slide-in-right').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('fadeInRight');
        }
      });

      $('.fade-in-up').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('fadeInUp');
        }
      });
    });
  });
}

export default IndexPage
