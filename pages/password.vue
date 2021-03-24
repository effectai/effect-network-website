<template>
  <div class="container">
    <div v-if="isAuthorised">
      <h1>Looks like you're already logged in</h1>

      <p>Either logout or go to the password protected area</p>

      <a class="button" @click="removeAuthorisation">Log out</a>
      <a class="button" href="/">Go to password protected area</a>
    </div>
    <div v-else>
      <h1>Log in</h1>
      <p>Enter in your password, you can do so by filling in the form below.</p>

      <div class="section">
        <form @submit="loginUser">
          <input v-model="methodLoginValue" type="password" placeholder="Curiosity killed the cat">

          <button class="button" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data: function() {
    return {
      methodLoginValue: '',
      isAuthorised: false
    }
  },
  mounted() {
    this.isAuthorised = this.$passwordProtect.isAuthorised()
  },

  methods: {
    loginUser() {
      this.$passwordProtect.authorise(this.methodLoginValue)
      this.isAuthorised = this.$passwordProtect.isAuthorised()
      this.$router.push('/')
    },
    removeAuthorisation() {
      this.$passwordProtect.removeAuthorisation()
      this.isAuthorised = this.$passwordProtect.isAuthorised()
    }
  }
}
</script>

<style scoped>
form {
  margin: 20px 0;
  font-family: sans-serif;
  display: flex;
}
input {
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
  border-radius: 3px;
  height: 40px;
  vertical-align: top;
  width: 300px;
}

form + p {
  margin-top: 10px;
}

input + button {
  margin-left: 10px;
}

.section {
  padding: 10px 0;
  border-top: 1px solid #ccc;
  margin-top: 10px;
}

p + .button--pink {
  margin-top: 10px;
}
</style>
