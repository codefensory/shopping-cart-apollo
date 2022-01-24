import { ChangeEvent, useEffect, useState } from "react";
import { SearchBarContainer } from "./searchBar.style";

let oldIsClear = true;

type SearchBarProps = {
  onChangeIsClear?: (isClear: boolean) => void,
  onTyping?: (searchText: string) => void,
}

const SearchBar = (props: SearchBarProps) => {
  const { onChangeIsClear, onTyping } = props

  const [value, setValue] = useState("");

  const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (onTyping) {
      onTyping(newValue);
    }
  }

  useEffect(() => {
    const isClear = value === "";

    if (onChangeIsClear && isClear !== oldIsClear) {
      onChangeIsClear(isClear);
    }

    oldIsClear = isClear;
  }, [value])

  return (
    <SearchBarContainer>
      <input
        type="text"
        placeholder="Search Products"
        value={value}
        onChange={handlerOnChange} />
    </SearchBarContainer>
  );
}

export default SearchBar
