import ActiveListItem from "../ActiveListItem"
import styles from './ActiveList.module.css'
// import { useEffect } from "react";
import { Habit, ActiveListProps } from "../../types/types";

// This is the list of commited habits (after commiting) and you can tick off everyday
export default function ActiveList({taskData, date} : ActiveListProps) {

  return (
    <>
      <ul className={styles.myList}>
        {taskData && taskData.map((todo: Habit, index: number) => (
          <li key={index}>
            <ActiveListItem todo={todo} date={date}>
              {todo.habit_name}
            </ActiveListItem>
          </li>
        ))}
      </ul>
    </>
  );
}
