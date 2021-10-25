import './intro.css'
import Me from '../../img/Jason-Statham.png'
const Intro = () => {
    return (
        <div className = 'i'>
            <div className="i-left">
                <div className="i-left-wraper">
                    <h2 className = "i-intro">Hello, My name's</h2>
                    <h1 className = "i-name">Soufiane Kerrouche</h1>
                    <div className="i-title">
                        <div className="i-title-wraper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UIUx desinger</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores exercitationem voluptatibus dolorum eum nemo! Saepe soluta mollitia laborum quae voluptatum.
                    </p>
                </div>
                <i class="fas fa-mouse"></i>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
