//универсальная хок ф-ция,чтобы сделать запрос на севрер

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Could`t fetch", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error("Could`t fetch", error.message);
    return false;
  }
};

//функция,берущая на входе урлы и делающая по ним запросы

export const makeRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );
  return res;
};
