/*import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'*/

import teleLogo from "./assets/tele.webp"
import './App.css'
import {Avatar, CounterButton} from "./functions.tsx"
import ColorButton from "./functions.tsx"

import bambuIcon from "./assets/bambulab.svg"
import githubIcon from "./assets/github.svg"
import linkedinIcon from "./assets/linkedin.svg"
 
function App() {

  return(<>
      <div className="grid_container" id="grid_contId">
        {/*<div id="h1div">
          <h1 id="title1">My Portfolio</h1>
        </div>*/}



        <div id="double_avatar" style={{gridArea: "box-1"}}> 
          <Avatar logoPath={teleLogo} size={120}></Avatar>

          <h2 id="name">Davide Montalbano  <br></br> @telepath</h2>
        </div>
       

        <section className='sections' style={{gridArea: "box-2"}}>
          <p className="title2">
              My links
          </p>
         
          <section className="basicCard" id="linkSection"> 
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
              <a className="links" href="https://www.linkedin.com/in/davide-montalbano-82ba1425a/">LinkedIn
                <img className="linkIcons" src={linkedinIcon} />
              </a>
            </div>

            </section>
          </section>
       
          <section className='sections' style={{gridArea: "box-3"}}>
            <p className="title2">
              My tech stack
            </p>
            <div className="techstack_icons">
              
              <svg width={50} height={50} fill="none" viewBox="0 0 600 600">
                <path fill="#A9B9CB" d="M566.6 176.4q0-15-6.5-26.7a51 51 0 0 0-19.3-18.8L327.8 8.1a52 52 0 0 0-56.7.5C242.8 25.3 101.3 106.5 59 131a49 49 0 0 0-25.7 45.5v247.2q0 14.8 6.2 26.2A51 51 0 0 0 59.2 469c42.1 24.4 183.6 105.6 211.9 122.3a52 52 0 0 0 56.7.5l213-122.8a51 51 0 0 0 19.6-19.4 53 53 0 0 0 6.3-26.1z"/>
                <path fill="#7F8B99" d="M327.3 8.6a52 52 0 0 0-56.6.6c-28.2 16.6-169.5 97.5-211.6 122a49 49 0 0 0-25.7 45.3V423a53 53 0 0 0 6.2 26A51 51 0 0 0 59 468.5l42 24.2L491 103z"/>
                <path fill="#fff" d="m355.1 262.4 83 .6c0-34.6-35-119.2-135.3-119.2-64 0-150 40.6-150 157.5 0 116.8 84.3 155 150 155 106.2 0 131.6-73.6 131.6-115.2l-79.1-4.5s2 48-53 48c-50.8 0-59.3-62.2-59.3-83.3 0-32.2 11.5-83.9 59.3-83.9 47.9 0 52.8 45 52.8 45"/>
              </svg>

              <svg width={50} height={50} fill="none" viewBox="0 0 600 600">
                <path fill="#649AD2" d="M566.9 176.4q0-15-6.5-26.7A51 51 0 0 0 541 131L327.8 8.1a52 52 0 0 0-56.7.5C242.8 25.3 101 106.5 58.9 131a49 49 0 0 0-25.8 45.5v247.2q0 14.8 6.2 26.2A51 51 0 0 0 59 469c42.2 24.4 183.9 105.6 212.2 122.3a52 52 0 0 0 56.7.5Q434.5 530.3 541.2 469a51 51 0 0 0 19.6-19.4 53 53 0 0 0 6.2-26.1z"/>
                <path fill="#004482" d="M300.8 299.2 39.3 449.8A51 51 0 0 0 59 469c42.2 24.4 183.9 105.6 212.2 122.3a52 52 0 0 0 56.7.5Q434.5 530.3 541.2 469a51 51 0 0 0 19.6-19.4z"/><path fill="#1A4674" d="M223.4 343.8a88.2 88.2 0 0 0 153.5-.5l-76-44.1z"/><path fill="#01589C" d="M566.9 176.4q0-15-6.5-26.7L300.8 299.2l259.9 150.5a53 53 0 0 0 6.2-26.1z"/>
                <path fill="#fff" d="M552.6 310h-20.3v20.3H512V310h-20.3v-20.3H512v-20.4h20.3v20.4h20.3zM300 122.7c65 0 121.7 35 152.6 87l1 1.6-77.2 44.4a88.2 88.2 0 1 0 0 88.5l.5-1 77 44.7A177.2 177.2 0 1 1 300 122.7m158.2 146.6v20.4h20.3V310h-20.3v20.3h-20.3V310h-20.3v-20.3h20.3v-20.4z"/>
              </svg>
              
              <svg width={50} height={50} viewBox="0 0 512 512"> {/*html5 icon*/}
                <path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"/>
            	  <path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"/>
            	  <path fill="#f16529" d="M256 480.5V131H404.3L376 447"/>
            	  <path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"/>
            	  <path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"/>
              </svg>

              <svg width={50} height={50} fill="none" viewBox="0 0 600 600"> {/*CSS5 icon*/}
                <path fill="#264DE4" d="m299.7 600-173.6-48.2L87.5 118h425l-38.7 433.8z"/><path fill="#2965F1" d="m440.7 524.1 33-370.7H300V563z"/>
                <path fill="#EBEBEB" d="m176.1 314.3 4.8 53.2H300v-53.2zm-9.5-107.7 4.8 53.2H300v-53.2zM300 452.5h-.2l-59.3-16-3.8-42.4h-53.4l7.4 83.6 109 30.3.3-.1z"/><path fill="#000" d="M187.5 0H252v27h-37.5v27H252v26.9h-64.5zm77.3 0h64.5v23.4h-37.5v4.7h37.5v54h-64.5V57.3h37.5v-4.7h-37.5zm77.4 0h64.4v23.4h-37.5v4.7h37.5v54h-64.4V57.3h37.5v-4.7h-37.5z"/>
                <path fill="#fff" d="m423.5 314.3 9.6-107.7H299.8v53.2h75l-4.8 54.5h-70.2v53.2h65.5l-6.1 69-59.4 16V508L409 477.7l.8-9 12.5-140z"/>
              </svg>

              <svg width={50} height={50} fill="none" viewBox="0 0 600 600">
                <g clip-path="url(#devicon-javascript-1-a)">
                  <path fill="#F7DF1E" d="M0 0h600v600H0z"/>
                  <path fill="#000" d="m157.8 501.4 45.9-27.8c8.8 15.7 16.9 29 36.2 29 18.5 0 30.2-7.2 30.2-35.4V275.5h56.4V468c0 58.4-34.2 85-84.2 85-45 0-71.2-23.4-84.5-51.6m199.3-6 46-26.6c12 19.7 27.7 34.2 55.5 34.2 23.4 0 38.3-11.7 38.3-27.8 0-19.3-15.3-26.2-41-37.4l-14.2-6c-40.7-17.4-67.6-39.1-67.6-85 0-42.3 32.2-74.6 82.5-74.6 35.9 0 61.6 12.5 80.2 45.1l-44 28.2c-9.6-17.3-20-24.1-36.2-24.1-16.5 0-27 10.4-27 24.1 0 17 10.5 23.8 34.7 34.3l14 6c48 20.6 75 41.5 75 88.6 0 50.8-39.9 78.6-93.5 78.6-52.3 0-86.1-25-102.7-57.6"/>
                </g>
                <defs>
                  <clipPath id="devicon-javascript-1-a">
                    <path fill="#fff" d="M0 0h600v600H0z"/>
                  </clipPath>
                </defs>
              </svg>
            
              <svg width={50} height={50} fill="none" viewBox="0 0 600 600">
                <g clip-path="url(#devicon-typescript-icon-1-a)">
                  <path fill="#3178C6" d="M46.9 0H553c26 0 46.9 21 46.9 46.9V553c0 26-21 46.9-46.9 46.9H47C20.9 600 0 579 0 553.1V47C0 20.9 21 0 46.9 0"/>
                  <path fill="#fff" d="M352.8 469.9v64.7q15.8 8 37.3 12.1 21.6 4 45.5 4 23.3 0 44.2-4.4t36.8-14.6a75 75 0 0 0 25-26.7q9.2-16.5 9.2-40.8 0-17.6-5.3-30.8a72 72 0 0 0-15.2-23.6q-9.9-10.3-23.8-18.5a255 255 0 0 0-31.2-15.5 395 395 0 0 1-23-10.2 116 116 0 0 1-17.1-10.1 44 44 0 0 1-11-11 23 23 0 0 1-3.8-13q0-6.7 3.4-12 3.5-5.4 9.8-9.2a52 52 0 0 1 15.3-6q9.2-2.1 20.3-2.1a129 129 0 0 1 35.2 5q9 2.4 17.7 6.3t16 8.9v-60.5q-15-5.7-32.4-8.4t-40.2-2.7q-23 0-43.7 5a111 111 0 0 0-36.3 15.4q-15.8 10.6-24.8 26.8a79 79 0 0 0-9.1 39q0 28.8 16.7 49.3T419 421q13.3 5.5 24.9 10.7 11.5 5.3 20 11 8.3 5.5 13.2 12.3a25 25 0 0 1 1.8 26.8 27 27 0 0 1-9.2 9.3 51 51 0 0 1-15.4 6.2 93 93 0 0 1-21.6 2.2 123 123 0 0 1-80-29.5m-108-161.1H328v-53.3H96v53.3h82.8V546h66z"/>
                </g>
                <defs>
                  <clipPath id="devicon-typescript-icon-1-a">
                    <path fill="#fff" d="M0 0h600v600H0z"/>
                  </clipPath>
                </defs>
              </svg>

              <svg width={50} height={50} fill="none" viewBox="0 0 600 600">
                <path fill="#00D8FF" d="M493.3 206.1q-9.3-3.2-19.3-6l3-13.2c14.6-71 5-128.2-27.6-147-31.3-18-82.5.7-134.2 45.7q-7.5 6.6-15 13.7l-9.9-9.1c-54.1-48.1-108.5-68.4-141-49.5-31.3 18-40.6 71.8-27.4 139q1.8 9.8 4.4 20-11.5 3.2-22.2 7C40.6 228.6 0 263.4 0 299.4c0 37.2 43.6 74.5 109.7 97q7.9 2.8 16.2 5.2-2.7 11-4.7 21.4c-12.5 66-2.7 118.6 28.5 136.5 32.2 18.6 86.2-.5 138.9-46.5q6.2-5.4 12.5-11.5 8.1 7.8 16.2 14.8c51 43.8 101.4 61.6 132.5 43.5 32.2-18.6 42.7-75 29.1-143.6q-1.5-7.9-3.6-16l11.2-3.5C555.2 374 600 337.2 600 299.5c0-36.1-41.9-71-106.7-93.4m-14.9 166.4-10 3.1q-11.7-36.2-30.5-76a601 601 0 0 0 29.2-74.9q9.3 2.7 17.9 5.6c55.5 19.2 89.4 47.4 89.4 69.2 0 23.2-36.6 53.3-96 73m-24.6 48.8a217 217 0 0 1 2.8 79.2c-3.5 19.3-10.7 32.1-19.6 37.2-19 11-59.3-3.2-103-40.8q-7.5-6.5-15-13.7 25.4-27.9 50.3-63.9c29-2.6 56.4-6.8 81.2-12.5zM204.6 536c-18.5 6.5-33.2 6.7-42.1 1.5-19-10.9-26.8-53-16-109.5q1.7-9.8 4.3-20a603 603 0 0 0 80.8 11.7 624 624 0 0 0 51.6 63.7q-5.8 5.5-11.5 10.5a217 217 0 0 1-67.1 42M118 372.3a217 217 0 0 1-70-37.1c-14.9-12.8-22.4-25.4-22.4-35.7 0-21.9 32.6-49.7 87-68.7q9.8-3.4 20.6-6.5 11.3 37 29.2 75.8c-12 26.2-22 52.2-29.6 76.9q-7.5-2.2-14.8-4.7M147 175c-11.3-57.7-3.8-101.1 15-112 20.1-11.7 64.5 4.9 111.3 46.4l9 8.3a614 614 0 0 0-51 63.3 626 626 0 0 0-80.2 12.4q-2.3-9.3-4-18.4m258.8 63.9q-9-15.5-18.2-30 28.8 3.6 54.7 9.5A548 548 0 0 1 423 270a892 892 0 0 0-17.3-31.2M300.3 136a548 548 0 0 1 35.3 42.6 755 755 0 0 0-71 0 566 566 0 0 1 35.7-42.6M194 239a757 757 0 0 0-17 31 566 566 0 0 1-19-52q25.6-5.8 54.4-9.3Q203 223.5 194 239m19 153a545 545 0 0 1-55.4-8.9 576 576 0 0 1 19.5-53 754 754 0 0 0 35.8 62m87.9 72.7a576 576 0 0 1-36.1-43.2 895 895 0 0 0 71.3 0 545 545 0 0 1-35.2 43.2m122.3-135.5q12 27.5 20.2 52.8-26.2 6-56 9.5a896 896 0 0 0 35.8-62.3m-39.6 19q-14 24.4-28.8 46.5a772 772 0 0 1-109.2.2 727 727 0 0 1-55-94.9 720 720 0 0 1 54.6-94.7 726 726 0 0 1 109.4 0 772 772 0 0 1 54.8 94.3q-11.7 24.2-25.8 48.6m53-286.2c20 11.6 27.8 58.3 15.2 119.6l-2.7 12a614 614 0 0 0-80.2-12.8 602 602 0 0 0-50.8-63.3l14-12.6c44.3-38.6 85.7-53.8 104.6-43M300 245.9a53.6 53.6 0 1 1 0 107.2 53.6 53.6 0 0 1 0-107.2"/>
              </svg>

            </div>
          </section>

          <section className='sections' style={{gridArea: "box-4"}}>
            <p className="title2">
            My interests
            </p>
            <section className="basicCard">

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
                <p className='theLabel'>3D modeling</p>
              </div>

            </section>

          </section>


          <div id="buttons" className="basicCard" style={{gridArea: "box-5"}}>
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
