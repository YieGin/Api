import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getStoreData() {
      const response = await axios.get("/api");
      setData(response.users);
      console.log(response.data);
    }
    getStoreData();
  }, []);

  return (
    <div>{data && data.map(({ users, i }) => <p key={i}>{users}</p>)}</div>
  );
};

export default App;
