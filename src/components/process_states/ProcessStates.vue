<script setup></script>

<template>
  <div class="position-sticky" style="top: 2rem">
    <h4 class="pb-1 text-center">진행 상황</h4>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <i class="bi-briefcase-fill"></i> 추진위원회 구성
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>추진위원회 구성 결의(임의 단체)</li>
              <li>사업설명회 개최</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            조합설립 인가(2023.01)
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>총 소유자 80%이상 동의</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            시공사 선정(2023.08)
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>국토교통부 고시에 따라 조합총회 의결</li>
              <li>경쟁입찰 통한 시공사 선정</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading4">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapse4"
          >
            건축심의(2024.02)
          </button>
        </h2>
        <div
          id="collapse4"
          class="accordion-collapse collapse"
          aria-labelledby="heading4"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>
                건축선,용적률,건폐율,높이제한,공개공지 확보 등 건축법 적용 완화
                등 심의
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading5">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapse5"
          >
            조합원 분양신청(2024.11)
          </button>
        </h2>
        <div
          id="collapse5"
          class="accordion-collapse collapse"
          aria-labelledby="heading5"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>분양대상자별 종전 자산 평가액,분담금 추산액 통지</li>
              <li>30일 이상 60일 이내</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading6">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse6"
            aria-expanded="false"
            aria-controls="collapse6"
          >
            관리처분계획 수립
          </button>
        </h2>
        <div
          id="collapse6"
          class="accordion-collapse collapse"
          aria-labelledby="heading6"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>조합은 분양신청 결과 따라 관리처분계획 수립</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading7">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse7"
            aria-expanded="false"
            aria-controls="collapse7"
          >
            사업시행계획 인가(2024.11)
          </button>
        </h2>
        <div
          id="collapse7"
          class="accordion-collapse collapse"
          aria-labelledby="heading7"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>조합원 과반수 동의로 신청</li>
              <li>관리처분계획 통합 인가</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading8">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse8"
            aria-expanded="false"
            aria-controls="collapse8"
          >
            이주, 철거
          </button>
        </h2>
        <div
          id="collapse8"
          class="accordion-collapse collapse"
          aria-labelledby="heading8"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>미동의자 매도 청구, 명도 등 진행</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading9">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse9"
            aria-expanded="false"
            aria-controls="collapse9"
          >
            착공, 준공 및 입주(2024.11~2027.03)
          </button>
        </h2>
        <div
          id="collapse9"
          class="accordion-collapse collapse"
          aria-labelledby="heading9"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>일반 분양</li>
              <li>조합원 입주</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
