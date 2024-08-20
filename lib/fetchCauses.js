export async function fetchCauses() {
    try {
      const response = await fetch('https://dev.api.bono.so/v1/charity/causes');
      if (!response.ok) {
        throw new Error('Failed to fetch causes');
      }
      const causes = await response.json();
      return causes.data;
    } catch (error) {
      console.error('Error fetching causes:', error);
      return [];
    }
}
  