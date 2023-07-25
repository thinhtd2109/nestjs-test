export const validateBody = (data, object: Object) => {
  for (const property in data) {
    if (!data[property]) {
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