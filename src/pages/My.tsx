import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useModel } from '@modern-js-reduck/react';
import { List } from 'antd-mobile';
import {
  PayCircleOutline,
  SetOutline, UnorderedListOutline
} from 'antd-mobile-icons';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import moneyModel from '../model/money';


const My: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()
  const [moneyState] = useModel(moneyModel)
  const router = useIonRouter()

  const goMoney = () => {
    router.push('/my/money')
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('my.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('my.title')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <List mode='card'>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => { }}>
            账单
          </List.Item>
          <List.Item
            prefix={<PayCircleOutline />}
            description={moneyState.currencyValue}
            onClick={goMoney}>
            总资产
          </List.Item>
          <List.Item prefix={<SetOutline />} onClick={() => { }}>
            {t('my.setting')}
          </List.Item>
        </List>
      </IonContent>
    </IonPage>
  );
};

export default My;
