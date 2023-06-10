import { IonIcon } from '@ionic/react';
import { List, Picker } from 'antd-mobile';
import {
  PickerColumnItem,
  PickerValue,
} from 'antd-mobile/es/components/picker-view';
import { earthOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const lngs: PickerColumnItem[] = [
  { label: 'English', value: 'en-US' },
  { label: '中文', value: 'zh-CN' },
];

function Language() {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<PickerValue[]>();

  useEffect(() => {}, [i18n.language]);

  const onLanguageConfirm = (lang: PickerValue[]) => {
    setLang(lang);
    console.log(lang);
    console.log(i18n.language);

    i18n.changeLanguage(lang[0] as string);
  };

  const getLanguageLabel = (lang: string) => {
    const targetLang = lngs.find((langObj) => langObj.value === lang);
    return targetLang?.label;
  };

  return (
    <>
      <List.Item
        prefix={<IonIcon icon={earthOutline} />}
        extra={getLanguageLabel(i18n.language)}
        onClick={() => {
          setVisible(true);
        }}
      >
        {t('my.language')}
      </List.Item>
      <Picker
        columns={[lngs]}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        value={lang}
        onConfirm={onLanguageConfirm}
      />
    </>
  );
}

export default Language;
