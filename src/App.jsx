import { useState } from 'react'
import supervisor from './assets/icon-supervisor.svg'
import calculator from './assets/icon-calculator.svg'
import karma from './assets/icon-karma.svg'
import team from './assets/icon-team-builder.svg'
import './App.css'

function App() {

  return (
    <>
   <div className="container">
    <header>
      <h1 className='head1'>Reliable, efficient delivery</h1>
      <h2 className='head2'>Powered by Technology</h2>
      <p>Our Artificial intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    </header>
    <main>
      <div className='box supervisor'>
        <div>
        <h3>Supervisor</h3>
        <p>Monitors activity to identify project roadblocks</p>
       </div>
       <div> <img src={supervisor} alt="Not found" /></div>
      </div>

   
        <div className='box team'>
          <div>
           <h3>Team Builder</h3>
        <p>Scans our talent network to create the optimal team for your projects</p>
       </div>
       <div> <img src={team} alt="" /></div>
        </div>
        <div className='box karma'>
          <div>
           <h3>Karma</h3>
        <p>Regilarly evaluates our talent to ensure quality</p>
        </div>
        <div><img src={karma} alt="" /></div>
        </div>
       



      <div className='box calculator'>
        <div>
         <h3>Calculator</h3>
        <p>Uses data from past projects to provide better delivery estimates</p>
        </div>
        <div><img src={calculator} alt="" /></div>
      </div>

</main>
    </div>
    </>
  )
}

export default App
