import React, { useEffect, useState } from 'react'

function ListComments() {
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/reviews')
      const data = await response.json()
      console.log(data)
      setReviews(data)
    }
    fetchData()
  }, [])

  return (
    <div>
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