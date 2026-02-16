import express from 'express'
import path from 'path'

const __dirname = path.resolve()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '../dist')))

// API Routes
app.post('/api/inquiries', (req, res) => {
  try {
    const { name, email, phone, propertyAddress, serviceType, budget, message } = req.body

    if (!name || !email || !propertyAddress) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // For now, just acknowledge the submission
    // In production, this would save to database
    console.log('Inquiry received:', { name, email, phone, propertyAddress, serviceType, budget, message })

    res.json({ 
      success: true, 
      message: 'Thank you for your inquiry! We will contact you soon.'
    })
  } catch (error) {
    console.error('Error processing inquiry:', error)
    res.status(500).json({ error: 'Failed to process inquiry' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Serve index.html for all other routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
