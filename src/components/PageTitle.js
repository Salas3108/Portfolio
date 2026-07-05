import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

function PageTitle({ title }) {
  const { lang } = useLanguage();
  return (
    <Helmet>
      <title>{title} — Salas Merzouk</title>
      <html lang={lang} />
    </Helmet>
  );
}

export default PageTitle;
