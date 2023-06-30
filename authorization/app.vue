<template>
  <div class="container">
    <form action="" method="get" class="form">
      <h1 class="form__title">Please sign in</h1>
      <Input :type="'text'" :placeholder="'login'" :class="'input-login'"/>
      <Input :type="'password'" :placeholder="'password'" :class="'input-login'"/>
      <Input :type="'submit'" :value="'Sign in'" :class="'input-button'"/>
    </form>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
      font-family: roboto;
      font-size: 16px;
      font-weight: 100;
  }
  .container{
    width: 100%;
    min-height: 100vh;
    background-color: #2b3035;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form{
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #adb5bd;
  }
  .form__title{
    margin-bottom: 10px;
    font-weight: 300;
  }
</style>
