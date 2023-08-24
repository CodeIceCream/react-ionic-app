import { IonApp, setupIonicReact } from '@ionic/react';
import { DotLoading } from 'antd-mobile';
import { Suspense } from 'react';
import RootRouter from 'router/RootRouter';
import './App.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <Suspense fallback={<DotLoading color="primary" />}>
      <IonApp>
        <RootRouter />
      </IonApp>
    </Suspense>
  );
};
export default App;
