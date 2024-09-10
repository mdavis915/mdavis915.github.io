import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const gradientIcon1 = {
  background: 'linear-gradient(90deg, hsla(210, 90%, 80%, 1) 0%, hsla(212, 93%, 49%, 1) 100%)',
  color: '#fff',
};

const gradientIcon2 = {
  background: 'linear-gradient(90deg, hsla(280, 84%, 41%, 1) 0%, hsla(218, 97%, 56%, 1) 100%)',
  color: '#fff',
};


// Styles for light and dark mode
const timelineStyles = `
  .vertical-timeline::before {
    background-color: black; /* Black bar for light mode */
  }

  .dark .vertical-timeline::before {
    background-color: white; /* White bar for dark mode */
  }

  .timeline-date {
    color: black; /* Black text for light mode */
  }

  .dark .timeline-date {
    color: black !important; /* White text for dark mode */
  }

  /* Hover effect for timeline events */
  .vertical-timeline-element-content {
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .vertical-timeline-element-content:hover {
    transform: translateY(-5px);
    background-color: #f0f0f0;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  }

  .dark .vertical-timeline-element-content:hover {
    background-color: #333333;
    box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.1);
  }
`;

const Experience = () => {
  return (
    <div id="experience" className="relative dark:bg-darkTheme pt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Experience</h4>
      <h2 className="text-center text-5xl font-Ovo">Professional Journey</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Dive into my professional experience, from internships to leadership roles, showcasing my growth in the tech industry.
      </p>
      {/* Injecting styles for light and dark mode */}
      <style>
        {timelineStyles}
      </style>

      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2021 - December 2021"
          iconStyle={gradientIcon2}
          contentStyle={{ background: 'white', border: '2px solid black', textAlign: 'left' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
        >
          <div className="text-left text-black">
            <h3 className="vertical-timeline-element-title text-black dark:text-black">Research Assistant</h3>
            <p className="text-black dark:text-black">
              Collaborated on research project investigating the effectiveness of convolutional neural networks in aesthetic photo ranking.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2023 - May 2027"
          iconStyle={gradientIcon1}
          contentStyle={{ background: 'white', border: '2px solid black', textAlign: 'left' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
        >
          <div className="text-left text-black">
            <h3 className="vertical-timeline-element-title text-black dark:text-black">Started at University of Florida</h3>
            <p className="text-black dark:text-black">
              Majoring in Computer Science and minoring in Economics. Expected graduation of May 2027.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2023 - April 2024"
          iconStyle={gradientIcon2}
          contentStyle={{ background: 'white', border: '2px solid black', textAlign: 'left' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
        >
          <div className="text-left text-black">
            <h3 className="vertical-timeline-element-title text-black dark:text-black">WiCSE Outreach Committee Member</h3>
            <p className="text-black dark:text-black">
              Worked alongside other committee members to plan and organize outreach events such as volunteering at food banks and hosting a codeathon event for kids.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2024 - Present"
          iconStyle={gradientIcon1}
          contentStyle={{ background: 'white', border: '2px solid black', textAlign: 'left' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
        >
          <div className="text-left text-black">
            <h3 className="vertical-timeline-element-title text-black dark:text-black">Center of Undergraduate Research Ambassador</h3>
            <p className="text-black dark:text-black">
              Represent CUR as a member of the Workshops committee, hosting informational sessions regarding research and coordinating logistics of workshops by collaborating with commitee members.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2024 - Present"
          iconStyle={gradientIcon2}
          contentStyle={{ background: 'white', border: '2px solid black', textAlign: 'left' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
        >
          <div className="text-left text-black">
            <h3 className="vertical-timeline-element-title text-black dark:text-black">Co-Director of Events for CS Kickstart</h3>
            <p className="text-black dark:text-black">
              Organize and manage engaging events for CS Kickstart, helping students feel comfortable with their peers and introducing them to computer science concepts.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2024 - August 2024"
          iconStyle={gradientIcon1}
          contentStyle={{ background: 'white', border: '2px solid black', textAlign: 'left' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
        >
          <div className="text-left text-black">
            <h3 className="vertical-timeline-element-title text-black dark:text-black">Software Engineer Intern at Arystech</h3>
            <p className="text-black dark:text-black">
              Worked at Arystech building serverless cloud applications using AWS services such as Lambda, DynamoDB, S3, and API Gateway.
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
