import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useModel } from '@modern-js-reduck/react';
import { Button, Input, Result, Space } from 'antd-mobile';
import { HandPayCircleOutline } from 'antd-mobile-icons';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import moneyModel from '../model/money';

const Money: React.FC<RouteComponentProps> = () => {
  const [, { addMoney }] = useModel(moneyModel)
  const [moneyValue, setMoneyValue] = useState('')


  const recharge = () => {
    addMoney(Number(moneyValue))
    setMoneyValue('')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Money</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Money</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Space block direction='vertical'>
          <Result
            icon={<HandPayCircleOutline />}
            status='warning'
            title='充值提示'
            description='充值金额可能会延迟到账'
          />
          <Input
            placeholder='请输入充值金额'
            clearable
            value={moneyValue}
            onChange={val => setMoneyValue(val)}
          />
          <Button
            block
            color='primary'
            onClick={recharge}
          >
            充值
          </Button>
        </Space>
      </IonContent>
    </IonPage>
  )
}

export default Money