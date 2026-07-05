import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import PageTitle from '../components/PageTitle';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Experience.css';


function Experience() {
  const { t } = useLanguage();
  return (
    <PageTransition>
    <div className='experience'>
      <PageTitle title={t('page.experience')} />
      <h2 className='experience-section-title'>{t('experience.title')}</h2>
      <VerticalTimeline lineColor='#3e497a'> 
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date={t('experience.currently')}  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <SchoolIcon aria-hidden="true" />}
        > 
          <h3 className='vertical-timeline-element-title'>
            {t('experience.univLille')}
          </h3>
          <p>{t('experience.univLille.desc')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date={t('experience.date2024')}  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <SchoolIcon aria-hidden="true" />}
        > 
          <h3 className='vertical-timeline-element-title'>
            {t('experience.univBejaiaM')}
          </h3>
          <p>{t('experience.univBejaiaM.desc')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date={t('experience.date2022')}  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <SchoolIcon aria-hidden="true" />}
        > 
          <h3 className='vertical-timeline-element-title'>
            {t('experience.univBejaiaC')}
          </h3>
          <p>{t('experience.univBejaiaC.desc')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date={t('experience.date2019')}  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <SchoolIcon aria-hidden="true" />}
        > 
          <h3 className='vertical-timeline-element-title'>
            {t('experience.highschool')}
          </h3>
          <p>{t('experience.highschool.desc')}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </PageTransition>
  )
}

export default Experience

