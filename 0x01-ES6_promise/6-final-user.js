function signUpUser(firstName,lastName) {
    return Promise.resolve({
      firstName,
      lastName,
    });
}

functiom uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

function handleProfileSignup(firstName, lastName, fileName) {
  const promise = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  Promise.allSettled(promises).then((result) => {
    const newInfo = [];

    for(const res of result) {
      if(res.status === 'fulfilled') {
	newInfo.push({ status: res.status, value: res.value})
      } else if (res.status === 'rejected') {
	newInfo.push({ status: res.status, value: res.reason })
      }
    }
    console.log(newInfo0;
    return newInfo;
  })
	  

}	  
