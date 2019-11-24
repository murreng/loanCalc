


function sendRequest({ url, config }) {
  return fetch(url, config.params)
    .then(response => handleErrors({ response, config }))
    .then(response => transformResponse(config, response));
}

// Replace ./data.json with your JSON feed
fetch('http://www.mocky.io/v2/5d4aa9e93300006f000f5ea9')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
  })
