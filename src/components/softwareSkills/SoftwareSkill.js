import React from "react";
import "./SoftwareSkill.css";
import { skillsCategories } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      {Object.entries(skillsCategories).map(([category, skills]) => (
        <div key={category}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <ul className="dev-icons">
            {skills.map((skill) => (
              <li key={skill.name} className="software-skill-inline" name={skill.name}>
                <span
                  className="iconify"
                  data-icon={skill.iconClass}
                  style={{ color: skill.color|| "inherit" }}
                  data-inline="false"
                ></span>
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
