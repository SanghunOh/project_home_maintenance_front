<script setup></script>

<template>
  <nav
    class="navbar navbar-expand-md navbar-dark bg-primary mb-4"
    style="--bs-bg-opacity: 0.3"
  >
    <div class="container-fluid">
      <button
        class="btn btn-link navbar-brand"
        @click="$router.push({ name: 'Home' })"
      >
        가로주택 정비사업
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <button
              class="btn btn-link nav-link"
              aria-current="page"
              @click="$router.push({ name: 'Information' })"
            >
              <i class="bi bi-building"></i>관련정보
            </button>
          </li>
          <li class="nav-item">
            <button
              class="btn btn-link nav-link"
              aria-current="page"
              @click="$router.push({ name: 'UnionActivity' })"
            >
              <i class="bi bi-building"></i>조합 활동
            </button>
          </li>
          <li class="nav-item">
            <button
              class="btn btn-link nav-link"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="bi-calculator-fill"></i>예상분담금
            </button>
          </li>
          <li class="nav-item">
            <button
              class="btn btn-link nav-link"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="bi bi-calendar-event"></i>조합일정
            </button>
          </li>
        </ul>
        <!-- within Model -->
        <!-- <div class="col-md-3 text-end">
          <button
            class="btn btn-success mx-2"
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            >로그인</button
          >
          <button
            class="btn btn-outline-success"
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            >가입하기</button
          >
        </div> -->
        <!-- without Model -->
        <div class="col-md-3 text-end">
          <button
            class="btn btn-success mx-2"
            @click="$router.push({ name: 'UserLogin' })"
          >
            로그인
          </button>
          <button
            class="btn btn-outline-success"
            @click="$router.push({ name: 'UserRegister' })"
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
