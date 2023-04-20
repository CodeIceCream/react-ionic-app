import { IonTemplate } from 'component/IonTemplate';
import { useTranslation } from 'react-i18next';
import ContributionCard from '../component/ContributionCard';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonTemplate title={t('home.title')}>
      <ContributionCard />
    </IonTemplate>
  );
};

export default Home;
