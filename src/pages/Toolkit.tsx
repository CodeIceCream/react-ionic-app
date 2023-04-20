import { IonTemplate } from 'component/IonTemplate';
import { Weather } from 'component/Weather';
import { useTranslation } from 'react-i18next';
import Download from '../component/DownLoad';

const Toolkit: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonTemplate title={t('toolkit.title')}>
      <Download />
      <Weather />
    </IonTemplate>
  );
};

export default Toolkit;
