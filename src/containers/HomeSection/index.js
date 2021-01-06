import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

function HomeSection() {
  return (
    <div>
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
    </div>
  );
}

export default HomeSection;
