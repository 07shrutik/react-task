import { dropValue, formatSelect } from "../../recoilAtom/Atom";
import { styled } from "@mui/material/styles";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
// import { dropValue } from "../../recoilAtom/Atom";
import { useRecoilState } from "recoil";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(0),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid #ced4da",
    // height:20,
    fontSize: 11,
    padding: "0px 5px 7px 5px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function DropDown({ optionData }) {
  const [data, setData] = useRecoilState(dropValue);
  // const [formatSelected, setformatSelected] = useRecoilState(formatSelect);
  const { def, dataArr } = optionData;
  const handleChange = (event) => {
    setData(event.target.value);
    console.log("native select", event.target.value);
    // setformatSelected(true);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <NativeSelect
          id="demo-customized-select-native"
          value={data}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value="">{def}</option>
          {dataArr.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
