import { fetchForecastByQuery } from '../weather.service';
import dataJSON from '../../../__mockData__/madrid.json';

describe('WeatherService', () => {
  let response = {
    json: () => {
      return dataJSON;
    },
    ok: true,
  };

  beforeEach(() => {
    window.fetch = vi.fn().mockResolvedValueOnce(response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return data', async () => {
    const data = await fetchForecastByQuery({ query: 'Madrid' });

    expect(window.fetch).toHaveBeenCalled();
    expect(data).toEqual(dataJSON);
  });

  it('should return the name of the city that pass like a parameter', async () => {
    const data = await fetchForecastByQuery({ query: 'Madrid' });
    expect(data.location.name).toEqual('Madrid');
  });

  it('should return an error because failed the response', async () => {
    response = {
      ...response,
      ok: false,
    };

    window.fetch = vi.fn().mockResolvedValueOnce(response);

    expect(fetchForecastByQuery({ query: 'Madrid' })).rejects.toThrow();
  });
});
