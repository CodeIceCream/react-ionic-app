import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import ContributionCard from '../component/ContributionCard';

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('home.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('home.title')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ContributionCard />
      </IonContent>
    </IonPage>
  );
};

export default Home;
