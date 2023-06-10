import { useIonRouter } from '@ionic/react';
import { useModel } from '@modern-js-reduck/react';
import { List } from 'antd-mobile';
import { PayCircleOutline } from 'antd-mobile-icons';
import moneyModel from 'model/money';
import { useTranslation } from 'react-i18next';

function Property() {
  const { t } = useTranslation();
  const [moneyState] = useModel(moneyModel);
  const router = useIonRouter();

  const goMoney = () => {
    router.push('money');
  };
  return (
    <List.Item
      prefix={<PayCircleOutline />}
      description={moneyState.currencyValue}
      onClick={goMoney}
    >
      {t('my.property')}
    </List.Item>
  );
}

export default Property;
