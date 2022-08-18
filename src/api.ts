const BASE_URL = 'https://openexchangerates.org/api/latest.json?app_id=ac592b2489b641c8a2c05fa1403616bf';

export function getExchange() {
  return fetch(BASE_URL).then(response => response.json());
}
