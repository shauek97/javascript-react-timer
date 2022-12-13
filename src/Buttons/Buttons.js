import styles from './Buttons.module.scss'

const Buttons = ({setTime, setStart}) => {

return (

    <div className={styles.buttons}>
        <button onClick={() => setStart(true)}>start</button>
        <button onClick={() => setStart(false)}>pause</button>
        <button onClick={() => setTime(0)}>reset</button>
    </div>

);
};

export default Buttons;