import { List } from 'antd-mobile';
import {
  UnorderedListOutline
} from 'antd-mobile-icons';
import { useTranslation } from 'react-i18next';

function Bill() {
  const { t } = useTranslation()
  return (
    <List.Item prefix={<UnorderedListOutline />} onClick={() => { }}>
      {t('my.bill')}
    </List.Item>
  )
}

export default Bill