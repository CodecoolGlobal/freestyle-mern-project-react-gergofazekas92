import React, { useEffect, useState } from 'react'

function ListComments({ recipe }) {
  const [reviews, setReviews] = useState(null)
  const [name, setName] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')

  const fetchData = async () => {
    const response = await fetch('/api/reviews')
    const data = await response.json()
    const filteredComments = data.filter(comment => comment.recipeName === recipe)
    console.log(filteredComments)
    setReviews(filteredComments)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleNameChange = (value) => {
    setName(value)
  }

  const handleReviewChange = (value) => {
    setReview(value)
  }

  const handleRatingChange = (value) => {
    if (value > 5) {
      value = 5
    } else if (value < 1) {
      value = 1
    }
    setRating(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      recipeName: recipe,
      name,
      review,
      rating,
    }
    await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    await fetchData()
    setName('')
    setRating('')
    setReview('')
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input placeholder='Type your name...' type='text' value={name} onChange={e => handleNameChange(e.target.value)}></input><br />
        <input className='ratingBox' placeholder='Rate...' type='number' value={rating} onChange={e => handleRatingChange(e.target.value)} min='1' max='5'></input><br />
        <textarea size='40' className='textBox' placeholder='Type your comment...' type='text' value={review} onChange={e => handleReviewChange(e.target.value)}></textarea>
        <br/>
        <button>Submit</button>
        
      </form>
      {reviews && reviews.map((review, index) => (
        <div className='comment' key={index}>
          <div className='commentName'>{review.name}</div>
          <div className='commentContent'>"{review.comment}"</div>
          <div className='commentRate'>Rating: {review.rating}</div>
          <div className='commentDate'>{review.createdAt.substring(0, 10)}</div>
        </div>
      ))}
    </div>
  )
}

export default ListComments