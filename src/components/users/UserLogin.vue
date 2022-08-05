<template>
  <h4 class="mb-3">회원 인증</h4>
  <form
    class="needs-validation"
    novalidate=""
    action="http://127.0.0.1:8000/users/login/"
    method="POST"
  >
    <div class="row g-3">
      <div class="col-12">
        <label for="username" class="form-label">Username</label>
        <input
          type="username"
          class="form-control"
          id="username"
          placeholder="Username"
          required=""
          name="username"
        />
        <div class="invalid-feedback">Your username is required.</div>
      </div>
      <div class="col-12">
        <label for="password" class="form-label">Password</label>
        <input
          type="text"
          class="form-control"
          id="password"
          placeholder=""
          value=""
          required=""
          name="password"
        />
        <div class="invalid-feedback">Valid first name is required.</div>
      </div>
    </div>

    <hr class="my-4" />

    <button class="btn btn-primary" type="submit">로그인하기</button>
  </form>
</template>

<script setup></script>

<style></style>
