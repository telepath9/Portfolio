/*import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'*/

import teleLogo from "./assets/tele.webp"
import './App.css'
import ColorButton from "./functions.tsx"
import {Avatar, CounterButton, SVGcomponent} from "./functions.tsx"

import bambuIcon from "./assets/bambulab.svg"
import githubIcon from "./assets/github.svg"
import linkedinIcon from "./assets/linkedin.svg"
 
function App() {


  

  return(<>


      <svg style={{display: "none"}}>
        <symbol id="c_icon" fill="none" viewBox="0 0 600 600">
          <path fill="#A9B9CB" d="M566.6 176.4q0-15-6.5-26.7a51 51 0 0 0-19.3-18.8L327.8 8.1a52 52 0 0 0-56.7.5C242.8 25.3 101.3 106.5 59 131a49 49 0 0 0-25.7 45.5v247.2q0 14.8 6.2 26.2A51 51 0 0 0 59.2 469c42.1 24.4 183.6 105.6 211.9 122.3a52 52 0 0 0 56.7.5l213-122.8a51 51 0 0 0 19.6-19.4 53 53 0 0 0 6.3-26.1z"/>
          <path fill="#7F8B99" d="M327.3 8.6a52 52 0 0 0-56.6.6c-28.2 16.6-169.5 97.5-211.6 122a49 49 0 0 0-25.7 45.3V423a53 53 0 0 0 6.2 26A51 51 0 0 0 59 468.5l42 24.2L491 103z"/>
          <path fill="#fff" d="m355.1 262.4 83 .6c0-34.6-35-119.2-135.3-119.2-64 0-150 40.6-150 157.5 0 116.8 84.3 155 150 155 106.2 0 131.6-73.6 131.6-115.2l-79.1-4.5s2 48-53 48c-50.8 0-59.3-62.2-59.3-83.3 0-32.2 11.5-83.9 59.3-83.9 47.9 0 52.8 45 52.8 45"/>
        </symbol>

        <symbol id="cpp_icon" fill="none" viewBox="0 0 600 600">
          <path fill="#649AD2" d="M566.9 176.4q0-15-6.5-26.7A51 51 0 0 0 541 131L327.8 8.1a52 52 0 0 0-56.7.5C242.8 25.3 101 106.5 58.9 131a49 49 0 0 0-25.8 45.5v247.2q0 14.8 6.2 26.2A51 51 0 0 0 59 469c42.2 24.4 183.9 105.6 212.2 122.3a52 52 0 0 0 56.7.5Q434.5 530.3 541.2 469a51 51 0 0 0 19.6-19.4 53 53 0 0 0 6.2-26.1z"/>
          <path fill="#004482" d="M300.8 299.2 39.3 449.8A51 51 0 0 0 59 469c42.2 24.4 183.9 105.6 212.2 122.3a52 52 0 0 0 56.7.5Q434.5 530.3 541.2 469a51 51 0 0 0 19.6-19.4z"/><path fill="#1A4674" d="M223.4 343.8a88.2 88.2 0 0 0 153.5-.5l-76-44.1z"/>
          <path fill="#01589C" d="M566.9 176.4q0-15-6.5-26.7L300.8 299.2l259.9 150.5a53 53 0 0 0 6.2-26.1z"/>
          <path fill="#fff" d="M552.6 310h-20.3v20.3H512V310h-20.3v-20.3H512v-20.4h20.3v20.4h20.3zM300 122.7c65 0 121.7 35 152.6 87l1 1.6-77.2 44.4a88.2 88.2 0 1 0 0 88.5l.5-1 77 44.7A177.2 177.2 0 1 1 300 122.7m158.2 146.6v20.4h20.3V310h-20.3v20.3h-20.3V310h-20.3v-20.3h20.3v-20.4z"/>
        </symbol>

        <symbol id="java_icon" fill="none" viewBox="0 0 600 600">
            <path fill="#5382A1" d="M221.3 464s-23 13.3 16.3 17.9c47.5 5.4 71.8 4.6 124.2-5.3 0 0 13.8 8.6 33 16.1-117.4 50.3-265.8-3-173.5-28.7M207 398.3s-25.8 19 13.5 23.1c50.8 5.3 90.9 5.7 160.3-7.7 0 0 9.6 9.8 24.7 15-142 41.6-300.2 3.4-198.6-30.4"/>
            <path fill="#E76F00" d="M327.9 286.9c29 33.3-7.6 63.3-7.6 63.3s73.5-38 39.7-85.4c-31.5-44.3-55.7-66.4 75.2-142.3 0 0-205.4 51.3-107.3 164.4"/><path fill="#5382A1" d="M483.3 512.6s17 14-18.7 24.8c-67.8 20.5-282.2 26.7-341.8.8-21.4-9.3 18.8-22.2 31.4-25 13.2-2.8 20.7-2.3 20.7-2.3-23.8-16.7-153.9 33-66 47.2 239.4 38.8 436.5-17.5 374.4-45.5m-251-182.3s-109 25.9-38.6 35.3c29.7 4 89 3 144.2-1.6 45.1-3.8 90.5-11.9 90.5-11.9s-16 6.8-27.5 14.7c-110.7 29.1-324.6 15.6-263-14.2 52-25.2 94.4-22.3 94.4-22.3M428 439.6c112.5-58.5 60.4-114.7 24.1-107.1a84 84 0 0 0-12.9 3.4s3.3-5.1 9.6-7.4c72-25.3 127.2 74.5-23.2 114 0 0 1.8-1.5 2.3-2.9"/>
            <path fill="#E76F00" d="M360 0s62.4 62.4-59 158.3c-97.5 76.9-22.3 120.8-.1 170.9-56.9-51.3-98.6-96.5-70.6-138.5C271.3 129 385.2 99 360 0"/><path fill="#5382A1" d="M243.3 598.1c108.1 7 274-3.8 278-55 0 0-7.6 19.4-89.3 34.8-92.3 17.4-206 15.4-273.5 4.2 0 0 13.8 11.5 84.8 16"/>   
        </symbol>

        <symbol id="html_icon" fill="none" viewBox="0 0 600 600">
          <path fill="#f16529" d="M516.3 540 564.5 0h-529l48.1 540 216 60zm-310-363.4 6 67.8h241.4l-1.6 17.8-16.6 185.6L300 485.4h-.3L164 447.8l-9.3-104h66.5l4.7 52.8 73.8 20 74-20 7.6-86H151.8l-17.9-200.2h331.8l-6 66.2z"/>
        </symbol>

        <symbol id="css_icon" fill="none" viewBox="0 0 600 600">
          <path fill="#264DE4" d="m236.5 571.4 273-90.6L600 28.6H88.8L69.3 129.5H479l-12.7 64.4H55.9L36 295h409.7l-22.5 115.4-165.4 54.1-142.8-54 9.7-50.5h-101L0 480.9z"/>
        </symbol>

        <symbol id="js_icon" fill="none" viewBox="0 0 600 600">
          <g clip-path="url(#devicon-javascript-1-a)">
            <path fill="#F7DF1E" d="M0 0h600v600H0z"/>
            <path fill="#000" d="m157.8 501.4 45.9-27.8c8.8 15.7 16.9 29 36.2 29 18.5 0 30.2-7.2 30.2-35.4V275.5h56.4V468c0 58.4-34.2 85-84.2 85-45 0-71.2-23.4-84.5-51.6m199.3-6 46-26.6c12 19.7 27.7 34.2 55.5 34.2 23.4 0 38.3-11.7 38.3-27.8 0-19.3-15.3-26.2-41-37.4l-14.2-6c-40.7-17.4-67.6-39.1-67.6-85 0-42.3 32.2-74.6 82.5-74.6 35.9 0 61.6 12.5 80.2 45.1l-44 28.2c-9.6-17.3-20-24.1-36.2-24.1-16.5 0-27 10.4-27 24.1 0 17 10.5 23.8 34.7 34.3l14 6c48 20.6 75 41.5 75 88.6 0 50.8-39.9 78.6-93.5 78.6-52.3 0-86.1-25-102.7-57.6"/>
          </g>
          <defs>
            <clipPath id="devicon-javascript-1-a">
              <path fill="#fff" d="M0 0h600v600H0z"/>
            </clipPath>
          </defs>
        </symbol>

        <symbol id="ts_icon" fill="none" viewBox="0 0 600 600">
          <g clip-path="url(#devicon-typescript-icon-1-a)">
              <path fill="#3178C6" d="M46.9 0H553c26 0 46.9 21 46.9 46.9V553c0 26-21 46.9-46.9 46.9H47C20.9 600 0 579 0 553.1V47C0 20.9 21 0 46.9 0"/>
              <path fill="#fff" d="M352.8 469.9v64.7q15.8 8 37.3 12.1 21.6 4 45.5 4 23.3 0 44.2-4.4t36.8-14.6a75 75 0 0 0 25-26.7q9.2-16.5 9.2-40.8 0-17.6-5.3-30.8a72 72 0 0 0-15.2-23.6q-9.9-10.3-23.8-18.5a255 255 0 0 0-31.2-15.5 395 395 0 0 1-23-10.2 116 116 0 0 1-17.1-10.1 44 44 0 0 1-11-11 23 23 0 0 1-3.8-13q0-6.7 3.4-12 3.5-5.4 9.8-9.2a52 52 0 0 1 15.3-6q9.2-2.1 20.3-2.1a129 129 0 0 1 35.2 5q9 2.4 17.7 6.3t16 8.9v-60.5q-15-5.7-32.4-8.4t-40.2-2.7q-23 0-43.7 5a111 111 0 0 0-36.3 15.4q-15.8 10.6-24.8 26.8a79 79 0 0 0-9.1 39q0 28.8 16.7 49.3T419 421q13.3 5.5 24.9 10.7 11.5 5.3 20 11 8.3 5.5 13.2 12.3a25 25 0 0 1 1.8 26.8 27 27 0 0 1-9.2 9.3 51 51 0 0 1-15.4 6.2 93 93 0 0 1-21.6 2.2 123 123 0 0 1-80-29.5m-108-161.1H328v-53.3H96v53.3h82.8V546h66z"/>
          </g>
          <defs>
            <clipPath id="devicon-typescript-icon-1-a">
              <path fill="#fff" d="M0 0h600v600H0z"/>
            </clipPath>
          </defs>  
        </symbol>

        <symbol id="react_icon" fill="none" viewBox="0 0 600 600">
          <path fill="#00D8FF" d="M493.3 206.1q-9.3-3.2-19.3-6l3-13.2c14.6-71 5-128.2-27.6-147-31.3-18-82.5.7-134.2 45.7q-7.5 6.6-15 13.7l-9.9-9.1c-54.1-48.1-108.5-68.4-141-49.5-31.3 18-40.6 71.8-27.4 139q1.8 9.8 4.4 20-11.5 3.2-22.2 7C40.6 228.6 0 263.4 0 299.4c0 37.2 43.6 74.5 109.7 97q7.9 2.8 16.2 5.2-2.7 11-4.7 21.4c-12.5 66-2.7 118.6 28.5 136.5 32.2 18.6 86.2-.5 138.9-46.5q6.2-5.4 12.5-11.5 8.1 7.8 16.2 14.8c51 43.8 101.4 61.6 132.5 43.5 32.2-18.6 42.7-75 29.1-143.6q-1.5-7.9-3.6-16l11.2-3.5C555.2 374 600 337.2 600 299.5c0-36.1-41.9-71-106.7-93.4m-14.9 166.4-10 3.1q-11.7-36.2-30.5-76a601 601 0 0 0 29.2-74.9q9.3 2.7 17.9 5.6c55.5 19.2 89.4 47.4 89.4 69.2 0 23.2-36.6 53.3-96 73m-24.6 48.8a217 217 0 0 1 2.8 79.2c-3.5 19.3-10.7 32.1-19.6 37.2-19 11-59.3-3.2-103-40.8q-7.5-6.5-15-13.7 25.4-27.9 50.3-63.9c29-2.6 56.4-6.8 81.2-12.5zM204.6 536c-18.5 6.5-33.2 6.7-42.1 1.5-19-10.9-26.8-53-16-109.5q1.7-9.8 4.3-20a603 603 0 0 0 80.8 11.7 624 624 0 0 0 51.6 63.7q-5.8 5.5-11.5 10.5a217 217 0 0 1-67.1 42M118 372.3a217 217 0 0 1-70-37.1c-14.9-12.8-22.4-25.4-22.4-35.7 0-21.9 32.6-49.7 87-68.7q9.8-3.4 20.6-6.5 11.3 37 29.2 75.8c-12 26.2-22 52.2-29.6 76.9q-7.5-2.2-14.8-4.7M147 175c-11.3-57.7-3.8-101.1 15-112 20.1-11.7 64.5 4.9 111.3 46.4l9 8.3a614 614 0 0 0-51 63.3 626 626 0 0 0-80.2 12.4q-2.3-9.3-4-18.4m258.8 63.9q-9-15.5-18.2-30 28.8 3.6 54.7 9.5A548 548 0 0 1 423 270a892 892 0 0 0-17.3-31.2M300.3 136a548 548 0 0 1 35.3 42.6 755 755 0 0 0-71 0 566 566 0 0 1 35.7-42.6M194 239a757 757 0 0 0-17 31 566 566 0 0 1-19-52q25.6-5.8 54.4-9.3Q203 223.5 194 239m19 153a545 545 0 0 1-55.4-8.9 576 576 0 0 1 19.5-53 754 754 0 0 0 35.8 62m87.9 72.7a576 576 0 0 1-36.1-43.2 895 895 0 0 0 71.3 0 545 545 0 0 1-35.2 43.2m122.3-135.5q12 27.5 20.2 52.8-26.2 6-56 9.5a896 896 0 0 0 35.8-62.3m-39.6 19q-14 24.4-28.8 46.5a772 772 0 0 1-109.2.2 727 727 0 0 1-55-94.9 720 720 0 0 1 54.6-94.7 726 726 0 0 1 109.4 0 772 772 0 0 1 54.8 94.3q-11.7 24.2-25.8 48.6m53-286.2c20 11.6 27.8 58.3 15.2 119.6l-2.7 12a614 614 0 0 0-80.2-12.8 602 602 0 0 0-50.8-63.3l14-12.6c44.3-38.6 85.7-53.8 104.6-43M300 245.9a53.6 53.6 0 1 1 0 107.2 53.6 53.6 0 0 1 0-107.2"/>
        </symbol>

      </svg>


      <div className="grid_container" id="grid_contId">
        {/*<div id="h1div"> <h1 id="title1">My Portfolio</h1>
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
              
              <SVGcomponent svg_id={"c_icon"} name_to_display={"C"} size={50}></SVGcomponent>
              <SVGcomponent svg_id={"cpp_icon"} name_to_display={"C++"} size={50}></SVGcomponent>
              <SVGcomponent svg_id={"java_icon"} name_to_display={"Java"} size={50}></SVGcomponent>
              <SVGcomponent svg_id={"html_icon"} name_to_display={"HTML"} size={48}></SVGcomponent>
              <SVGcomponent svg_id={"css_icon"} name_to_display={"CSS"} size={48}></SVGcomponent>
              <SVGcomponent svg_id={"js_icon"} name_to_display={"JavaScript"} size={46}></SVGcomponent>
              <SVGcomponent svg_id={"ts_icon"} name_to_display={"TypeScript"} size={46}></SVGcomponent>
              <SVGcomponent svg_id={"react_icon"} name_to_display={"React"} size={50}></SVGcomponent>

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
