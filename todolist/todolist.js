import React, { useState } from "react";
import { addPlayer, updatePlayers, players } from "../../slices/gameSlice";
import { useSelector, useDispatch } from "react-redux";
import { Player } from "..";




export function ToDoList() {

    const constructor = (props) => {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }

    const handleInput = (input) => {
        this.setState({
            currentItem: {
                text: input.target.value,
                key: Date.now()
            }
        })
    }

    const addItem = (item) => {
        item.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if (newItem.text !== "") {
            const items = [...this.state.items, nextItem];
            this.setState({
                items: items,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }

    const deleteItem = (key) => {
        const filteredItems = this.state.items.filter(item =>
            item.key !== key);
        this.setState({
            items: filteredItems
        })
    }


    const setUpdate = (text, key) => {
        console.log("items:" + this.state.items);
        const items = this.state.items;
        items.map(item => {
            if (item.key === key) {
                console.log(item.key + "    " + key)
                item.text = text;
            }
        })
        this.setState({
            items: items
        })
    }


    return ( <
        >
        <
        div className = "App" >
        <
        header >
        <
        form id = "to-do-form"
        onSubmit = { this.addItem } >
        <
        input type = "text"
        placeholder = "Enter task..."
        value = { this.state.currentItem.text }
        onChange = { this.handleInput }
        /> <
        button type = "submit" > Add < /button> <
        /form> <
        p > { this.state.items } < /p> <
        ListItems items = { this.state.items }
        deleteItem = { this.deleteItem }
        setUpdate = { this.setUpdate }
        /> <
        /header> <
        /div> <
        />
    );
}