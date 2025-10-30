const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.get or app.post or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

// app.get('/about', (req, res) => {
//   res.send('<h1>Hello about!</h1>')
// })

// app.get('/contact', (req, res) => {
//   res.send('<h1>Hello conatct us!</h1>')
// })

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }
    res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
