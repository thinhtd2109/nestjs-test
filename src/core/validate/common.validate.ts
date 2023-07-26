export const validateBody = (data: any, object: Object): any => {
  for (const property in data) {
    if (typeof data[property] === 'object' && data[property] !== null && object[property]) {
      const innerResult = validateBody(data[property], object[property]);
      if (!innerResult.status) {
        return innerResult;
      }
    } else if (!data[property]) {
      return {
        status: false,
        error: object[property],
        data: null
      };
    }
  }

  return {
    status: true,
    error: null,
    data: null
  };
}