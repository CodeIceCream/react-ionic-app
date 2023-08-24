import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';

import HomeTabNav from 'layouts/HomeTabNav';

function RootRouter() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/tabs" />;
          }}
        />
        <Route path="/tabs">
          <HomeTabNav />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default RootRouter;
