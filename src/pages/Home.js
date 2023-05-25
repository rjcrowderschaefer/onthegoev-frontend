function Home() {
    return (
        <>
            <div className='container-home'>
      <div className='home-hero'>
      <h1 id="h1-hero"> This is the home page</h1>
      <h2 id="h2-hero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero mauris, dictum nec tristique vel, faucibus at tellus. Vivamus non lacinia justo. Pellentesque eget ex accumsan, egestas nulla ac, dictum metus. </h2>
      <img className="hero-image" src="https://i.imgur.com/vwhyKP2.png"></img></div>
      <div className='home-fact1'>
        <span id='fact1'>130,000+</span><br />public charging stations in U.S.
        </div>
      <div className='home-fact2'>$5 avg spend for 100+ miles of charge range</div>
      <div className='home-fact3'>80% battery for 30 minutes of charging</div>
      <div className='home-fact4'>95% uptime for charging stations</div>
      <div className='home-fact5'>3 types of charging speeds</div>
      <div className='home-bottom-left'>
        <img id="home-image-bottom" src="https://i.imgur.com/RZ5Nb2Z.png"></img>
      </div>
      <div className='home-bottom-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero mauris, dictum nec tristique vel, faucibus at tellus. Vivamus non lacinia justo. Pellentesque eget ex accumsan, egestas nulla ac, dictum metus.</div>
    </div>
        </>
    )
}

export default Home;