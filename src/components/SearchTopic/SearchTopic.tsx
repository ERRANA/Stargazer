import { useCallback, useRef, useState } from "react";
import { useTopics } from "../../hooks/useTopics";
import Item from "../../interfaces/item";
import Topic from "../Topic/Topic";
import { InputContainer, SearchButton, SearchInput } from "./styles";

const SearchTopic = () => {
  const [search, setSearch] = useState("");
  const { topic } = useTopics(search);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleClickSearch = useCallback(() => {
    // handler for search button
    setSearch(searchInputRef.current?.value || "");
  }, []);

  return (
    <>
      <InputContainer>
        {/* Search input */}
        <SearchInput
          type="text"
          defaultValue=""
          ref={searchInputRef}
          placeholder={"Enter a  topic"}
        />
        {/* Search button */}
        <SearchButton onClick={handleClickSearch}>
          Search
        </SearchButton>
      </InputContainer>
      <InputContainer>
        <div>
          {search && topic.length > 0 ? (
            <p>
              {/* if no topics found then print search query */}
              {`Topics related to `}
              <b>{search}</b>
            </p>
          ) : (
            <p>
              {/* if no topics found then print 'No results' */}
              <b>{`No results`}</b>
            </p>
          )}
          {/* if topics are present, Loop through them and print */}
          {topic &&
            topic?.map((item: Item) => (
              <Topic key={item.id} item={item} setSearch={setSearch} />
            ))}
        </div>
      </InputContainer>
    </>
  );
};

export default SearchTopic;
