import { apiOptions } from '@Lib/utils/api.utils';
import { API_URL } from '@Lib/utils/constants';

const DEFAULT_FORECAST_DAYS = 3;

// TODO: How can i test endpoints with mock data?
export const fetchForecastByQuery = async ({ query }: { query: string }) => {
  const params = `q=${query}&days=${DEFAULT_FORECAST_DAYS}`;
  const url = `${API_URL}/forecast.json?${params}`;

  const response = await fetch(url, apiOptions);

  if (!response.ok) throw new Error('Test');

  const responseToJson = await response.json();

  return responseToJson;
};
