import { ReactNode } from "react";

interface ListProps<T> { //T placeholder for items
    //array of items
    items: T[],
    //render function that renders the list items
    render: (item: T) => ReactNode
}

const List = <T,> ({items, render}: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{render(item)}</li>
      })}
    </ul>
  )
}

export default List
