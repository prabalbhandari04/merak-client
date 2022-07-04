const params = {
    'bdd': '',
    '--publish-quiet': '',
    '--world-parameters': {
      appUrl: 'http://localhost:3000/',
      headless: true
    }
  };
  
  const constructParams = function (params) {
    let paramString = '';
    for (let key in params) {
      paramString += key + ' ';
      if (typeof params[key] === 'object') {
        paramString += JSON.stringify(params[key]) + ' ';
      } else {
        paramString += params[key] + ' ';
      }
    }
    return paramString;
  };
  
  module.exports = {
    default: constructParams(params)
  };