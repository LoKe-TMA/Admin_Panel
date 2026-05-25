import API from "./axios";

export const sendBroadcast =
  async (data) => {
    const res = await API.post(
      "/broadcast/send",
      data
    );

    return res.data;
  };