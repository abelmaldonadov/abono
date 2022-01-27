export default function WarningBanner({warn}) {
    if (!warn) {
        return null
    } else {
        return <div className="warning">
            Warning!
        </div>
    }
}