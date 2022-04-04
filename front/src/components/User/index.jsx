import './index.css'
import avatar from "../../assets/img/1.png"

export default () => {
    return (
        <>
            <div className="user">
                <img src={avatar} alt="" />
                <div className="user_info">
                    <h5> nom prenom <i class="las la-male"></i> <i class="las la-female"></i> </h5>
                    <span> <i class="las la-id-card"></i> 11906542 </span>
                    <span> <i class="las la-at"></i> 11906542 </span>
                    <span> <i class="las la-at"></i> jhjs@emfe.fd </span>
                    <span> <i class="las la-phone-volume"></i> 11906542 </span>
                    <span> <i class="las la-calendar"></i> 11906542 </span>
                </div>
            </div>
        </>
    )
}