// import * as React from "react";
import { useState } from "react";
import Select from "react-select";

export default function App() {
  const [value, setValue] = useState(null);
  const options = [
    { value: "Ms Dhoni", label: "Ms Dhoni" },
    { value: "Virat", label: "Virat" },
    { value: "Jadeja", label: "Jadeja" },
    { value: "Ruturaj", label: "Ruturaj" },
  ];
  return (
    <div style={{ margin: 20, width: 200 }}>
      <Select
        options={options}
        defaultValue={value}
        placeholder="Select your Player"
        onChange={setValue}
        isMulti
        isSearchable
        noOptionsMessage={() => "No Player Found"}
        styles={{
          clearIndicator: () => ({
            color: "red",
          }),
        }}
      />
    </div>
  );
}
