import { useIonRouter } from '@ionic/react';
import { useModel } from '@modern-js-reduck/react';
import { List } from 'antd-mobile';
import {
  PayCircleOutline,
  SetOutline
} from 'antd-mobile-icons';
import { IonTemplate } from 'component/IonTemplate';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import moneyModel from '../../model/money';
import Bill from './Bill';
import Language from './Language';


const My: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()
  const [moneyState] = useModel(moneyModel)
  const router = useIonRouter()

  const goMoney = () => {
    router.push('/my/money')
  }


  return (
    <IonTemplate title={t('my.title')}>
      <List mode='card'>
          <Bill />
          <List.Item
            prefix={<PayCircleOutline />}
            description={moneyState.currencyValue}
            onClick={goMoney}>
            总资产
          </List.Item>
          <Language />
          <List.Item prefix={<SetOutline />} onClick={() => { }}>
            {t('my.setting')}
          </List.Item>
        </List>
    </IonTemplate>
  );
};

export default My;
