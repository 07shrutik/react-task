import { useEffect, useRef, useState } from "react";
import styles from "./TextArea.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { dropValue, selectedAction } from "./recoilAtom/Atom";

const TextArea = () => {
  const [content, setContent] = useState("<p>shrutik</p>");
  const [dropValues, setdropValues] = useRecoilState(dropValue);
  const [selectedActions, setSelectedAction] = useRecoilState(selectedAction);
  const [selectedText, setSelectedText] = useState("");
  const divRef = useRef();

  useEffect(() => {
    const range = document.createRange();
    const target = divRef.current;

    range.selectNodeContents(target);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }, [content]);

  function onchange(e) {
    setContent(
      `<${dropValues}><${selectedActions}>${e.target.innerText}</${selectedActions}></${dropValues}>`
    );
  }
  function handleMouseUp() {
    const selectedText = window.getSelection().toString();
    console.log(`Selected text: ${selectedText}`);
    if (selectedText) {
      let modifiedSelectedText = selectedText;
      if (dropValues || selectedActions) {
        modifiedSelectedText = `<${dropValues}><${selectedActions}>${modifiedSelectedText}</${selectedActions}></${dropValues}>`;
      }
      console.log("modifiedSelectedText", modifiedSelectedText);

      if (dropValues && selectedActions) {
        let modifiedContent = content.replace(
          selectedText,
          modifiedSelectedText
        );
        setContent(modifiedContent);
      }
    }
  }

  return (
    <div className={styles.container}>
      <div
        ref={divRef}
        contentEditable
        className={styles.main}
        data-placeholder="Type @ to insert"
        dangerouslySetInnerHTML={{ __html: content }}
        onKeyUp={(e) => onchange(e)}
        onMouseUp={handleMouseUp}
      ></div>
    </div>
  );
};

export default TextArea;
