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
        I create software and run businesses. Code, carefully cultivated, can make the world better. Let's make that happen.
      </p>
 
      <p>
        Currently working on <a href="https://actors.dev/">actors.dev</a>.
      </p>
      
      <p>
        I'm the CEO & Co-Founder of <a href="https://mintere.com/">Mintere</a>.
      </p>

      <p>
        I go to school at <a target="_blank" href="http://www.eayoungacademy.com/">EA Young Academy</a>.
      </p>

      <hr/>

      <ul className="socials">
        <li>
          <a target="_blank" href="https://www.github.com/BenAubin">GitHub</a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/@BenAubin_">Twitter</a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/benaubin/">LinkedIn</a>
        </li>
        <li>
          <a target="_blank" className="keybase" href="https://keybase.io/penne">Keybase</a>
        </li>
      </ul>
    </div>

    <div className="card">
      <h2>In the news</h2>

      <p>
        <a target="_blank" href="https://www.wsj.com/articles/what-i-did-at-summer-camp-stocks-and-personal-finance-1528078200">Wall Street Journal</a><br/>
        "After his first entrepreneurial adventure at camp at 8—developing a duct-tape bracelet with his team,
        then selling it and coming home with a small check—he says he became a “startups” guy. This spring, on his own, he launched his third app, a tool to help young drivers with learner's permits track their hours behind the wheel."
      </p>
  
      <p>
        <a target="_blank" href="https://www.pitchakid.com/ben-aubin-founder-of-own-a-sheep-kid-entrepreneur-highlight/">Pitch-a-Kid</a>
      </p>

      <p>
        <a target="_blank" href="http://www.siliconhillsnews.com/2019/06/22/startups-showcase-their-ventures-at-masschallenge-texas-austin-2019-event/">Silicon Hills News</a>
      </p>
    </div>

    <div className="card">
      <h2>A few projects</h2>

      <p>
        <a target="_blank" href="https://mintere.com/">Mintere</a><br/>
        I'm the CEO & Co-Founder of Mintere. We create marketing software & strategy
        for businesses of all sizes.
      </p>
      
      <p>
        <a target="_blank" href="https://moolahu.app">moolah by Moolah U</a><br/>
        In Summer 2019, I led the development of an app to give young people hands-on experience with money.
      </p>

      <p>
        <a target="_blank" href="https://apps.apple.com/us/app/modern-driving-log/id1378720308">Modern Driving Log</a><br/>
        In Summer 2018, I launched an app that helps teens get their driver's license.
      </p>

      <p>
        <a target="_blank" href="http://planhw.com">PlanHW (archived)</a><br/>
        In 2016 & 2017, I ran an online homework planner for modern students.
      </p>
    </div>

    <div className="card">
      <p><i>"You are awesome... I appreciate your involvement and enthusiasm. We are fortunate to have you!”</i> - Gayle Reaume, Moolah U</p>
      <p><i>"Patient. Quick. Knowledgeable. Helpful. I couldn’t be happier!"</i> - Christine Augustine, Bijou Del Mare</p>
    </div>

    <div className="card">
      <h2>Research</h2>
      
      <p>
        Aubin, B., Rugh, M. S., Raymond, C., & Greer, M. (2021, February 3–5). Deep metric learning to evaluate student performance on standardized tests [Paper presentation]. Accepted for presentation at the 44th Annual Southwest Educational Research Association (SERA) Conference, Virtual/Online.
      </p>

      <p>
        <a target="_blank" href="https://figshare.com/articles/SolveWords_An_Algorithm_for_Automatically_Solving_Mathematical_Word_Problems_with_Machine_Learning/11340185"><code>solve-words</code></a><br/>
        An Algorithm for Automatically Solving Mathematical Word Problems with Machine Learning
      </p>

      <p>
        <a target="_blank" href="https://docs.google.com/document/d/1zVgf5JmcxWKTeKl7QaSNr0f9yNlIET4zseYCf5Y5ub0/edit?usp=sharing">
          The Effectiveness of Game-Based Learning
        </a>
      </p>
    </div>

    <footer>
      <p>© Copyright 2020 Ben Aubin</p>
    

      <p>
        <a target="_blank" href="https://github.com/benaubin/benaubin.com">Open Source</a>
        &nbsp;under the&nbsp;
        <a target="_blank" href="https://github.com/benaubin/benaubin.com/blob/master/LICENSE">MIT License</a>
      </p>  

      <p style={{fontFamily: "'Source Code Pro', monospace", fontSize: "10px"}}>
        PGP: <a target="_blank" href="https://keybase.io/penne/pgp_keys.asc">8AF8 4D61 D3B2 C22D</a>
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

      @media(max-width: 33rem) {
        .keybase {
          display: none;
        }
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
