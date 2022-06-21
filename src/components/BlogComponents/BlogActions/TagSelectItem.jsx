import { TreeSelect } from "antd";
import { useEffect, useState } from "react";

const TagSelectItem = (props) => {

    const [tagList, setTagList] = useState([]);

    useEffect(() => {
        setTagList(props.data)
    }, [props.data])

    const onChangeSearchItem = (value) => {
        props.search(value)
        setTagList([{ value: value, food_name: 'Идет загрузка...' }])
    }

    const onChangeSelectItem = (value) => {
        if (!!value) {
            const found = tagList.find(data => (data.value === value.value));
            props.select(found.id, found.value)
        }
        setTagList([{ value: 'value', food_name: 'Идет загрузка...' }])
    }

    return <TreeSelect
        treeData={tagList}
        showSearch
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Введите тэг"
        allowClear
        treeDefaultExpandAll
        labelInValue
        onSearch={onChangeSearchItem}
        onChange={onChangeSelectItem}
    />
}
export default TagSelectItem