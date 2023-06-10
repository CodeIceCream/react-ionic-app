import { Toast } from 'antd-mobile';
import { IonTemplate } from 'component/IonTemplate';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SentenceInfo, sentenceService, SentenceType } from 'services/sentence';

function Sentence() {
  const { t } = useTranslation();
  const [sentence, setSentence] = useState<SentenceInfo>();

  async function fetchSentence() {
    try {
      const sentenceInfo = await sentenceService([
        SentenceType.Literature,
        SentenceType.Movies,
        SentenceType.Philosophy,
        SentenceType.Poetry,
      ]);
      setSentence(sentenceInfo);
    } catch (error) {
      Toast.show(error as string);
    }
  }

  useEffect(() => {
    fetchSentence();
  }, []);

  return (
    <IonTemplate title={t('sentence.title')}>
      <div className="container">
        <div className="text-box">
          <div className="text">{sentence?.hitokoto}</div>
        </div>
      </div>
    </IonTemplate>
  );
}

export default Sentence;
