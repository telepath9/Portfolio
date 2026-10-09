/*import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'*/

import teleLogo from "./assets/tele.webp"
import './App.css'
import {Avatar, CounterButton} from "./functions.tsx"
import ColorButton from "./functions.tsx"


import htmlIcon from "./assets/html-5.svg"
import jsIcon from "./assets/javascript.svg"
import cssIcon from "./assets/css.svg"
import tsIcon from "./assets/typescript-icon.svg"
import cIcon from "./assets/c.svg"
import cppIcon from "./assets/cpp.svg"
import reactIcon from "./assets/react.svg"
import bambuIcon from "./assets/bambulab.svg"
import githubIcon from "./assets/github.svg"
import linkedinIcon from "./assets/linkedin.svg"

function App() {

  return(<>
      <div id="flex_contId" className="flex_container">
        {/*<div id="h1div">
          <h1 id="title1">My Portfolio</h1>
        </div>*/}

        <div id="double_avatar"> 
          <Avatar logoPath={teleLogo} size={120}></Avatar>
          <h2 id="name">Davide Montalbano  <br></br> a.k.a. telepath</h2>
        </div>

        <section className='sections'>
          <p className="title2">
              My links
          </p>
         
          <section className="basicCard"> 
            <div className='singleLink'>
              <a className="links" href="https://telepath9.github.io/ESPclock/">ESPclock Web Flasher</a>
            </div>

            <div className='singleLink'>
              <a className="links" href="https://github.com/telepath9/ESPclock">ESPclock on Github
              <img className='linkIcons' src={githubIcon} />
              </a>
              
            </div>

            

            <div className='singleLink'>
              <a className="links" href="https://makerworld.com/en/@telepath" >MakerWorld 
                <img className="linkIcons" id="bambu" src={bambuIcon} />
              </a>
              
            </div>  

            <div className='singleLink'>
              <a href="https://www.linkedin.com/in/davide-montalbano-82ba1425a/">LinkedIn
                <img className="linkIcons" src={linkedinIcon} />
              </a>
            </div>

            </section>
          </section>
       
          <section className='sections'>
            <p className="title2">
              My tech stack
            </p>
            <div className="lang_icons">
              <img className='icons' src={cIcon} />
              <img className='icons' src={cppIcon} />
              <img className='icons' src={htmlIcon} />
              <img className='icons' src={cssIcon} />
              <img className='icons' src={jsIcon} />
              <img className='icons' src={tsIcon} />
              <img className='icons' src={reactIcon} />

            </div>
          </section>

          <section className='sections'>
            <p className="title2">
            My interests
            </p>
            <div className="basicCard">

              <div className='singleLabel'>
                <p className='theLabel' >Web developement</p>
              </div>

              <div className='singleLabel'>
                <p className='theLabel'>Embedded developement</p>
              </div>

              <div className='singleLabel'>
                <p className='theLabel'>UI/UX design</p>
              </div>

              <div className='singleLabel'>
                <p className='theLabel'>3D printing</p>
              </div>
              
              <div className='singleLabel'>
                <p className='theLabel'>3D Modeling</p>
              </div>

              

            </div>

          </section>


          <div id="buttons" className="basicCard">
           <ColorButton >
           </ColorButton>
          
          <CounterButton >
          </CounterButton>


   
          </div>

        
      </div>





  </>
  )
  }





  /*
  const [count, setCount] = useState(0)
  return (
    <>
    
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}*/

export default App
