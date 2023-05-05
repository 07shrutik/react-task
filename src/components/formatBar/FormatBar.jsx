// import { useState } from "react";
import { formatBar } from "../../constants/commonData";
// import TextArea from "../TextArea";
import styles from "./FormatBar.module.css";
import { useRecoilState } from "recoil";
import { selectedAction } from "../recoilAtom/Atom";

export default function FormatBar() {
  // const [tag, settag] = useState("");
  const [selectedActions, setSelectedAction] = useRecoilState(selectedAction);
  // const [formatSelected, setformatSelected] = useRecoilState(formatSelect);

  function handleClick(icon) {
    setSelectedAction(icon.value);
  }

  return (
    <div>
      <ul className={styles.formatBarIcons}>
        {formatBar.map((icon) => (
          <li
            style={{
              margin: "0.3rem",
              color: "rgb(93, 91, 91)",
              fontSize: "10",
            }}
            key={icon.description}
            onClick={() => handleClick(icon)}
          >
            {icon.icons}
          </li>
        ))}
      </ul>
      {/* <TextArea tag={tag} /> */}
    </div>
    // </>
  );
}
