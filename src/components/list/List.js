export default function List() {
    const numbers = [1, 2, 3, 4, 5]
    const listNumbers = numbers.map(number => <li key={number.toString()}>{number}</li>)
    return <ul>
        {listNumbers}
    </ul>

    // return <ul>
    //     {numbers.map(number => <li
    //         key={number.toString()}>
    //         {number}
    //     </li>)}
    // </ul>
}