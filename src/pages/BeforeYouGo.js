import { Col, Row } from 'antd';

function BeforeYouGo(props) {
    return (
        <>
            <div className="know-before">
                <h2 className="page-title">What to know before you go</h2>
                <p className="page-intro">
                If there’s one thing I learned during my trip, it’s that the key to a successful EV road trip is planning, planning, and more planning. Here are some tips for making the trip as enjoyable as possible.
                </p>
                <Row gutter={[0, 0]}>
                    <Col span={12}>
                        <div className="know-tips">
                        <p className="tip"><span className="tip-num">01.</span> Drive in a way that maximizes your range</p>
                        <p className="tip">
                        <span className="tip-num">02.</span> Plan charging stops around activities or meal breaks
                        </p>
                        <p className="tip">
                        <span className="tip-num">03.</span> Use available apps and map out your mileage in advance
                        </p>
                        <p className="tip">
                        <span className="tip-num">04.</span> Be flexible and have a backup plan
                        </p>
                        <p className="tip">
                        <span className="tip-num">05.</span> EVs are better for urban adventures than going off the grid
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