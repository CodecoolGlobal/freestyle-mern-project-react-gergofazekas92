import express from 'express'
import mongoose from 'mongoose'
import Review from './models/Review.js'

mongoose.connect('mongodb+srv://konkolygergo:Wq9d3YoieOgGUxx8@cluster0.tcfrltf.mongodb.net/')

const app = express()
app.use(express.json())

app.get('/api/reviews', async (req, res) => {
  const reviews = await Review.find()
  res.send(reviews)
})

app.post('/api/reviews', (req, res) => {
  const name = req.body.name
  const comment = req.body.review
  const rating = req.body.rating
  const createdAt = Date.now()
  const review = new Review({ name, comment, rating, createdAt })
  review.save()
})


app.listen(3000, () => {
  console.log('Server running on: http://localhost:3000')
})