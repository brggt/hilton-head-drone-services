import express, { Request, Response } from 'express'
import mysql from 'mysql2/promise'

const app = express()
app.use(express.json())

// Database connection pool
const pool = mysql.createPool({
  uri: process.env.DATABASE_URL || 'mysql://localhost/hilton-head-drone'
})

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' })
})

// Inquiry submission endpoint
app.post('/api/inquiries', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, propertyAddress, serviceType, budget, message } = req.body

    // Validate required fields
    if (!name || !email || !propertyAddress || !serviceType || !budget) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Get connection from pool
    const connection = await pool.getConnection()

    try {
      // Insert inquiry into database
      const [result] = await connection.execute(
        `INSERT INTO inquiries (name, email, phone, property_address, service_type, budget, message, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, 'new')`,
        [name, email, phone || null, propertyAddress, serviceType, budget, message || null]
      )

      res.json({ 
        success: true, 
        message: 'Inquiry submitted successfully',
        id: (result as any).insertId
      })
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error('Error submitting inquiry:', error)
    res.status(500).json({ error: 'Failed to submit inquiry' })
  }
})

// Get all inquiries (admin endpoint)
app.get('/api/inquiries', async (req: Request, res: Response) => {
  try {
    const connection = await pool.getConnection()
    
    try {
      const [rows] = await connection.execute(
        'SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 100'
      )
      res.json(rows)
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    res.status(500).json({ error: 'Failed to fetch inquiries' })
  }
})

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
