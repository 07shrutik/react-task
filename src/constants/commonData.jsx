import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SpellcheckOutlinedIcon from "@mui/icons-material/SpellcheckOutlined";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import FormatColorTextOutlinedIcon from "@mui/icons-material/FormatColorTextOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import FormatLineSpacingOutlinedIcon from "@mui/icons-material/FormatLineSpacingOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import FormatIndentDecreaseOutlinedIcon from "@mui/icons-material/FormatIndentDecreaseOutlined";
import FormatIndentIncreaseOutlinedIcon from "@mui/icons-material/FormatIndentIncreaseOutlined";
import FormatClearOutlinedIcon from "@mui/icons-material/FormatClearOutlined";
import DropDown from "../components/formatBar/dropDown/DropDown";
// import { useState } from "react";
// import TextArea from "../components/TextArea";

const style = { fontSize: "medium" };

// const [tag1, setTag] = useState("");
// function handleClick(res) {
//   setTag(res);
// }
const zoomData = {
  def: "100%",
  dataArr: ["Fit", "50%", "75%", "90%", "100%", "125%", "150%", "200%"],
};
// const zoomData = ["Fit", 50, 75, 90, 100, 125, 150, 200];

const stylesData = {
  def: "p",
  dataArr: ["p", "h1", "h2", "h3", "h4"],
};

const fontData = {
  def: "Arial",
  dataArr: ["Arial", "TimesNewRoman", "Calibri", "Palanquin Dark"],
};

const fontSizeData = { def: "11", dataArr: ["8", "9"] };

const formatBar = [
  {
    icons: <UndoIcon sx={style} />,
    description: "Undo (Ctrl+Z)",
    value: "undo",
  },
  {
    icons: <RedoIcon sx={style} />,
    description: "Redo (Ctrl+Y)",
    value: "redo",
  },
  {
    icons: <PrintOutlinedIcon sx={style} />,
    description: "Print",
    value: "print",
  },
  {
    icons: <SpellcheckOutlinedIcon sx={style} />,
    description: "Spell and Grammar check",
    value: "Spell and Grammar check",
  },
  {
    icons: <ImagesearchRollerOutlinedIcon sx={style} />,
    description: "Paint format",
    value: "paint",
  },
  {
    icons: <DropDown optionData={zoomData} />,
    description: "Zoom",
  },
  {
    icons: <DropDown optionData={stylesData} />,
    description: "Styles",
  },
  {
    icons: <DropDown optionData={fontData} />,
    description: "Font",
  },
  {
    icons: <RemoveOutlinedIcon sx={style} />,
    description: "Decrease font size (Ctrl+Z)",
    value: "dec font size",
  },
  {
    icons: <DropDown optionData={fontSizeData} />,
    description: "Styles",
  },
  {
    icons: <AddOutlinedIcon sx={style} />,
    description: "Increase font size (Ctrl+Z)",
    value: "inc font size",
  },
  {
    icons: <FormatBoldOutlinedIcon sx={style} />,
    description: "strong",
    value: "strong",
  },
  {
    icons: <FormatItalicOutlinedIcon sx={style} />,
    description: "Italic (Ctrl+Z)",
    value: "em",
  },
  {
    icons: <FormatUnderlinedOutlinedIcon sx={style} />,
    description: "Underline (Ctrl+Z)",
    value: "u",
  },
  {
    icons: <FormatColorTextOutlinedIcon sx={style} />,
    description: "Text color",
  },
  {
    icons: <ModeOutlinedIcon sx={style} />,
    description: "Highlight color (Ctrl+Z)",
  },
  {
    icons: <InsertLinkOutlinedIcon sx={style} />,
    description: "Insert link (Ctrl+K)",
  },
  {
    icons: <AddCommentOutlinedIcon sx={style} />,
    description: "Add comment (Ctrl+Z)",
  },
  {
    icons: <InsertPhotoOutlinedIcon sx={style} />,
    description: "Insert image(Ctrl+Z)",
  },
  {
    icons: <FormatAlignLeftOutlinedIcon sx={style} />,
    description: "Align & indent (Ctrl+Z)",
  },
  {
    icons: <FormatLineSpacingOutlinedIcon sx={style} />,
    description: "Line & paragraph spacing (Ctrl+Z)",
  },
  {
    icons: <ChecklistOutlinedIcon sx={style} />,
    description: "Checklist",
  },
  {
    icons: <FormatListBulletedOutlinedIcon sx={style} />,
    description: "Bulleted list (Ctrl+Z)",
  },
  {
    icons: <FormatListNumberedOutlinedIcon sx={style} />,
    description: "Numbered list (Ctrl+Z)",
  },
  {
    icons: <FormatIndentDecreaseOutlinedIcon sx={style} />,
    description: "Decrease indent (Ctrl+Z)",
  },
  {
    icons: <FormatIndentIncreaseOutlinedIcon sx={style} />,
    description: "Increase indent",
  },
  {
    icons: <FormatClearOutlinedIcon sx={style} />,
    description: "Clear formatting",
  },
];

{
  /* <TextArea tag1={tag1} />; */
}
export { formatBar };
