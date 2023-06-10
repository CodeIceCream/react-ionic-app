import { IonIcon, useIonRouter } from '@ionic/react';
import { JumboTabs } from 'antd-mobile';
import { IonTemplate } from 'component/IonTemplate';
import { chatbubbleOutline, cloudOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

const Toolkit: React.FC = () => {
  const { t } = useTranslation();
  const router = useIonRouter();

  function handleClick(key: string) {
    console.log(key);
    router.push(key);
  }

  return (
    <IonTemplate title={t('toolkit.title')}>
      <JumboTabs activeKey={null} onChange={handleClick}>
        <JumboTabs.Tab
          title={<IonIcon icon={cloudOutline} />}
          description={t('weather.entry')}
          key="weather"
        />
        <JumboTabs.Tab
          title={<IonIcon icon={chatbubbleOutline} />}
          description={t('sentence.entry')}
          key="sentence"
        />
      </JumboTabs>
    </IonTemplate>
  );
};

export default Toolkit;
