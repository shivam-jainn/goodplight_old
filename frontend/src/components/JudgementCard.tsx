import React from 'react'
import { Card, Slider } from '@mui/material'

export default function JudgementCard() {
  return (
    <Card sx={{padding:'4rem',backgroundColor:'black'}}>
        
        <Slider
  aria-label="Always visible"
  defaultValue={50}
  step={1}
  valueLabelDisplay="on"
/>
    </Card>
  )
}
