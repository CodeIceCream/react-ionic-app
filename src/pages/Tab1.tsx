import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useModel } from '@modern-js-reduck/react';
import { List } from 'antd-mobile';
import {
  PayCircleOutline,
  SetOutline, UnorderedListOutline
} from 'antd-mobile-icons';
import { RouteComponentProps } from 'react-router';
import moneyModel from '../model/money';
import './Tab1.css';


const Tab1: React.FC<RouteComponentProps> = (props) => {
  const [state] = useModel(moneyModel)

  const router = useIonRouter()

  const goMoney = () => {
    router.push('/tab1/money')
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <List header='可点击列表'>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => { goMoney() }}>
            账单
          </List.Item>
          <List.Item
            prefix={<PayCircleOutline />}
            description={state.currencyValue}
            onClick={() => { }}>
            总资产
          </List.Item>
          <List.Item prefix={<SetOutline />} onClick={() => { }}>
            设置
          </List.Item>
        </List>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
