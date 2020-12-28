import React from "react";
import "./assets/styles/global.css";
import styled from "styled-components";

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
      {/* início do container SectionHome */}
      <section id="Section-home">
        <h1 id="title-section">Cleaning House</h1>
        <p id="paragraph">
          We are professional home and office cleaners and offer a variaety of
          cleaning services.
        </p>

        <div id="formula">
          <form id="form" action="/action_page.php">
            <label for="fname"></label>
            <input type="text" id="fname" name="firstname" placeholder="name" />

            <label for="phone"></label>
            <input type="tel" id="phone" name="phone" placeholder="phone." />

            <input id="submit" type="submit" value="Make a booking " />
          </form>
        </div>
      </section>
      {/* fim do container SectionHome */}

      {/* 
        -> muita tag de "serviço". variar mais os nomes, pra tag ser mais descritiva.
        -> usar só um idiona pra ids e classes
      */}
      <div id="servicos">
        <h2 id="servicos-title">SERVICES</h2>

        {/* início do container Services */}
        <div id="serv">
          <div id="servicos-1">
            {/* pq não usar classes em servicos 1, 2, 3? */}
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

          <div id="servicos-2">
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

          <div id="servicos-3">
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
          <button id="button">Book your cleaning</button>
        </div>
        {/* fim do container Services */}

        {/* início do container Testimonials */}
        <div id="test">
          <h2>TESTIMONIALS</h2>

          <div id="testimonal">
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
        {/* início do container Testimonials */}

        {/* início do container Testimonials.
        nomear como "Portfolio" */}
        <div id="services">
          <h2>PORTFOLIO</h2>

          <div id="container"> {/* usar id mais descritiva */}
            <div id="pic-container">
              <div id="division-1">
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1557310717-d6bea9f36682?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llc3xlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </a>
              </div>
              <div id="division">
                <img
                  src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
            <div id="pic-container">
              <div id="division-1">
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </a>
              </div>
              <div id="division">
                <img
                  src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
            <div id="pic-container">
              <div id="division-1">
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </a>
              </div>

              <div id="division">
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
