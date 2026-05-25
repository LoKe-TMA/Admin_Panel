import React, {
  useEffect,
  useState
} from "react";

import {
  getClaims,
  approveClaim
} from "../api/claims";

const Claims = () => {
  const [claims, setClaims] =
    useState([]);

  useEffect(() => {
    loadClaims();
  }, []);

  const loadClaims = async () => {
    const data = await getClaims();

    setClaims(data.claims);
  };

  const handleApprove = async (
    id
  ) => {
    await approveClaim(id);

    loadClaims();
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5">
        Claims
      </h1>

      {claims.map((claim) => (
        <div
          key={claim._id}
          className="bg-zinc-900 p-4 rounded-xl mb-3"
        >
          <p>{claim.pubgId}</p>

          <button
            onClick={() =>
              handleApprove(claim._id)
            }
            className="bg-green-500 px-4 py-2 rounded-lg"
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
};

export default Claims;