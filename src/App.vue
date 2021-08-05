<template>
  <div id="app" class="bg-light">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/ViewResume">Show Resume</router-link> |
      <router-link to="/capstones/:id">Show Capstone</router-link>  -->

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Student Portal</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ViewResume">View Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/capstones/:id">View Capstone</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>
