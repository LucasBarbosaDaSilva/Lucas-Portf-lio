import React, { useState } from 'react';
import { Carousel, CarouselItem} from 'react-bootstrap';
import '../components-css/Projects.css';

const images = [
  {
    src: "tela-trybetunes.png",
    alt: "Tela TrybeTunes" ,
    caption: 'TrybeTunes',
    text: 'Project using ReactRouter, language in JavaScript, the project consists of a simulation of a music site, where first you go through a login page with validation, after login the user is directed to the main page, where it is possible to carry out the search by your preferred artist, as well as bookmarking and editing your profile. To see more, visit the links below.',
    link: 'https://trybetunes-project-lucas-barbosa.vercel.app',
    repositor:'https://github.com/LucasBarbosaDaSilva/trybetunes-project'
  },
  {
    src: "tela-trivia.png",
    alt: "Tela Trivia" ,
    caption: 'Trivia Game',
    text: 'Group project, using agile methodologies such as Kanban and Scrum, with the objective of developing a question and answer game based on the Trivia game, working on the global state of the application using React and Redux.. To see more, visit the links below.',
    link: 'https://trivia-project-lucas-barbosa.vercel.app',
    repositor:'https://github.com/LucasBarbosaDaSilva/trivia-project'
  },
  {
    src: "tela-react-test.png",
    alt: "Tela React Test" ,
    caption: 'RTL',
    text: 'Project using the React-Testing-Library, project consists of performing tests in a React application, several tests were carried out, using Mocks with Jest and Mocks of APIs using fetc To see more, visit the link below.',
    link: 'https://github.com/LucasBarbosaDaSilva/react-testing-library-project',
    repositor:'https://github.com/LucasBarbosaDaSilva/react-testing-library-project'
  },
  {
    src: "tryunfo-tela.png",
    alt: "Tela Tryunfo" ,
    caption: 'Tryunfo',
    text: 'Project using React, language in JavaScript, the project consists of a card game, where a form was created to fill in the data of each card, going through the validation process of each item in order to save each card. To see more, visit the links below.',
    link: 'https://tryunfo-project-lucas-barbosa.vercel.app"',
    repositor:'https://github.com/LucasBarbosaDaSilva/tryunfo-project'
  },
  {
    src: "solar-system-tela.png",
    alt: "Tela Solar System" ,
    caption: 'Solar System',
    text: 'First project using React, language in JavaScript, the project shows the planets of the solar system and all dated space missions, through the creation of components. To see more, visit the links below.',
    link: 'https://solar-system-project-lucas-barbosa.vercel.app/',
    repositor:'https://github.com/LucasBarbosaDaSilva/solar-system-project'
  },
];

function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const items = [];

  for (let i = 0; i < images.length; i += 3) {
    const item = (
      <CarouselItem key={i}>
        <div className="row project">
        {images.slice(i, i + 3).map((image, index) => (
  <div className="col-sm-4" key={index}>
    <div className="h-100 d-flex flex-column justify-content-between">
      <div>
        <img src={image.src} alt={image.alt} className="img-projects"/>
        <h2>{image.caption}</h2>
        <p className="text-project text-start">{image.text}</p>
      </div>
      <div className="buton-project text-end">
  <div className="btn-group" role="group">
    <a href={image.link} target="_blank" rel="noreferrer" className="btn btn-primary main-btn-project">
      Website Link
    </a>
    <a href={image.repositor} target="_blank" rel="noreferrer" className="btn btn-secondary main-btn-project">
      Repository
    </a>
  </div>
</div>
    </div>
  </div>
))}
        </div>
      </CarouselItem>
    );
    items.push(item);
  }

  return (
    <div className="container-fluid container">
    <h3 className="main-title-projects" id="projects">Projects</h3>
    <h4 className="about-title">Front-End</h4>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}  prevLabel="" nextLabel="">
        {items}
      </Carousel>
    </div>
  );
}

export default Projects;