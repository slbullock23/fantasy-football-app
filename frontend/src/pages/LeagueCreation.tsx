import { useState } from "react";
import { apiFetch } from "../utils/api";

const LeagueCreation = () => {
  const [name, setName] = useState("");

  const handleCreate = async () => {
    try {
      const league = await apiFetch("/leagues", {
        method: "POST",
        body: JSON.stringify({ name, creatorId: 1 })
      });
      console.log("League created:", league);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create League</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default LeagueCreation;
