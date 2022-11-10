import React from 'react'
import './styles.css'

const About = () => {
  return (
    <div className='wrapper'>
      <div className='abt-content'>
        <h1 className='title'>About Sort∙<span className='oblique'>vi</span></h1>
        <p>
            Sorty∙<span className='oblique'>Vi</span> is a visualizer for some of the basic and commonly used sorting algorithms: Bubble Sort, Merge Sort, Insertion Sort and Quick Sort. The app is built using React hooks, UseState and UseEffect. It is designed to clearly visualize the way that each algorithm attempts to sort unordered arrays/lists. More info about each algorithm and their technicalities can be found on the More page.
        </p>
      </div>
      <p><span className='extras'>GitHub repository: </span> 
        <a className="special" href="http://www.github.com/b-shj/sort-vi">Sort∙<span className='oblique'>Vi</span></a> 
      </p>
      <p><span className='extras'>Developed By:</span><span className='special'> Sahaja Belaganti </span></p>
      <p className='credit'>Merge Sort implementation inspired by Clément Mihailescu</p>
    </div>
  )
}

export default About

