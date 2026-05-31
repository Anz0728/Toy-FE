import './TodayTitle.css'

function TodayTitle({ total }) {
    return (
        <p className="today-title">
            Today <span className="today-title__amount">총 {total}원</span>
        </p>
    )
}

export default TodayTitle