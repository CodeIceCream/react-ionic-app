import { App } from '@capacitor/app';
import { useIonRouter } from '@ionic/react';
import { useEffect } from 'react';

export const useBackExit = () => {
  const router = useIonRouter();
  const { pathname } = router.routeInfo;

  useEffect(() => {
    document.addEventListener('ionBackButton', (ev) => {
      if (!router.canGoBack()) {
        App.exitApp();
      }
    });
  }, [pathname]);
};
