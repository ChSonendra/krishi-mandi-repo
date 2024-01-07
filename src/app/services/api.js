import baseUrl from "../../utils/environment/Environment";
export const makeApiRequest = async (functionName, method, Body = null, authToken = null) => {
  const apiUrl = `${baseUrl}${functionName}`;
  console.log(apiUrl);
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=86400',
  };

  if (authToken) {
    headers['Authorization'] = authToken;
  }

  const options = {
    method,
    headers,
  };


  if (Body !== null) {
    options.body = JSON.stringify(Body);
  }
  console.log(options);
  try {
    const response = await fetch(apiUrl, options);
    console.log(response);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    //   callback(responseData)
    return responseData;
  } catch (error) {
    console.error('API request error:', error);
  }
};