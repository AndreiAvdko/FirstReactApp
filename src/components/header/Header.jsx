import {Link} from "react-router-dom";
import style from "./Header.module.css"

export const Header = () => {
    return <div className={style.container}>
        <div>
            <div>ARMAGGEDON V</div>
            <div>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле</div>
        </div>
        <div>
            <Link to={"/asteroids"}>Астероиды</Link>
            <Link to={"/destroyment"}>Уничтожение</Link>
        </div>
    </div>
}