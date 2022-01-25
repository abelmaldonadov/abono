export default function BoilingVerdict({celsius}) {
    if (celsius >= 100) {
        return <p>The water would boil.</p>
    } else {
        return <p>The water would not boil.</p>
    }
}