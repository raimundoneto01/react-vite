import './Props.css';

const Props =({text, evento})=>{
    return <button onClick={evento}>{text}</button>
}

export default Props;