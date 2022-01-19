import { KeyboardEvent, useEffect, useState } from "react";

let oldIsClear = true;

type SearchBarProps = {
  onChangeIsClear?: (isClear: boolean) => void,
  onSearch?: (searchText: string) => void,
}

const SearchBar = (props: SearchBarProps) => {
  const { onChangeIsClear, onSearch } = props

  const [value, setValue] = useState("");

  const handlerOnSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!onSearch || value === "") return;

    if (e.key === "Enter") {
      onSearch(value);
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
    <div>
      <input
        type="text"
        placeholder="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handlerOnSearch}
      />
    </div>
  );
}

export default SearchBar
