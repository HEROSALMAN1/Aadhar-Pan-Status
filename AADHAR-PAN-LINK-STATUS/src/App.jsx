
import React, { useState } from 'react'

export default function App() {
  const [aadhaar, setAadhaar] = useState('')
  const [pan, setPan] = useState('')
  const [result, setResult] = useState(null)

  async function checkStatus() {
    const res = await fetch('/api/status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ aadhaar, pan })
    })
    const data = await res.json()
    setResult(data)
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>🔍 AADHAR–PAN Link Status</h1>
      <input 
        placeholder="Enter Aadhaar number" 
        value={aadhaar} 
        onChange={e => setAadhaar(e.target.value)} 
        style={{display:'block', marginBottom:10, padding:8}}
      />
      <input 
        placeholder="Enter PAN number" 
        value={pan} 
        onChange={e => setPan(e.target.value)} 
        style={{display:'block', marginBottom:10, padding:8}}
      />
      <button onClick={checkStatus} style={{padding:'8px 16px'}}>Check Status</button>
      {result && (
        <pre style={{background:'#f4f4f4', padding:10, marginTop:20}}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  )
}
