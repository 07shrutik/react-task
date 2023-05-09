import React, { useEffect, useState } from "react";

const UserScore = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("userScore")));
  }, []);
  function handleClick() {
    console.log(data);
  }
  return (
    <div>
      <h1>
        {data && data.name} :- {data && data.score}
      </h1>
    </div>
  );
};

export default UserScore;