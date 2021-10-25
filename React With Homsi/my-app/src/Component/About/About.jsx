import './About.css'
import Award from '../../img/award.png'

const About = () => {
    return (
        <div className = 'a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className ='a-title'>About Me</h1>
                <p className="a-sub">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, iste.</p>
                <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit, recusandae illo doloremque placeat velit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, incidunt! nemo ea excepturi obcaecati harum?</p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-text">
                        <h4 className="a-award-title">International Award Desinger 2021</h4>
                        <p className="a-ward-desc">Lorem ipsum dolor sit amet consectetur adifbxpisicing elit. Ducimus, possimus?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
