import { useState, useEffect } from "react";

const List = ({getItems}) => {
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {

        console.log("Buscando itens do DB...");

        setMyItems(getItems);

    }, [getItems])

  return (
    <div>
        {myItems && myItems.map((item) => (
            <li key={item}> {item} </li>
        ))}
    </div>
  )
}

export default List;