import React from 'react';
import { Carousel } from 'react-bootstrap';
import pc1Image from '../components-css/image/code-pc.jpg';
import pc2Image from '../components-css/image/pc-2.jpg';
import pc3Image from '../components-css/image/pc-3.jpg';
import '../components-css/Car.css';

export default function Corrousel() {
  const images = [
    {
      src: pc2Image,
      title : 'See my Portfolio',
      description: 'Check out my portfolio by clicking the link below to see all of my past projects and the main technologies I use in my work.Feel free to reach out if you have any questions or if you are interested in working together. Thank you for your interest!',
      button: 'View Portfolio',
      id:'#projects'
    },
    {
      src: pc1Image,
      title: 'About Me',
      description: "I am a Full-Stack Developer with experience in Node.Js, JavaScript, React and other related technologies. I have experience working in groups with agile methodologies such as Kanban and Scrum. I am passionate about technology and making a positive impact on people's lives. To learn more, click on the link below.",
      button: 'About',
      id:'#about-area'
    },
    {
      src: pc3Image,
      title: 'Do you wish to get a quote?',
      description: "Are you interested in getting a budget estimate? Don't hesitate to reach out to us for a no-obligation quote. We would be happy to discuss your needs and provide you with an accurate and competitive price. Feel free to contact us anytime.",
      button: 'Contact us',
      id:'#contact'
    }
  ];
    
     

  return (
    <main>
    <Carousel>
      {images.map(image => (
        <Carousel.Item key={image.src}>
          <img
            className="d-block w-100 carousel-img col-sm-12 col-md-6"
            src={image.src}
            alt={image.title}
            id="home"
          />
          <Carousel.Caption className="text-center">
            <h2 className="title-carousel">{image.title}</h2>
            <p>{image.description}</p>
            <div className="btn-cel">

            <a href={image.id} className="main-btn">{image.button}</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </main>
  );
   
  
  
}
