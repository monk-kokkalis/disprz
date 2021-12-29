import Style from './Question.module.scss';
import className from 'auxiliary/class-name';
function Question({active, name, sequenceNumber}) {
    return (
        <li className={className(Style.Main, {active})}>
            <div className="sequence">{sequenceNumber}.</div>
            <div className="name">{name}</div>
        </li>
    )
}

export default Question