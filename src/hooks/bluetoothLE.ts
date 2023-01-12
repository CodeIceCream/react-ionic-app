import { useCallback, useEffect, useState } from 'react'
import { BluetoothLE as ble } from "@awesome-cordova-plugins/bluetooth-le";

export const useBtInit = () => {

  const [scanDevice, setScanDevice] = useState()
  const onClick = useCallback(async () => {
    // permission
    const { hasPermission } = await ble.hasPermission()
    console.log(`Test hasPermission`, JSON.stringify(hasPermission));
    if (!hasPermission) {
      const { requestPermission } = await ble.requestPermission()
      console.log(`Test requestPermission`, JSON.stringify(requestPermission));
    }
    const { isLocationEnabled } = await ble.isLocationEnabled()
    console.log(`Test isLocationEnabled`, JSON.stringify(isLocationEnabled));
    if (!isLocationEnabled) {
      const { requestLocation } = await ble.requestLocation()
      console.log(`Test requestLocation`, JSON.stringify(requestLocation));
    }

  }, [])

  useEffect(() => {

  }, [])
  return { onClick, scanDevice }
}

