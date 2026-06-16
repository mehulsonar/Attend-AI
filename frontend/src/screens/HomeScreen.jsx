import React from 'react'
import './HomeScreen.css'
import Navbar from '../components/Navbar'
import TeacherScreen from './TeacherScreen'
import StudentScreen from './StudentScreen'

export default function HomeScreen() {
  return (
    <div className="container" style={{marginTop: "12rem"}}>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <TeacherScreen/>
        </div>
        <div className="col"></div>
        <div className="col">
          <StudentScreen/>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}
