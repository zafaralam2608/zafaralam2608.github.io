import React from "react";
import about from "../data/about";

export default function Skills() {
  const skillsMap = about.skills.icons.map(function (skills, i) {
    return (
      <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{fontSize: "220%"}}>
                  <p
                    className="text-center"
                    style={{fontSize: "30%", marginTop: "4px"}}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
      </li>
    );
  });

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{about.basicInfo.sectionName.skills}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skillsMap}</ul>
        </div>
      </div>
    </section>
  );
}
