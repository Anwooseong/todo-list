import React, { useRef, useState } from "react"
import Button from "../UI/Button"
import classes from './HomeHeader.module.css'

const HomeHeader = (props) => {

    const todoRef = useRef()
    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
        if (buttonId === 1) {
            props.onChange('all')
        } else if (buttonId === 2) {
            props.onChange('complete')
        } else {
            props.onChange('incomplete')
        }
    };

    const addTodo = (event) => {
        event.preventDefault();
        if (todoRef.current.value === '') {
            return
        }
        props.onAdd(todoRef.current.value)
        todoRef.current.value = ''
    }

    return (
        <div className={classes.header}>
            <h1 className={classes.title}>Todo-List</h1>
            <form onSubmit={addTodo} className={classes.container}>
                {/* <label htmlFor='addTodo' className={classes['label-title']}></label> */}
                <input type='text' id='addTodo' className={classes['input-title']} ref={todoRef} />
                <Button type='submit' selection='' between=''>내용 추가</Button>
            </form>
            <div className={`${classes['btn-container']}`}>

                <Button
                    onClick={() => handleButtonClick(1)}
                    selection={selectedButton === 1 ? 'selected' : ''}
                    between=''
                >
                    ALL
                </Button>

                <Button
                    onClick={() => handleButtonClick(2)}
                    selection={selectedButton === 2 ? 'selected' : ''}
                    between='between'
                >
                    COMPLETE
                </Button>

                <Button
                    onClick={() => handleButtonClick(3)}
                    selection={selectedButton === 3 ? 'selected' : ''}
                    between=''
                >
                    INCOMPLETE
                </Button>

            </div>
        </div>
    )
}

export default HomeHeader