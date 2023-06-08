import { Card } from 'antd-mobile';
import { reqContribution } from 'api';
import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CoalCar } from '../svg/CoalCar';
import { PineTree } from '../svg/PineTree';
import { Smokestack } from '../svg/Smokestack';
import styles from './ContributionCard.module.scss';

interface ContributionItemProps {
  icon: ReactNode;
  value: number;
  unit: string;
  description: string;
}

const ContributionItem = (props: ContributionItemProps) => {
  const { icon, value, unit, description } = props;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>
          <div className={styles.value}>{value}</div>
          <div className={styles.unit}>{unit}</div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

interface Contribution {
  saveCoal: number;
  emissionReduction: number;
  equivalentPlanting: number;
}

const ContributionCard = () => {
  const { t } = useTranslation();
  const [contribution, setContribution] = useState<Contribution>();

  useEffect(() => {
    reqContribution()
      .then((resp) => resp.data)
      .then((data) => setContribution(data))
      .catch((error) => console.error('fetch contribution Error', error));
  }, []);

  const contributions: ContributionItemProps[] = [
    {
      icon: <CoalCar />,
      value: contribution?.saveCoal ?? 0,
      unit: t('contribution.ton'),
      description: t('contribution.saveCoal'),
    },
    {
      icon: <Smokestack />,
      value: contribution?.emissionReduction ?? 0,
      unit: t('contribution.ton'),
      description: t('contribution.emissionReduction'),
    },
    {
      icon: <PineTree />,
      value: contribution?.equivalentPlanting ?? 0,
      unit: t('contribution.trees'),
      description: t('contribution.equivalentPlanting'),
    },
  ];

  return (
    <Card title={t('contribution.title')} bodyClassName={styles.container}>
      {contributions.map((contribution) => (
        <ContributionItem key={contribution.description} {...contribution} />
      ))}
    </Card>
  );
};

export default ContributionCard;
