import { useState } from "react";
import Card from "../UI/Card/Card"
import classes from './HomeList.module.css'

const HomeList = (props) => {

    const [isCheckedList, setIsCheckedList] = useState(
        props.todos.map((_) => false)
    );

    const handleCheckboxChange = (index) => {
        setIsCheckedList((prev) => {
            const updatedList = [...prev];
            updatedList[index] = !prev[index];
            return updatedList;
        });

        // status 변경
        const updatedTodos = [...props.todos];
        updatedTodos[index].status = 'complete';
        // 상태 업데이트
        props.onChange(updatedTodos);
    };

    return (
        <Card className={classes.users}>
            <ul>
                {props.todos.map((todo, index) => (
                    <div key={todo.id}>
                        <li
                            className={`${classes.container} ${classes.text} ${isCheckedList[index] ? classes.lineThrough : ""
                                }`}
                        >
                            {todo.listName}
                            <div>
                                <label htmlFor={`complete-${index}`}>완료</label>
                                <input
                                    type="checkbox"
                                    id={`complete-${index}`}
                                    checked={isCheckedList[index]}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                            </div>
                        </li>
                    </div>

                ))}
            </ul>
        </Card>
    )
}

export default HomeList