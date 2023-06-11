import { Toast } from 'antd-mobile';
import { IonTemplate } from 'component/IonTemplate';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SentenceInfo, sentenceService, SentenceType } from 'services/sentence';
import styles from './Sentence.module.scss';

function Sentence() {
  const { t } = useTranslation();
  const [sentence, setSentence] = useState<SentenceInfo>();
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (sentence?.hitokoto) {
      containerRef.current?.style.setProperty(
        '--word-width',
        `${sentence?.hitokoto.length}em`
      );
      containerRef.current?.style.setProperty(
        '--typewriting-animation-timing',
        `steps(${sentence?.hitokoto.length})`
      );
    }
  }, [sentence]);

  return (
    <IonTemplate title={t('sentence.title')}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.textBox}>
          <div className={styles.text}>{sentence?.hitokoto}</div>
        </div>
        <div className={styles.fromBox}>
          <div className={styles.source}>{`《${sentence?.from}》`}</div>
          <div className={styles.who}>
            {sentence?.from_who ? `——${sentence?.from_who}——` : undefined}
          </div>
        </div>
      </div>
    </IonTemplate>
  );
}

export default Sentence;
