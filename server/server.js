import express from 'express'
import mongoose from 'mongoose'
import Review from './models/Review.js'
import Favourite from './models/Favourite.js'

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

app.get("/api/favourites", async (req, res) => {
  try {
    const favourites = await Favourite.find();
    res.json(favourites)
  } catch (error) {
    console.error("Error fetching favourites", error)
  }
});

app.post('/api/favourites', async (req, res) => {
  const name = req.body.fav
  const img = req.body.img
  const cal = req.body.cal
  const type = req.body.type
  const uri = req.body.uri
  const createdAt = Date.now();
  const favourite = new Favourite({ name, img, cal, type, uri, createdAt })
  await favourite.save();
  res.end();
})

app.put('/api/favourites/:id', async (req, res) => {
  const favId = req.params.id;
  const updatedName = req.body.name;
  try {
    const updatedFav = await Favourite.findByIdAndUpdate(
      favId,
      { name: updatedName },
      { new: true }
    );
    if (!updatedFav) {
      return res.status(404).json({ error: "Favourite not found" });
    }
    res.json(updatedFav);
  } catch (error) {
    console.error("Error updating favourite", error);
  }
});

app.delete('/api/favourites/:id', async (req, res) => {
  try {
    const favId = req.params.id;
    await Favourite.deleteOne({ _id: favId })
  } catch (error) {
    console.error("Error deleting favourites", error)
  }
  res.end();
});



app.listen(3000, () => {
  console.log('Server running on: http://localhost:3000')
})