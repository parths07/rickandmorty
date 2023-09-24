// Function to fetch character data from the Rick and Morty API based on page number.
export const testApi = async (pageNo: any) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNo}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      // Handle non-OK responses here (e.g., 404, 500, etc.) if needed.
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return 500; // Returning a generic error code.
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return 500; // Catch and log any unexpected errors and return a generic error code.
  }
};

// Function to fetch location data from a given URL.
export const getLocationData = async (url: any) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle non-OK responses here (e.g., 404, 500, etc.) if needed.
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return 500; // Returning a generic error code.
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return 500; // Catch and log any unexpected errors and return a generic error code.
  }
};

// Function to fetch first featured data from a given URL.
export const firstFeatured = async (url: any) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle non-OK responses here (e.g., 404, 500, etc.) if needed.
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return 500; // Returning a generic error code.
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return 500; // Catch and log any unexpected errors and return a generic error code.
  }
};
