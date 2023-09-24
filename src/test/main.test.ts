import { render, screen, waitFor } from '@testing-library/react';
import Character from '../module/character/character';
import { testApi, getLocationData, firstFeatured } from '../module/character/character-service';

jest.mock('../module/character/character-service');

describe('Character Component', () => {
  beforeEach(() => {
    // Reset mock implementations and clear any previous mock calls
    (testApi as jest.Mock).mockClear();
    (getLocationData as jest.Mock).mockClear();
    (firstFeatured as jest.Mock).mockClear();
  });

  it('renders loading spinner when loading data', async () => {
    // Mock the initial data fetch to be pending
    (firstFeatured as jest.Mock).mockResolvedValueOnce(new Promise(() => {}));

    render.bind(Character);

    // Check if the loading spinner is present
    const loader = screen.getByTestId('loader');
    expect(loader).toBeDefined();
  });

  it('displays character data fetched from the API', async () => {
    const mockCharacterData = {
      results: [{ name: 'Rick' }, { name: 'Morty' }],
      info: { pages: 2 },
    };

    const mockLocationData = { dimension: 'Dimension C-137', residents: ['Jerry', 'Beth'] };

    const mockEpisodeData = { name: 'Pilot' };

    (testApi as jest.Mock).mockResolvedValueOnce(mockCharacterData);

    // Mock the location and episode data
    (getLocationData as jest.Mock).mockResolvedValueOnce(mockLocationData);
    (firstFeatured as jest.Mock).mockResolvedValueOnce(mockEpisodeData);

    render.bind(Character);

    // Wait for the loading spinner to disappear
    await waitFor(() => {
      const loader = screen.queryByTestId('loader');
      expect(loader).toBeNull();
    });

    // Check if character names are displayed
    const rickElement = screen.getByText('Name: Rick');
    const mortyElement = screen.getByText('Name: Morty');

    expect(rickElement).toBeDefined();
    expect(mortyElement).toBeDefined();
  });

  it('handles API errors gracefully', async () => {
    // Mock API functions to return an error (status code 500)
    (testApi as jest.Mock).mockResolvedValueOnce(500);
    (getLocationData as jest.Mock).mockResolvedValueOnce(500);
    (firstFeatured as jest.Mock).mockResolvedValueOnce(500);

    render.bind(Character);

    // Wait for the loading spinner to disappear
    await waitFor(() => {
      const loader = screen.queryByTestId('loader');
      expect(loader).toBeNull();
    });

    // Check if an error alert is displayed
    const errorAlert = screen.getByText('Something went wrong!');
    expect(errorAlert).toBeDefined();
  });
});
