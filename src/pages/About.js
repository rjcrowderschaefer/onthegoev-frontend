import { Col, Row } from 'antd';

function About(props) {
    return (
        <>
            <div className="about">
                <h2 className="page-title">Who we are</h2>
                <p className="page-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere at leo sit amet tempus.</p>
            </div>
            <Row gutter={[0, 0]}>
                <Col span={12}>
                    <div id="about-img">
                        <img src="https://media.istockphoto.com/id/983558002/photo/charging-electric-car-in-the-desert.jpg?s=612x612&w=0&k=20&c=Wv7fY3ciDY4zkTV07ql5OlXRqptuWrA1KTmfQY4106U=" alt="EV with charger connected"></img>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="about-info">
                        <h2>H2: Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ipsum ut dolor fringilla lacinia. Nullam eu venenatis dolor, at gravida nisi. In ullamcorper enim auctor orci pretium cursus. Nulla at ex nulla. Pellentesque feugiat risus ullamcorper lectus iaculis gravida.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ipsum ut dolor fringilla lacinia. Nullam eu venenatis dolor, at gravida nisi. In ullamcorper enim auctor orci pretium cursus. Nulla at ex nulla. Pellentesque feugiat risus ullamcorper lectus iaculis gravida.</p>
                        <div className="link-resources">
                            <a href="/">Link 1</a>
                            <a href="/">Link 1</a>
                            <a href="/">Link 1</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default About;