const API = ' https://jsonplaceholder.typicode.com/posts/1';



const getDataFromAPI = async(url, timeout) => {
    try {
      const response = await axios.get(url, {
        timeout: timeout
      });
      return response.data; 
    } catch (error) {
     
      if (axios.isCancel(error)) {
        console.log('Request was cancelled:', error.message);
      } else if (error.code === 'ECONNABORTED') {
        console.error('Request timeout:', error.message);
      } else {
        console.error('Error fetching data:', error.message);
      }
      throw error;
    }
  }
  

  
  getDataFromAPI(API, 5000)
    .then(data => {
      console.log('data', data);
    })
    .catch(error => {
      console.error('loi', error);
    });