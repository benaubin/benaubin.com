import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <div className="card with-media">
      <iframe className="card-media" height="100%" src="https://www.youtube-nocookie.com/embed/xtMM_DcN4YQ?modestbranding=1&playsinline=1&color=white" frameBorder={"0"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    
    <div className="card">
      <h1>Ben Aubin</h1>

      <p>
        👋 Hi. I'm Ben Aubin. I craft <i>awesome</i> technology
        to make our world better.
      </p>

      <i style={{fontSize: "0.8em"}}>
        Student & <a href="https://hackclub.com/">Hack Club</a> leader at <a href="http://www.eayoungacademy.com/">EA Young Academy</a>
      </i>
    </div>

    <div className="card">
      <h2>In The News</h2>

      <p>
        <a href="https://www.wsj.com/articles/what-i-did-at-summer-camp-stocks-and-personal-finance-1528078200">Wall Street Journal</a><br/>
        "After his first entrepreneurial adventure at camp at 8—developing a duct-tape bracelet with his team,
        then selling it and coming home with a small check—he says he became a “startups” guy. This spring, on his own, he launched his third app, a tool to help young drivers with learner's permits track their hours behind the wheel."
      </p>
  
      <p>
        <a href="https://www.pitchakid.com/ben-aubin-founder-of-own-a-sheep-kid-entrepreneur-highlight/">Pitch-a-Kid</a>
      </p>

      <p>
        <a href="http://www.siliconhillsnews.com/2019/06/22/startups-showcase-their-ventures-at-masschallenge-texas-austin-2019-event/">Silicon Hills News</a>
      </p>
    </div>

    <div className="card">
      <h2>A Few Projects</h2>

      <p>
        <a href="https://moolahu.app">moolah by Moolah U</a><br/>
        Hands-on experience with money for future adults.
      </p>
  
      <p>
        <a href="http://byben.xyz/solve-words/"><code>solve-words</code></a><br/>
        Artificialy intelligent neural networks that word problems with computers.
      </p>

      <p>
        <a href="https://apps.apple.com/us/app/modern-driving-log/id1378720308">Modern Driving Log</a><br/>
        An app that helps teens get their driver's license.
      </p>

      <p>
        <a href="https://bijoudelmare.com">Bijou Del Mare</a><br/>
        An amazing store for hand-crafted jewelry.
      </p>

      <p>
        <a href="http://planhw.com">PlanHW (archived)</a><br/>
        Organization for modern students.
      </p>
    </div>

    <div className="card">
      <h2>Work With Me</h2>
      <p>
        My team and I are always looking for exciting projects. Meet my agency
        at <a href="https://bensites.com">bensites.com</a>.
      </p>
    </div>

    <div className="card">
      <h2>Writings</h2>
      
      <p>
        <a href="https://docs.google.com/document/d/1zVgf5JmcxWKTeKl7QaSNr0f9yNlIET4zseYCf5Y5ub0/edit?usp=sharing">
          The Effectiveness of Game-Based Learning
        </a>
      </p>
      <p>
        <a href="https://docs.google.com/document/d/1OY74ldZkVdzbrooayzalMe5ehOmB1UeQkUraeBGi75Y/edit?usp=sharing">
          The Politics and Policies Of Environmentalism
        </a>
      </p>
    </div>

    <div className="card">
      <h2>Find Me</h2>

      <ul className="socials">
        <li>
          <a href="https://www.github.com/BenAubin">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com/@BenAubin_">Twitter</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/benaubin/">LinkedIn</a>
        </li>
        <li>
          <a href="https://keybase.io/penne">Keybase</a>
        </li>
      </ul>
    </div>

    <footer>
      <p>© Copyright 2019 Ben Aubin</p>
      <p>
        <a href="https://github.com/benaubin/benaubin.com">Open Source</a>
        &nbsp;under the&nbsp;
        <a href="https://github.com/benaubin/benaubin.com/blob/master/LICENSE">MIT License</a>
      </p>
    </footer>
  
    <style jsx>{`

      footer {
        text-align: center;
        color: white;

        width: 90vw;
        max-width: 30rem;

        margin: 0 auto;
      }

      footer p {
        text-align: center;
      }

      .socials {
        list-style: none;
        padding: 0;

        display: flex;
        flex-wrap: 1;
      }
      .socials li {
        padding: 0.5rem;
      }
      p {
        line-height: 1.4em;
      }

      h2::after {
        position: relative;

        margin-top: 0.5rem;

        content: "";
        display: block;

        width: 5rem;

        border-bottom: 0.3rem solid #0E1116;
      }

      h1::after {
        position: relative;

        margin-top: 0.5rem;

        content: "";
        display: block;

        width: 5rem;

        border-bottom: 0.5rem solid #0E1116;
      }

      .card {
        position: relative;

        width: 90vw;
        max-width: 30rem;

        margin: 3rem auto;

        padding: 3rem;

        border-radius: 1rem;

        box-sizing: border-box;

        background: white;

        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: box-shadow 1s ease-out;
      }
      .card:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      }

      .card.with-media {
        overflow: hidden;
        height: 20rem;
      }

      .card-media {
        position: absolute;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        min-width: 100%;
        min-height: 100%;
      }
    `}</style>
  </div>
)

export default Home
