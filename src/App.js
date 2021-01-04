import React from "react";
import "./assets/styles/global.css";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div>
      <nav id="navbar">
        <h1>Logo</h1>
        <ul>
          <li>
            <a href="#">HOME </a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#"> TESTIMONIALS </a>
          </li>
        </ul>
      </nav>

      <section id="Section-home">
        <h1 id="title-home">Cleaning House</h1>
        <p id="paragraph">
          We are professional home and office cleaners and offer a variaety of
          cleaning services.
        </p>

        <div id="form-container">
          <form id="form-home" action="/action_page.php">
            <label>Name</label>
            <input type="text" id="fname" name="firstname" placeholder="name" />

            <label>Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="phone." />

            <input id="submit-home" type="submit" value="Make a booking " />
          </form>
        </div>
      </section>

      <div id="aboutUs">
        <h3 id="aboutUs-Title">ABOUT US</h3>
        <div id="aboutUs-belt">
          <div id="aboutUs-container">
            <img
              id="AboutUs-image"
              src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
            <p id="aboutUs-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              esse incidunt! Reprehenderit quasi impedit sint cupiditate quas
              accusamus sunt dignissimos quod error consequatur unde ex dolor
              dolores optio vero, blanditiis maiores, nobis, autem aut odit
              praesentium temporibus? Dolorem necessitatibus hic fugit, sit
              omnis dicta, maiores dolore nobis odio veniam earum at aperiam
              molestias maxime ducimus ea vero magni. Aspernatur quam commodi
              aliquam ipsam est veritatis veniam, earum aperiam consectetur
              aliquid!
            </p>
          </div>
        </div>
      </div>

      <div id="services">
        <h2 id="services-title">SERVICES</h2>

        <div id="serv-geral">
          <div id="Service-box" class="services-1">
            <img
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>Office cleaning</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              accusantium debitis doloribus, repellendus quas ut.
            </p>
          </div>

          <div id="Service-box" class="services-2">
            <img
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>Home cleaning</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              accusantium debitis doloribus, repellendus quas ut.
            </p>
          </div>

          <div id="Service-box" class="services-3">
            <img
              src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWV8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>Flat cleaning</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              accusantium debitis doloribus, repellendus quas ut.
            </p>
          </div>

          <div id="Service-box" class="services-4">
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xlYW5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>Flat cleaning</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              accusantium debitis doloribus, repellendus quas ut.
            </p>
          </div>

          <div id="Service-box" class="services-5">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h4>Flat cleaning</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              accusantium debitis doloribus, repellendus quas ut.
            </p>
          </div>

          <button id="button">Book your cleaning</button>
        </div>

        <div id="testimonials">
          <h2>TESTIMONIALS</h2>

          <div id="testimonals-box">
            <div id="test-box-1">
              <h3>Joao</h3>
              <p>
                <b>Toronto - Canada</b>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur quidem, quasi optio eveniet, dolores inventore
                veritatis ex ut ipsum quae aliquid incidunt cumque distinctio?
                Unde?
              </p>
            </div>

            <div id="test-box-2">
              <h3>Joao</h3>
              <p>
                <b>Toronto - Canada</b>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur quidem, quasi optio eveniet, dolores inventore
                veritatis ex ut ipsum quae aliquid incidunt cumque distinctio?
                Unde?
              </p>
            </div>

            <div id="test-box-3">
              <h3>Joao</h3>
              <p>
                <b>Toronto - Canada</b>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur quidem, quasi optio eveniet, dolores inventore
                veritatis ex ut ipsum quae aliquid incidunt cumque distinctio?
                Unde?
              </p>
            </div>
          </div>
        </div>

        <div id="portifolio">
          <h2>PORTFOLIO</h2>

          <div id="container-portifolio">
            <div id="pic-container">
              <div id="pic-before">
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1557310717-d6bea9f36682?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llc3xlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </a>
              </div>
              <div id="pic-after">
                <img
                  src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>

            <div id="pic-container">
              <div id="pic-before">
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </a>
              </div>
              <div id="pic-after">
                <img
                  src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
            <div id="pic-container">
              <div id="pic-before">
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </a>
              </div>

              <div id="pic-after">
                <img
                  src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <h3>Pay us a Visit</h3>

        <p>Design by Caroline Marçal, Victor Tarroni and Christhopher P.</p>
      </footer>
    </div>
  );
}

export default App;
