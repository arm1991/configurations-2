const BASE_URL = 'http://localhost:9000';

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
};

const api = {
  team: {
    getMembers: () => fetch(`${BASE_URL}/api/team-members`).then(handleResponse),

    acceptRequest: (userId: string) =>
      fetch(`${BASE_URL}/accept-request/${userId}`, { method: 'POST' }).then(handleResponse),
  },
};

export default api;
