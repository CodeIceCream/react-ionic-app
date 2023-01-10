import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useModel } from '@modern-js-reduck/react';
import { Button, Input } from 'antd-mobile';
import { useState } from 'react';
import moneyModel from '../model/money';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [, actions] = useModel(moneyModel)
  const [moneyValue, setMoneyValue] = useState('')

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
        <Input
          placeholder='请输入内容'
          clearable
          onChange={val => setMoneyValue(val)}
        />
        <Button
          block
          color='primary'
          onClick={() => { actions.add(Number(moneyValue)) }}
        >
          加钱
        </Button>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
