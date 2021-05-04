// defines a lambda function
exports.handler = async function(event) {

  // a lambda function returns a status code and a string of data
  return {
    statusCode: 200, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    body: `Hello from the back-end yeah!` // a string of data
  }
}

// API can be found under: http://localhost:8888/.netlify/functions/hello (netlify logic)