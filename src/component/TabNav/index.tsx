import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonRouter,
} from '@ionic/react';
import { useBackExit } from 'hooks/useBackExit';
import { useEffect, useState } from 'react';

export type RouterTabBar = {
  tab: string;
  path: string;
  icon: string;
  labelText: string;
};

export interface TabNavProps {
  children: React.ReactNode;
  tabBars: RouterTabBar[];
  rootPaths: string[];
}

const TabNav = ({ tabBars, rootPaths, children }: TabNavProps) => {
  useBackExit();
  const router = useIonRouter();
  const [showTabs, setShowTabs] = useState(true);

  const { routeInfo } = router;
  const tabBarStyle = showTabs ? undefined : { display: 'none' };

  useEffect(() => {
    setShowTabs(rootPaths.includes(routeInfo.pathname));
  }, [routeInfo.pathname]);

  // https://github.com/ionic-team/ionic-framework/issues/21993#issuecomment-791984362
  const handleTabClick: any = (href: string, tab: string) => (ref: any) => {
    if (!ref) {
      return;
    }

    ref.handleIonTabButtonClick = () => {
      router.push(href, 'none', 'replace');
    };
  };

  return (
    <IonTabs>
      <IonRouterOutlet>{children}</IonRouterOutlet>
      <IonTabBar slot="bottom" style={tabBarStyle}>
        {tabBars.map((item) => (
          <IonTabButton
            key={item.tab}
            tab={item.tab}
            href={item.path}
            ref={handleTabClick(item.path)}
          >
            <IonIcon icon={item.icon} />
            <IonLabel>{item.labelText}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
};

export default TabNav;
