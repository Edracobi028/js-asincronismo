export async function runCode(url) {
    // Tu código aquí 👈
    
     
    try {
      const validUrl = new URL(url);
      const response = await fetch(validUrl);
      console.log(url);
      return response.json(); 
    } catch (error) {
      if (error.message.includes('URL')) {
        throw new Error('Invalid URL');
      } else {
        throw new Error('Something was wrong');  
      }
    }
  
  }