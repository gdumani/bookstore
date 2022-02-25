const API_ID = 'FN35ZgxeHr1ORapGK8sX';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;

export const getApi = async (bookId = '') => {
  const resp = await fetch(`${API_URL}/${bookId}`);
  const result = await resp.json();
  return result;
};

export const addApi = async (book) => {
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

export const remApi = async (bookId) => {
  await fetch(`${API_URL}/${bookId}`, {
    method: 'DELETE',
  });
};
