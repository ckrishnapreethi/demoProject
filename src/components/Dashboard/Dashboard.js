import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    // <div>Dashboard</div>
    <nav class="navbar navbar-expand-lg mb-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">IssueDashboard</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Issue</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-disabled="true">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active " aria-disabled="true">topviewed Issues</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Dashboard