// I used the image and general hero / sub icon layout from https://www.electrifyamerica.com/ for design inspiration. I saved the hero image and hosted that myself. All code is my own and I only referenced the site for visual UX ideas.

function Home() {
    return (
        <>
            <div className='container-home'>
      <div className='home-hero'>
      <div class="img-gradient">
      <img className="hero-image" id="darken" src="https://i.imgur.com/vwhyKP2.png"></img></div>
      <h1 id="h1-hero"><em>Where will an EV take you?</em></h1>
      <h2 id="h2-hero">Find and compare the best electric vehicles of 2023, learn the tips and tricks you need to know before heading out on the road and find charging stations near you.</h2></div>
      <div className='home-fact1'>
      <div id='fact'><img src="https://i.imgur.com/1WPP1it.png"></img>130k+</div>
        public charging stations in U.S.
        </div>
      <div className='home-fact2'><div id="fact"><img src="https://i.imgur.com/aLPVsTo.png"></img>$5.00</div> avg spend for 100+ miles of charge range</div>
      <div className='home-fact3'><div id="fact"><img src="https://i.imgur.com/2sJwsJk.png"></img>80%</div> battery for 30 minutes of charging</div>
      <div className='home-fact4'><div id="fact"><img src="https://i.imgur.com/eh4a6i5.png"></img>95%</div> uptime for charging stations</div>
      <div className='home-fact5'><div id="fact"><img src="https://i.imgur.com/c9IqxeU.png"></img>Three</div> types of charging speeds</div>
      <div className='home-bottom-left'>
        <img id="home-image-bottom" src="https://i.imgur.com/RZ5Nb2Z.png"></img>
      </div>
      <div className='home-bottom-right'><div className="quote-text"><b>Electric car sales are expected to continue strongly through 2023.</b> Over 2.3 million electric cars were sold in the first quarter, about 25% more than in the same period last year. We currently expect to see <b>14 million in sales by the end of 2023</b>, representing a 35% year-on-year increase with new purchases accelerating in the second half of this year.
      </div>
      </div>
    </div>
        </>
    )
}

export default Home;