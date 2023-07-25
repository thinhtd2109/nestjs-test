import { isEmpty } from "../helper/user.helper"

export const validateBody = (data, object: Object) => {
  for (const property in object) {
    if (isEmpty(data[property])) {
      return {
        status: false,
        error: object[property],
        data: null
      }
    }
  }
  return {
    status: true,
    error: null,
    data: null
  }
}