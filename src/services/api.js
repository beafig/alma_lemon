const callToApi = () => {
  const url = 'https://graph.instagram.com/7462436263816993?fields=id,username&access_token=IGQWRQcnBiRW9xVWhmaVdMMTlSeU9yaXc4WnJoWlJaLUxvX1VfcW9LbEpVWFo4NmgxeFAyVmJJUUNtNG1uSW1WRm9zMGdSeXZAjSVhDVFp6QWdsYTRlaEJiTWNuaWFkSkpXLTVzakttRGR4NDNaRzh4VWRMR1ctcG8ZD'
  return fetch(url)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
}

export default callToApi;