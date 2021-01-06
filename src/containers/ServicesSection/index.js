import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

function ServicesSection() {
  return (
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
    </div>
  );
}

export default ServicesSection;
