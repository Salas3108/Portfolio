import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';


function Experience() {
  return (
    <div className='experience'>
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
        date='currenly'  
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