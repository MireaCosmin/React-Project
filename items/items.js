import React from "react"

export function ListItems(props) {

    const items = props.items;
    const listItems = items.map(item => {

        return <div className = "list"
        key = { item.key } >
            <
            p >
            <
            input type = "text"
        id = { item.key }
        value = { item.text }
        onChange = {
            (e) => {
                props.setUpdate(e.target.value, item.key)
            }
        }
        /> <
        span > < button className = "submit"
        onClick = {
                props.deleteItem(item.key)
            } > Delete < /button></span >
            <
            /p>

        <
        /div>
    })
}