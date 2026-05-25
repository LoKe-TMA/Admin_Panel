import API from "./axios";

export const getEvents = async () => {
  const res = await API.get(
    "/events/active"
  );

  return res.data;
};

export const createEvent =
  async (data) => {
    const res = await API.post(
      "/events/create",
      data
    );

    return res.data;
  };