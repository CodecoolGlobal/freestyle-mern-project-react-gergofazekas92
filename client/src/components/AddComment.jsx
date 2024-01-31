import React, { useState } from 'react'

function AddComment() {
  const [name, setName] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      name,
      review,
      rating,
    }
    await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
  }

  const handleNameChange = (value) => {
    setName(value)
    console.log(value)
  }

  const handleReviewChange = (value) => {
    setReview(value)
    console.log(value)
  }

  const handleRatingChange = (value) => {
    if (value > 5) {
      value = 5
    } else if (value < 1) {
      value = 1
    }
    setRating(value)
    console.log(value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Type your name...' type='text' value={name} onChange={e => handleNameChange(e.target.value)}></input>
        <input placeholder='Type your review...' type='text' value={review} onChange={e => handleReviewChange(e.target.value)}></input>
        <input placeholder='Rate...' type='number' value={rating} onChange={e => handleRatingChange(e.target.value)} min='1' max='5'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddComment