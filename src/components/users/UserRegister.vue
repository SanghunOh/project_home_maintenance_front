<template>
  <h4 class="mb-3">회원 가입</h4>
  <form
    class="needs-validation"
    novalidate=""
    action="http://127.0.0.1:8000/users/register/"
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
      <div class="col-sm-6">
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

      <div class="col-sm-6">
        <label for="password2" class="form-label">Password2</label>
        <input
          type="text"
          class="form-control"
          id="password2"
          placeholder=""
          value=""
          required=""
          name="password2"
        />
        <div class="invalid-feedback">Valid last name is required.</div>
      </div>

      <div class="col-12">
        <label for="email" class="form-label">Email</label>
        <div class="input-group has-validation">
          <span class="input-group-text">@</span>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="you@example.com"
            required=""
            name="email"
          />
          <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>
      </div>
    </div>

    <hr class="my-4" />

    <button class="btn btn-primary" type="submit">가입하기</button>
  </form>
</template>

<script setup></script>

<style></style>
