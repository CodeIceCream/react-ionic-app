import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import Download from '../component/DownLoad';

const Toolkit: React.FC = () => {
  const { t } = useTranslation()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("toolkit.title")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t("toolkit.title")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Download />
      </IonContent>
    </IonPage >
  );
};

export default Toolkit;
