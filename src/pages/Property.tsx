import { useModel } from '@modern-js-reduck/react';
import { Button, Input, Result, Space } from 'antd-mobile';
import { HandPayCircleOutline } from 'antd-mobile-icons';
import { IonTemplate } from 'component/IonTemplate';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import moneyModel from '../model/money';
import styles from './Property.module.scss';

const Property: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();
  const [, { addMoney }] = useModel(moneyModel);
  const [moneyValue, setMoneyValue] = useState('');

  const recharge = () => {
    addMoney(Number(moneyValue));
    setMoneyValue('');
  };

  return (
    <IonTemplate title={t('property.title')}>
      <Space block direction="vertical">
        <Result
          icon={<HandPayCircleOutline />}
          status="warning"
          title={t('property.prompt')}
          description={t('property.tips')}
        />
        <Input
          className={styles.input}
          placeholder={t('property.placeholder')}
          clearable
          value={moneyValue}
          onChange={(val) => setMoneyValue(val)}
        />
        <Button block color="primary" onClick={recharge}>
          {t('property.recharge')}
        </Button>
      </Space>
    </IonTemplate>
  );
};

export default Property;
