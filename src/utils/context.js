import { createContext, useState } from "react";

export const searchContext = createContext("");

const SearchProvider = (props) => {
    const [searchText, setSearchText] = useState('');

    return (
        <searchContext.Provider value={[searchText, setSearchText]}>
            {props.children}
        </searchContext.Provider>
    )
}

export default SearchProvider;