import { homeOutline, medkitOutline, personOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

import TabNav, { RouterTabBar } from 'component/TabNav';
import { HomeRouter } from 'router/HomeRouter';

function HomeTabNav() {
  const { t } = useTranslation();

  const rootPath = ['/tabs/home/', '/tabs/toolkit/', '/tabs/my/'];

  const tabBars: RouterTabBar[] = [
    {
      tab: 'home',
      path: '/tabs/home/',
      icon: homeOutline,
      labelText: t('tabBar.home'),
    },
    {
      tab: 'toolkit',
      path: '/tabs/toolkit/',
      icon: medkitOutline,
      labelText: t('tabBar.toolkit'),
    },
    {
      tab: 'my',
      path: '/tabs/my/',
      icon: personOutline,
      labelText: t('tabBar.my'),
    },
  ];

  return (
    <TabNav tabBars={tabBars} rootPaths={rootPath}>
      <HomeRouter />
    </TabNav>
  );
}

export default HomeTabNav;
