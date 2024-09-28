

export const getCountryImage = async (countryName: {name: string}): Promise<string | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_UNSPLASH_API_URL}?query=${countryName?.name}&count=1&orientation=landscape`, {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      return data.results[0].urls.regular;
    } else {
      console.log('No image found for the country');
      return null;
    }
  } catch (error) {
    console.error('Error fetching country image:', error);
    return null;
  }
};
