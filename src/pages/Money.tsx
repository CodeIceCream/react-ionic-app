import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import ExploreContainer from '../components/ExploreContainer'

const Money: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Money</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Money</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="My Money page" />
      </IonContent>
    </IonPage>
  )
}

export default Money