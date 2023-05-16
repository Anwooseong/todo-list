import React, { useEffect, useState } from "react"
import HomeHeader from "./HomeHeader"
import HomeList from "./HomeList"

const Home = (props) => {

    const [todoList, setTodoList] = useState([])
    const [todoStatus, setTodoStatus] = useState('all')
    const [statusTodoList, setStatusTodoList] = useState([])

    const addTodoListHandler = (listName) => {
        console.log('추가')
        setTodoList((prev) => {
            return [
                ...prev,
                { listName: listName, status: 'incomplete', id: Math.random().toString() }
            ]
        })
    }

    const onChangeTodoState = (status) => {
        setTodoStatus(status)
    }

    const onChangeTodos = (todos) => {
        setTodoList(todos)
    }

    useEffect(() => {
        if (todoStatus === 'all') {
            setStatusTodoList(todoList);
        } else if (todoStatus === 'complete') {
            setStatusTodoList(todoList.filter((todo) => todo.status === 'complete'))
        } else {
            setStatusTodoList(todoList.filter((todo) => todo.status === 'incomplete'))
        }
    }, [todoStatus, todoList])

    return (
        <React.Fragment>
            <HomeHeader onAdd={addTodoListHandler} onChange={onChangeTodoState} />
            <HomeList todos={statusTodoList} todoStatus={todoStatus} onChange={onChangeTodos} />
        </React.Fragment>
    )
}

export default Home