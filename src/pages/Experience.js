import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Experience.css';


function Experience() {
  return (
    <div className='experience'>
      <h2 className='experience-section-title'>Professional Experience</h2>
      <VerticalTimeline lineColor='#3e497a'> 
        <VerticalTimelineElement className='vertical-timeline-element--work'
        date='2024 - 2025'  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <WorkIcon />}
        > 
          <h3 className='vertical-timeline-element-title'>
            AXA France
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Full Stack Developer Internship</h4>
          <p>Developed and maintained web applications using modern tech stack. Collaborated with cross-functional teams to deliver high-quality software solutions. Gained hands-on experience in agile development and enterprise-level application architecture.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work'
        date='2023 - 2024'  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <WorkIcon />}
        > 
          <h3 className='vertical-timeline-element-title'>
            CTIB (Centre Technique de l&apos;Industrie Belge)
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Software Development Internship</h4>
          <p>Participated in the design and implementation of backend services. Worked with databases and API development. Contributed to technical documentation and knowledge transfer within the development team.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h2 className='experience-section-title'>Education</h2>
      <VerticalTimeline lineColor='#3e497a'> 
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2019'  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <SchoolIcon />}
        > 
          <h3 className='vertical-timeline-element-title'>
            Chouhada Chickoune high school -Bejaia- Algeria
          </h3>
          <p> Baccaloreat in Mathematics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2022'  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <SchoolIcon />}
        > 
          <h3 className='vertical-timeline-element-title'>
            Abderrahmane Mira University of Bejaia - Algeria
          </h3>
          <p> College degree in Information Systems </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2024'  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <SchoolIcon />}
        > 
          <h3 className='vertical-timeline-element-title'>
            Abderrahmane Mira University of Bejaia - Algeria
          </h3>
          <p> Masters degree in Advanced Information Systems</p>

        </VerticalTimelineElement><VerticalTimelineElement className='vertical-timeline-element--education'
        date='Currently'  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <SchoolIcon />}
        > 
          <h3 className='vertical-timeline-element-title'>
            University of Lille - France
          </h3>
          <p> Preparing a Masters degree in Computer Science Project Engineering, Emerging Technologies (MIAGE)</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
