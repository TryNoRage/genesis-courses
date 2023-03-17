import React from 'react'
import { useParams } from 'react-router-dom'

function CoursePage() {
  const {id} = useParams()
  return (
    <div>CoursePage {id}</div>
  )
}

export default CoursePage