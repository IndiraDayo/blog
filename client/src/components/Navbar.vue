<template>
     <div class="navbar bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Livecode 1</a>
        <div class="header-right">
          <input type="text" placeholder="email">
          <input type="password" placeholder="password">
          <button>Login</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        msg: String
    }
}
</script>
