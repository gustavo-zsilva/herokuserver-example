import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.json({ message: "Hello World" })
})

app.listen(PORT, () => console.log(`Server open on port ${PORT}`))