import Style from './Question.module.scss';
function Question({name, sequenceNumber}) {
    return (
        <li className={Style.Main}>
            <div className="sequence">{sequenceNumber}.</div>
            <div className="name">{name}</div>
        </li>
    )
}

export default Question