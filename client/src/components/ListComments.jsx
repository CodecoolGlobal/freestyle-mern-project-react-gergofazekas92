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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Type your name...' type='text' value={name} onChange={e => handleNameChange(e.target.value)}></input><br />
        <input placeholder='Rate...' type='number' value={rating} onChange={e => handleRatingChange(e.target.value)} min='1' max='5'></input><br />
        <input placeholder='Type your review...' type='text' value={review} onChange={e => handleReviewChange(e.target.value)}></input>
        <button>Submit</button>
      </form>
      {reviews && reviews.map((review, index) => (
        <div key={index}>
          <div>Name: {review.name} - Comment: {review.comment} - Rating: {review.rating}</div>
          <div>Created: {review.createdAt.substring(0, 10)}</div>
        </div>
      ))}
    </div>
  )
}

export default ListComments