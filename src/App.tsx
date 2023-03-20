import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import My from './pages/My';
import Toolkit from './pages/Toolkit';

import { useTranslation } from 'react-i18next';
import './App.css';
import Money from './pages/Property';

setupIonicReact();

const App: React.FC = () => {
  const { t } = useTranslation()

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
            <Route exact path='/my/money' component={Money} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={square} />
              <IonLabel>{t('tabBar.home')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="toolkit" href="/toolkit">
              <IonIcon icon={ellipse} />
              <IonLabel>{t('tabBar.toolkit')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="my" href="/my">
              <IonIcon icon={triangle} />
              <IonLabel>{t('tabBar.my')}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}
export default App;
