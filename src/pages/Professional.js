import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import PageTitle from '../components/PageTitle';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Experience.css';


function Professional() {
  const { t } = useLanguage();
  return (
    <PageTransition>
    <div className='experience'>
      <PageTitle title={t('page.career')} />
      <h2 className='experience-section-title'>{t('professional.title')}</h2>
      <VerticalTimeline lineColor='#3e497a'> 
        <VerticalTimelineElement className='vertical-timeline-element--work'
        date={t('professional.date1')}  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <WorkIcon aria-hidden="true" />}
        > 
          <h3 className='vertical-timeline-element-title'>
            {t('professional.axa.name')}
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>{t('professional.axa.role')}</h4>
          <p>{t('professional.axa.desc')}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work'
        date={t('professional.date2')}  
        iconStyle={ {background : "#3e497a" , color : "#fff"}} 
        icon = { <WorkIcon aria-hidden="true" />}
        > 
          <h3 className='vertical-timeline-element-title'>
            {t('professional.ctib.name')}
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>{t('professional.ctib.role')}</h4>
          <p>{t('professional.ctib.desc')}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </PageTransition>
  )
}

export default Professional
