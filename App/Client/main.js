

async function getInfo() {
    let data = null;
    try {
      const response = await fetch('http://localhost:3000/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      data = await response.json();
      console.log('Received data:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    return data;
  }

  
  async function updateText() {
    const testInfo = await getInfo(); 
    if (testInfo && testInfo.test) { 
      document.getElementsByClassName("test")[0].innerText = testInfo.test; 
    } else {
      console.error('Test info is not available');
    }
  }  

  
  
  updateText(); 
  