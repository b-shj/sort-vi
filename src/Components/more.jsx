import React from 'react'
import './../app.css'

const More = () => {
  return (
    <div className='desc-container'>
      <div className="sort-description">
        <h1 className="title">Bubble Sort</h1>
        <p className="description">Bubble Sort is overall the simplest and most straightforward sorting algorithm. It uses a brute force technique that checks every element against its neighbor, swapping them if they are out of order. The algorithm iterates through the array until it is sorted. It is a comparison sort, and is named for how elements will bubble to the top or bottom. It is also generally the least efficient sorting algorithm in terms of time complexity.
        </p>
        <p className="time-complexity extras">Average Time Complexity: <span className='special'>O(n<sup>2</sup>)</span></p>
        <p className="time-complexity extras">Worst Case Time Complexity: <span className='special'>O(n<sup>2</sup>)</span></p>
        <p className="extras">Links:  <a className='special' href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank">Wikipedia</a> - <a className='special' href="https://www.youtube.com/watch?v=6Gv8vg0kcHc" target="_blank">Hackerrank Tutorial</a> - <a className='special' href="https://www.youtube.com/watch?v=xli_FI7CuzA" target="_blank">2 Minute Breakdown</a></p>
      </div>
      <div className="sort-description">
        <h1 className="title">Merge Sort</h1>
        <p className="description">Merge Sort is a more complex and efficient sorting algorithm. It works by a divide and conquer method which breaks the larger list into <i>n</i> sublists, and sorts those separately. The algorithm then merges theses sublists into larger ones and separates those separately until the list is finally sorted. Invented by John von Neumann in 1945, this divide and conquer algorithm is named for the process of merging smaller sublists during the sorting process. It boasts a rather efficient time complexity and is generally implemented recursively. 
        </p>
        <p className="time-complexity extras">Average Time Complexity: <span className='special'>O(n log n)</span></p>
        <p className="time-complexity extras">Worst Case Time Complexity: <span className='special'>O(n log n)</span></p>
        <p className="extras">Links: <a className='special' href="https://en.wikipedia.org/wiki/Merge_sort" target="_blank">Wikipedia</a> - <a className='special' href="https://www.youtube.com/watch?v=KF2j-9iSf4Q" target="_blank">Hackerrank Tutorial</a> - <a className='special' href="https://www.youtube.com/watch?v=4VqmGXwpLqc" target="_blank">3 Minute Breakdown</a></p>
      </div>
      <div className="sort-description">
        <h1 className="title">Quick Sort</h1>
        <p className="main-description">
          Quick Sort is a very efficient divide and conquer sorting algorithm that is also 
          commonly referred to as partition-exchange sort. It was developed by
          Tony Hoare in 1959, and works by sorting sublists depending on their relation to the "pivot" element. 
          The algorithm, which is a comparison sort that is commonly implemented recursively, has the 
          potential of outperforming other popular sorting algorithms by two to three times.
        </p>
        <p className="extras">Average Time Complexity: <span>O(n log n)</span></p>
        <p className="extras">Worst Case Time Complexity: <span>O(n log n)</span></p>
        <p className="extras">Links: <a className='special' href="https://en.wikipedia.org/wiki/Quicksort" target="_blank">Wikipedia</a> - <a className='special' href="https://www.youtube.com/watch?v=SLauY6PpjW4" target="_blank">Hackerrank Tutorial</a> - <a className='special' href="https://www.youtube.com/watch?v=Hoixgm4-P4M" target="_blank">4 Minute Breakdown</a></p>
      </div>
      <div className="sort-description">
        <h1 className="title">Insertion Sort</h1>
        <p className="main-description">
          Insertion sort is a simple sorting algorithm that builds the final sorted array, one item at a time by comparisons. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. It is stable, in-place algorithm. Efficient for (quite) small data sets much like other quadratic sorting algorithms.
        </p>
        <p className="extras">Average Time Complexity: <span>O(n<sup>2</sup>)</span></p>
        <p className="extras">Worst Case Time Complexity: <span>O(n<sup>2</sup>)</span></p>
        <p className="extras">Links: <a className='special' href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank">Wikipedia</a> - <a className='special' href="https://www.youtube.com/watch?v=i-SKeOcBwko" target="_blank">mycodeschool Tutorial</a> - <a className='special' href="https://www.youtube.com/watch?v=JU767SDMDvA" target="_blank">2 Minute Breakdown</a></p>
      </div>
    </div>
  )
}

export default More
