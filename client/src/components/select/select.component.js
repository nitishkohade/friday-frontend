import {useState} from 'react'
import SelectSearch, { fuzzySearch } from 'react-select-search';
import "./select.style.css"

const CustomSelect = ({options, onSelect, placeholder, closeOnSelect, multiple, search, selectType}) => {

    const [selectedValue, setSelectedValue] = useState("")

    const selectOptions = (() => options && options.map(option => ({name: option, value: option})) )()

    const onChangeSelect = (value) => {
        setSelectedValue(value)
        onSelect(value, selectType)
    }

    return (
            <SelectSearch
                printOptions="on-focus"
                multiple={multiple}
                closeOnSelect={closeOnSelect}
                value={selectedValue}
                onChange={onChangeSelect}
                className="select-search"
                options={selectOptions ?? []}
                search={search}
                filterOptions={() => fuzzySearch(selectOptions ?? [])}
                placeholder={placeholder}
            />
    )
}

export default CustomSelect
