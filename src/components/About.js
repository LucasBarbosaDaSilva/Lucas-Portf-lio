import React from 'react';
import '../components-css/About.css';

export default function About() {
  return (
    <div className="container-fluid">
      <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-12 row">
            <h3 className="main-title">About Me</h3>
            <div className="col-md-6 img-about">
            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/lucas-perfil.png`} alt="lucas-perfil" />
            </div>
            <div className="col-md-6">
              <h3 className="about-title">Hello Everybody!🖖</h3>
              <p>I'm Lucas Barbosa, Front-End development with knowledge in technologies such as React, RTL testing, React with Redux, ContextAPI and ReactHooks, with experience working in groups with agile methodologies such as Kanban and Scrum. </p>
              <p> Born in Juiz de Fora, a native of Minas Gerais with a carioca influence, doesn't dispense with a good bread cheese and coffee 😋.Passionate about technology since childhood, i believe in teamwork, honest and impacting people's lives in a positive way ✌️. </p>
              <p>A bit nerdy, a bit artist, and now a bit programmer!🫰🚀</p>
              <h4 className="about-title">Some curiosities about me</h4>
              <ul id="about-list">
                <li><i class="bi bi-circle-fill"></i>With absolute certainty my favorite drink is coffee, it's the first thing I do when I wake up ☕</li>
                <li><i class="bi bi-circle-fill"></i>I'm a black belt in Taekwondo, i was a professional athlete and competed in national and international championships 🥋 🏅</li>
                <li><i class="bi bi-circle-fill"></i>One of my hobbies is music, I love listen and do music, and I have authorial work released on digital platforms 🪕</li>
                <li><i class="bi bi-circle-fill"></i>During the faculty of human sciences, my study and research was focused on the Trans and Queer population 🏳️‍🌈</li>
                <li><i class="bi bi-circle-fill"></i>One of my favorite hobbies is watching movies and series, I think I can consider myself a cinephile and my favorite is Lord of the Rings 🎥 🧙</li>
              </ul>

            </div>
          </div>

        </div>

      </div>
      </div>
    </div>
  )
}
