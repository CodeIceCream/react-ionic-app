import { SetOutline } from 'antd-mobile-icons';
import { List } from 'antd-mobile';
import { IonTemplate } from 'component/IonTemplate';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import Bill from './Bill';
import Language from './Language';
import Property from './Property';

const My: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  return (
    <IonTemplate title={t('my.title')}>
      <List mode="card">
        <Bill />
        <Property />
        <Language />
        <List.Item prefix={<SetOutline />} onClick={() => {}}>
          {t('my.setting')}
        </List.Item>
      </List>
    </IonTemplate>
  );
};

export default My;
