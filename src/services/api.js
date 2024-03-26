const callToApi = () => {
  return fetch('url')
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
}

export default callToApi;