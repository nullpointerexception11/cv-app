import React from "react";
import SectionTitle from "../section-title/section-title";
import ExperienceBox from "./experience-box";
import TimelineBadge from "./timeline-badge";

const Experience = () => {
  return (
    <section id="experience" className="secPad">
      <div className="container">
        <SectionTitle
          title="Professional Experience"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />

        <div id="timeline">
          <div className="row timeline-movement timeline-movement-top">
            <div className="timeline-badge timeline-future-movement">
              <a href="#">
                <span className="glyphicon glyphicon-plus"></span>
              </a>
            </div>
            <div className="timeline-badge timeline-filter-movement">
              <a href="#">
                <span className="glyphicon glyphicon-time"></span>
              </a>
            </div>
          </div>
          <div className="row timeline-movement">
            <TimelineBadge month="Feb" year="2014" />

            <ExperienceBox
              title="Mussum ipsum cacilds"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="18/02/2014"
              eDate="Present"
              position="left"
            />

            <ExperienceBox
              title="Mussum ipsum cacilds"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate=" 10/03/2013"
              eDate="18/02/2014"
              position="right"
            />

            
          </div>

          <div className="row timeline-movement">
            <TimelineBadge month="Mar" year="2013" />


            <ExperienceBox
              title="Mussum ipsum cacilds"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate=" 10/03/2013"
              eDate="18/02/2014"
              position="left"
              alone={true}
            />

            <ExperienceBox
              title="Mussum ipsum cacilds"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="18/02/2014"
              eDate="Present"
              position="right"
            />

          </div>
          <div className="row timeline-movement">
            <TimelineBadge month="Jan" year="2010" />

            <ExperienceBox
              title="Mussum ipsum cacilds"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="11/01/2010"
              eDate="10/03/2013"
              position="left"
            />
            <ExperienceBox
              title="Mussum ipsum cacilds"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit."
              sDate="11/01/2010"
              eDate="10/03/2013"
              position="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
