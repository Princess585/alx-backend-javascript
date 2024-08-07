export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

function handleProfileSignup() {
  const promise = [uploadPhoto(), createUser()]
  console.log(`${resolve[0].body}
${resolve[1].firstName} ${resolve.[1].lastName}`
  })
}.
