import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="pt-5 pb-4" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <ul class="social-pet mt-4">
                <li>
                  <a href="https://github.com/KartalEren" title="github">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/eren-kartal-38424b271/"
                    title="linkedin"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 ">
                <div class="text-center text-white">
                  &copy; 2023 Recipe Platform. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
