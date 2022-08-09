<script setup>
import { reactive, computed } from "vue";
import UsedCosts from "./UsedCosts.vue";

const states = reactive({
  loan_amount: 250000000,
  loan_per_month: 500000,
  bundle_loan: [2500000],
  used_months: 4,
  used_loan_amount: 0,
});

const loan_amount = computed(() => {
  return states.loan_amount;
});
</script>

<template>
  <div class="row g-5">
    <!-- contents left -->
    <div class="col-md-8">
      <h4 class="pb-1"><i class="bi-map"></i>운영 대출금</h4>
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="card">
            <div>{{ loan_amount }}</div>
          </div>
        </div>
      </div>
      <h4 class="pb-1"><i class="bi-map"></i>사용 합계</h4>
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="card">
            <div></div>
          </div>
        </div>
      </div>
    </div>

    <!--- Sidebar -->
    <div class="col-md-4">
      <UsedCosts></UsedCosts>
    </div>
  </div>
</template>

<style></style>
