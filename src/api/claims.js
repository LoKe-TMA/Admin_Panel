import API from "./axios";

export const getClaims = async () => {
  const res = await API.get("/admin/claims");
  return res.data;
};

export const approveClaim = async (
  claimId
) => {
  const res = await API.post(
    "/admin/claims/approve",
    {
      claimId
    }
  );

  return res.data;
};