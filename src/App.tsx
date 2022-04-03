import React from 'react';
import Card from './Card/card';
import './App.css';

function App() {
  return (
    <>
    <header>
      <span>
        Reliable, efficient delivery
      </span>
      <h2>
        <strong>Powered by Technology</strong>
      </h2>
      <p>
        Our Artificial Intelligence powered tools use millions of project data points 
        to ensure that your project is successful
      </p> 
    </header>

    <div className="card-container">
      <Card
        feature="Supervisor"
        description='Monitors activity to identify project roadblocks'
        image='icon-supervisor.svg'
        className='card supervisor-card'
      />

      <div className="card-container-centered">
        <Card
          feature="Team Builder"
          description='Scans our talent network to create the optimal team for your project'
          image='icon-team-builder.svg'
          className='card team-builder-card'
        />

        <Card
          feature="Karma"
          description='Regularly evaluates our talent to ensure quality'
          image='icon-karma.svg'
          className='card karma-card'
        />
      </div>

      <Card
        feature="Calculator"
        description='Uses data from past projects to provide better delivery estimates'
        image='icon-calculator.svg'
        className='card calculator-card'
      />
    </div>
    
    <footer>
      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/fermidrates">Farand Albert S</a>.
      </p>
    </footer>
    </>
  );
}

export default App;
