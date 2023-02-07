import { model } from "@modern-js-reduck/react";

interface FotaModel {
  latestVersion: {
    isForce: boolean
  }
}

const fotaModel = model<FotaModel>('FotaModel').define({
  state: {
    isForce: true
  },
})

export default fotaModel
