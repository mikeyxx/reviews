import { useState } from 'react'
import people from './data'
import * as FaIcons from 'react-icons/fa'

const Reviews = () => {
    const [index, setIndex] = useState(0)
    const { name, image, job, text } = people[index]

    function checkValue(number) {
      if(number > people.length - 1) {
        return 0
      }
      if(number < 0) {
        return people.length - 1
      }
      return number
    }

    function nextReview() {
      setIndex((index) => {
        let newIndex = index + 1
        return checkValue(newIndex)
      });
    }

    function prevReview() {
      setIndex((index) => {
        let newIndex = index - 1
        return checkValue(newIndex)
      });
    }

    const randomPerson = () => {
      let randomNumber = Math.floor( Math.random() * people.length)
      if(randomNumber == index) {
        randomNumber = index + 1
      }
      setIndex(checkValue( randomNumber))

    }


  return (
    <article className='review'>
        <div className="img-container">
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
              <FaIcons.FaQuoteRight/>
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className='prev-btn' onClick={prevReview}>
            <FaIcons.FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextReview}>
            <FaIcons.FaChevronRight />
          </button>
          <button className='random-btn' onClick={randomPerson}>
            surprise me
          </button>
        </div>
    </article>
  )
}

export default Reviews