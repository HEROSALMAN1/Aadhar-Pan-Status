
import express from 'express'
const app = express()
app.use(express.json())

app.post('/status', (req, res) => {
  const { aadhaar, pan } = req.body || {}
  if (!aadhaar || !pan) {
    return res.status(400).json({ linked: false, error: 'Aadhaar and PAN required' })
  }
  // Demo logic — replace with real API call if available
  const linked = aadhaar.endsWith('5') && pan.startsWith('A')
  res.json({
    aadhaar,
    pan,
    linked,
    message: linked ? '✅ Aadhaar is linked with PAN' : '❌ Aadhaar is not linked with PAN'
  })
})

export default app
