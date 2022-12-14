import './style.css'

export function Card(props){
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.hour}</small>
        </div>
    )
}