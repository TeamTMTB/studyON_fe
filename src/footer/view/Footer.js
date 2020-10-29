import React, { Component } from "react";
import "../scss/Footer.scss";

import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

class Footer extends Component {
  render() {
    return (
      <>
        <div class="footer">
          <div class="footer-content">
            <div class="footer-section about">
              <h2 class="logo-text">
                <span>study</span>ON
              </h2>
              <h3>About US</h3>
              <p>
                We want to help bring talented students and <br />
                unique startups together.
              </p>
              <div class="content">
                <span>
                  <CallIcon /> &nbsp; 123-123-1234
                </span>
                <span>
                  <EmailIcon />
                  &nbsp; tmtb@studyon.com
                </span>
              </div>
              <div class="socials">
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <YouTubeIcon />
                </a>
                <a href="https://github.com/TeamTMTB">
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <div class="footer-section2 links">
              <h3>Informations</h3>
              <br />
              <ul>
                <a href="#">
                  <li>About US</li>
                </a>
                <a href="#">
                  <li>More Search</li>
                </a>
                <a href="#">
                  <li>Blog</li>
                </a>
                <a href="#">
                  <li>Testmonials</li>
                </a>
                <a href="#">
                  <li>Events</li>
                </a>
              </ul>
            </div>
            <div class="footer-section3 links">
              <h3>Helpful Links</h3>
              <br />
              <ul>
                <a href="#">
                  <li>Services</li>
                </a>
                <a href="#">
                  <li>Supports</li>
                </a>
                <a href="#">
                  <li>Terms & Condition</li>
                </a>
                <a href="#">
                  <li>Privacy Policy</li>
                </a>
              </ul>
            </div>
            <div class="footer-section3 contact-form">
              <h3>Contact us</h3>
              <br />
              <form action="#" method="post">
                <input
                  type="email"
                  name="email"
                  class="text-input contact-input"
                  placeholder="Your Email Address"
                />
                <textarea
                  name="message"
                  class="text-input contact-input"
                  placeholder="Messages..."
                />
                <Button
                  variant="contained"
                  size="small"
                  style={{
                    background: "#ff8080",
                    color: "white",
                    float: "right",
                    right: "5rem",
                  }}
                >
                  <SendIcon />
                  Send
                </Button>
                {/* <button type="submit" class="btn btn-big contact-btn">
                  Send
                </button> */}
              </form>
            </div>
          </div>
          <div class="footer-bottom">Copyright © Designed by Team TMTB </div>
        </div>
      </>
    );
  }
}

export default Footer;
