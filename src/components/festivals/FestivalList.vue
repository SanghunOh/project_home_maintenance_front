<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">축제명</th>
        <th scope="col">시작일</th>
        <th scope="col">종료일</th>
        <th scope="col">연락처</th>
        <th scope="col">지역</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">1</th>
        <td>2022 제9회 라틴아메리카축제</td>
        <td>20220917</td>
        <td>20220917</td>
        <td>02-2241-6381,3,4</td>
        <td>서울특별시 성북구</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">2</th>
        <td>백두대간 산림치유 페스티벌</td>
        <td>20220930</td>
        <td>20221002</td>
        <td>054-639-3400</td>
        <td>경상북도 영주시</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">3</th>
        <td>제3회 안양청년축제 ‘안양랜드’</td>
        <td>20220917</td>
        <td>20220917</td>
        <td>031-8045-5786</td>
        <td>경기도 안양시</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">4</th>
        <td>2022 제9회 라틴아메리카축제</td>
        <td>20220917</td>
        <td>20220917</td>
        <td>02-2241-6381,3,4</td>
        <td>서울특별시 성북구</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">5</th>
        <td>백두대간 산림치유 페스티벌</td>
        <td>20220930</td>
        <td>20221002</td>
        <td>054-639-3400</td>
        <td>경상북도 영주시</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">6</th>
        <td>제3회 안양청년축제 ‘안양랜드’</td>
        <td>20220917</td>
        <td>20220917</td>
        <td>031-8045-5786</td>
        <td>경기도 안양시</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">7</th>
        <td>2022 제9회 라틴아메리카축제</td>
        <td>20220917</td>
        <td>20220917</td>
        <td>02-2241-6381,3,4</td>
        <td>서울특별시 성북구</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">8</th>
        <td>백두대간 산림치유 페스티벌</td>
        <td>20220930</td>
        <td>20221002</td>
        <td>054-639-3400</td>
        <td>경상북도 영주시</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">9</th>
        <td>제3회 안양청년축제 ‘안양랜드’</td>
        <td>20220917</td>
        <td>20220917</td>
        <td>031-8045-5786</td>
        <td>경기도 안양시</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">10</th>
        <td>2022 제9회 라틴아메리카축제</td>
        <td>20220917</td>
        <td>20220917</td>
        <td>02-2241-6381,3,4</td>
        <td>서울특별시 성북구</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">11</th>
        <td>백두대간 산림치유 페스티벌</td>
        <td>20220930</td>
        <td>20221002</td>
        <td>054-639-3400</td>
        <td>경상북도 영주시</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">12</th>
        <td>제3회 안양청년축제 ‘안양랜드’</td>
        <td>20220917</td>
        <td>20220917</td>
        <td>031-8045-5786</td>
        <td>경기도 안양시</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">13</th>
        <td>2022 제9회 라틴아메리카축제</td>
        <td>20220917</td>
        <td>20220917</td>
        <td>02-2241-6381,3,4</td>
        <td>서울특별시 성북구</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">14</th>
        <td>백두대간 산림치유 페스티벌</td>
        <td>20220930</td>
        <td>20221002</td>
        <td>054-639-3400</td>
        <td>경상북도 영주시</td>
      </tr>
      <tr @click="$router.push({ name: 'FestivalView' })">
        <th scope="row">15</th>
        <td>제3회 안양청년축제 ‘안양랜드’</td>
        <td>20220917</td>
        <td>20220917</td>
        <td>031-8045-5786</td>
        <td>경기도 안양시</td>
      </tr>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">4</a></li>
      <li class="page-item"><a class="page-link" href="#">5</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style></style>
