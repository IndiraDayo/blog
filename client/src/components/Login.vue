<template>
    <div>
        <form class="form">
			<input type="text" placeholder="email" required>
			<input type="password" placeholder="password" required>
			<button type="submit" id="login-button">login</button>
            <p></p>
            <button type="submit" id="login-button">register</button>
		</form>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>


<style scoped>
button {
  margin-bottom: 30px;
}

form {
  padding: 20px 0;
  position: relative;
  z-index: 2;
}
form input {
  display: block;
  appearance: none;
  outline: 0;
  border: 1px solid rgba(255,255,255,0.4);
  background-color: rgba(255,255,255,0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  text-align: center;
  font-size: 18px;
  color: white;
  transition-duration: 0.25s;
  font-weight: 300;
}
form input:hover {
  background-color: rgba(255,255,255,0.4);
}
form input:focus {
  background-color: white;
  width: 300px;
  color: #2fad88;
}
form button {
  appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #2fad88;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
}
form button:hover {
  background-color: #f5f7f9;
}
</style>
