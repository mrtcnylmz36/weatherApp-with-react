const IP_API = "8e7adbb27abf40b7ac52ad085f9bd2fa";

const getLocation = async () => {
  const api = `https://api.geoapify.com/v1/ipinfo?apiKey=${IP_API}
    `;
  const res = await fetch(api);
  if (!res.ok) {
    throw {
      message: res.statusText,
    };
  }
  return res.json();
};

export { getLocation };
