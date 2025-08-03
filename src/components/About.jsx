import {skills} from "../data/skills"
import Skillcard from "./Skillcard"
import {formations} from "../data/formation";
import Formationcard from "./Formationcard";
import { useState } from 'react';


function About() {

  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };
  return (
  <div className="page">
  <section id="about" className="about-section">
  <h1 className="about-title">ABOUT ME</h1>
  <p className="about-description">
    I'm passionate about solving problems through code. I transitioned into web development after working as a program manager and engineer. I'm continuously learning and enjoy building clean, responsive web experiences.
  </p>

  <div className="about-bottom">
    <div className="skills-section">
      <h2>My skills</h2>
      <p>If you want to know what each language or tool is about, you can click on its logo</p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <Skillcard
            key={index}
            title={skill.title}
            image={skill.image}
            description={skill.description}
            onClick={() => openModal(skill)}
          />
        ))}
      </div>
    </div>

    <div className="formation-section">
      <h2>My Education  </h2>
      <div className="formation-list">
        {formations.map((formation, index) => (
          <Formationcard
            key={index}
            title={formation.title}
            institution={formation.institution}
            image={formation.image}
          />
        ))}
      </div>
    </div>
  </div>
</section>
</div>
  )}

export default About;