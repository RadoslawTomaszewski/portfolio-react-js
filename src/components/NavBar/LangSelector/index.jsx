export const LanguageSelector = (props) => {
  return (
    <select name="" id="" onChange={(e) => props.setLang(e.target.value)}>
      <option key={"en"} value="en">
        English
      </option>
      <option key={"pl"} value="pl">
        Polski
      </option>
    </select>
  );
};
