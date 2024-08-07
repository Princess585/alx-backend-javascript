import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();
  const obj = {}

  await Promise.all([photoPromise, userPromise])
    .then((values) => {
      obj.photo = values[0]
      obj.user = values[1]
    })
    .catch(() => {
      obj.photo = null
      obj.user = null
    })

  return obj;
}
