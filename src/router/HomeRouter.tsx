import { IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router';

import Home from 'pages/Home';
import Toolkit from 'pages/Toolkit';
import { Weather } from 'pages/Weather';
import Sentence from 'pages/Sentence';
import My from 'pages/My';
import Property from 'pages/Property';

export const HomeRouter = () => {
  return (
    <IonRouterOutlet>
      <Redirect exact path="/tabs" to="/tabs/home/" />
      <Route path="/tabs/home/" component={Home} />
      <Route exact path="/tabs/toolkit/" component={Toolkit} />
      <Route exact path="/tabs/toolkit/weather" component={Weather} />
      <Route exact path="/tabs/toolkit/sentence" component={Sentence} />
      <Route exact path="/tabs/my/" component={My} />
      <Route exact path="/tabs/my/money" component={Property} />
    </IonRouterOutlet>
  );
};
