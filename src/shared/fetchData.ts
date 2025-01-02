const SERVER_URL = "http://localhost:4000";

function fetchData(
  path: string,
  options: RequestInit & { next?: NextFetchRequestConfig } = {}
) {
  return fetch(`${SERVER_URL}${path}`, options).then((res) => res.json());
}

export default fetchData;
