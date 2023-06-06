import { Col, Row } from 'antd';

function BeforeYouGo(props) {
    return (
        <>
            <div className="know-before">
                <h2 className="page-title">What to know before you go</h2>
                <p className="page-intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere at leo sit amet tempus. Donec ac volutpat lacus. Sed varius nibh nec dui viverra mollis. Fusce mattis nunc non aliquet rhoncus. 
                </p>
                <Row gutter={[0, 0]}>
                    <Col span={12}>
                        <div className="know-tips">
                        <p className="tip"><span className="tip-num">01</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="tip">
                        <span className="tip-num">02</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="tip">
                        <span className="tip-num">03</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="tip">
                        <span className="tip-num">04</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="tip">
                        <span className="tip-num">05</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="know-before-img">
                            <img id="know-before-img" src="https://imageio.forbes.com/specials-images/imageserve/636baffb40b22c8d887fde5d/0x0.jpg?format=jpg&width=1200" alt="family packing EV for trip"></img>
                        </div>
                    </Col>
                </Row>
            </div>        
        </>

    )
}

export default BeforeYouGo;