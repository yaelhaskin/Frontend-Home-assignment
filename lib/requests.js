export const fetchCauses = async () => {
  try {
      const response = await fetch('https://dev.api.bono.so/v1/charity/causes');
      if (!response.ok) {
          throw new Error(`Failed to fetch causes: ${response.statusText}`);
      }
      const { data } = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching causes:', error);
      return [];
  }
};
  
export const connectUser = async (userInfo) => {
    try {
      const response = await fetch('https://dev.api.bono.so/v1/auth/register/anonymous', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userInfo)
      });

      if (!response.ok) {
          throw new Error('Failed to register user');
      }

      const data = await response.json();      
      return data;       
    } catch (error) {
      console.error('Error registering user:', error);
    }
}