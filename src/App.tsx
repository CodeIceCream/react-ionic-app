import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, medkitOutline, personOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import My from './pages/My';
import Property from './pages/Property';
import Toolkit from './pages/Toolkit';

setupIonicReact();

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/toolkit">
              <Toolkit />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/my" component={My} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/my/money" component={Property} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>{t('tabBar.home')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="toolkit" href="/toolkit">
              <IonIcon icon={medkitOutline} />
              <IonLabel>{t('tabBar.toolkit')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="my" href="/my">
              <IonIcon icon={personOutline} />
              <IonLabel>{t('tabBar.my')}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
