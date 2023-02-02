import { Button, CenterPopup, Modal, ProgressBar, Result } from 'antd-mobile'
import { useEffect, useRef, useState } from 'react'


export const showComplete = (allowClose: boolean) => {

  Modal.show({
    content: <Result
      status='success'
      title='下载成功'
      description='请自行安装或允许权限自动安装'
    />,
    bodyStyle: { minHeight: '20vh' },
    showCloseButton: allowClose
  })
}

const Download = () => {

  const [percent, setPercent] = useState<number>(20)

  const [visible, setVisible] = useState(false)
  const timer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (visible) {
      timer.current = setInterval(() => {
        setPercent(percent + 10)
      }, 500)
    } else {
      timer.current && clearInterval(timer.current)
    }

    return () => timer.current && clearInterval(timer.current)
  }, [visible, percent])

  useEffect(() => {
    if (percent >= 100) {
      setPercent(0)
      timer.current && clearInterval(timer.current)
      setVisible(false)
      showComplete(true)
    }
  }, [percent])

  const startDownload = () => {
    setVisible(true)
  }

  return (
    <>
      <Button onClick={startDownload}>
        开始下载
      </Button>
      <CenterPopup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
      >
        <ProgressBar percent={percent} text />
      </CenterPopup>
    </>
  )
}

export default Download
