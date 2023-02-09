import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Download from '../component/DownLoad';

const Tab2: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Download />
      </IonContent>
    </IonPage >
  );
};

export default Tab2;
