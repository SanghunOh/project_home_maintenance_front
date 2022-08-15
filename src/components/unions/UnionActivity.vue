<script setup>
import { computed, reactive, watch } from "vue";
import UsedCosts from "./UsedCosts.vue";

const states = reactive({
  contract_amount: 250000000, // 대출업체 계약액

  paid_loan_amount: 10400000, // 현재 사용 총액
  bundle_loans: 2500000, // 사전 대출 금액

  used_loan_amount: 5000000, // 사용하고 있는 총액
  loan_per_month: 500000, // 월부담금
  used_loan_months: 5, // 사용한 개월수

  marketing_amount: 5400000, // 마케팅 금액
  marketing_peoples_per_day: 1, // 일별 마케팅 인원수
  marketing_people_cost_per_day: 120000, // 인원당 비용 (단위:일)
  marketing_days: 15, // 마케팅 일한 날짜수
});

function usedLoanCalculation(newValue, oldValue) {
  states.used_loan_amount = newValue.loan_per_month * newValue.used_loan_months;
  states.paid_loan_amount = states.used_loan_amount + newValue.bundle_loans;
}

function usedMarketingCostCalculation(newValue, oldValue) {
  states.marketing_amount =
    newValue.marketing_peoples_per_day *
    newValue.marketing_people_cost_per_day *
    newValue.marketing_days;
}
watch(
  () => {
    return { ...states };
  },
  (newValue, oldValue) => {
    console.log("new : ", newValue, "old : ", oldValue);
    if (
      newValue.used_loan_months !== oldValue.used_loan_months ||
      newValue.loan_per_month !== oldValue.loan_per_month ||
      newValue.bundle_loans !== oldValue.bundle_loans
    ) {
      usedLoanCalculation(newValue, oldValue);
    }
    if (
      newValue.marketing_peoples_per_day !==
        oldValue.marketing_peoples_per_day ||
      newValue.marketing_people_cost_per_day !==
        oldValue.marketing_people_cost_per_day ||
      newValue.marketing_days !== oldValue.marketing_days
    ) {
      usedMarketingCostCalculation(newValue, oldValue);
    }
  },
  { deep: true }
);

// const numberWithComma = computed({
//     get: () => store.state.page.about.title,
//     set: value => store.commit('setData', { about: { title: value }})
// })
</script>

<template>
  <div class="row g-5">
    <!-- contents left -->
    <div class="col-md-8">
      <h4 class="pb-1"><i class="bi-map"></i>운영비 계산 (단위:원)</h4>
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="card border-0">
            <h6>
              업체 지급할 총액 :
              {{
                Number(
                  states.contract_amount + states.marketing_amount
                ).toLocaleString()
              }}
            </h6>
            <div>
              계약 대출금({{ Number(states.contract_amount).toLocaleString() }})
              + 홈보비({{ Number(states.marketing_amount).toLocaleString() }})
            </div>
            <hr />
            <h6>
              현재 사용한 총액 :
              {{
                Number(
                  states.paid_loan_amount + states.marketing_amount
                ).toLocaleString()
              }}
            </h6>
            <div>
              사용액({{ Number(states.paid_loan_amount).toLocaleString() }}) +
              홈보비({{ Number(states.marketing_amount).toLocaleString() }})
            </div>
          </div>
        </div>
      </div>
      <h5 class="pb-1"><i class="bi-map"></i>사용 내역</h5>
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="card border-0">
            <div class="row g-3">
              <h6>
                대출 내역 계산 :
                {{ Number(states.paid_loan_amount).toLocaleString() }}
              </h6>
              <div class="col-sm-6">
                <label for="loan_per_month" class="form-label"
                  >월별 부담금</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="loan_per_month"
                  placeholder=""
                  v-model="states.loan_per_month"
                  required=""
                />
                <div class="invalid-feedback">Valid 월부담금 is required.</div>
              </div>
              <div class="col-sm-6">
                <label for="used_loan_months" class="form-label"
                  >사용한 개월수</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="used_loan_months"
                  placeholder=""
                  v-model="states.used_loan_months"
                  required=""
                />
                <div class="invalid-feedback">
                  Valid 사용한 개월수 is required.
                </div>
              </div>
              <div class="col-12">
                <label for="bundle_loans" class="form-label"
                  >사전 대출 금액</label
                >
                <div class="input-group has-validation">
                  <span class="input-group-text">사무실 보증금</span>
                  <input
                    type="text"
                    class="form-control"
                    id="bundle_loans"
                    placeholder="사전 대출 금액"
                    required=""
                    v-model="states.bundle_loans"
                  />
                  <div class="invalid-feedback">
                    Your 사전 대출 금액 is required.
                  </div>
                </div>
              </div>
              <hr class="mt-3" />
              <h6>
                홍보 내역 계산 :
                {{ Number(states.marketing_amount).toLocaleString() }}
              </h6>
              <div class="col-sm-6">
                <label for="marketing_people_cost_per_day" class="form-label"
                  >비용 (단위:일)</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="marketing_people_cost_per_day"
                  placeholder=""
                  v-model="states.marketing_people_cost_per_day"
                  required=""
                />
                <div class="invalid-feedback">
                  Valid 비용 (단위:일) is required.
                </div>
              </div>
              <div class="col-sm-3">
                <label for="marketing_days" class="form-label"
                  >일한 날짜수</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="marketing_days"
                  placeholder=""
                  v-model="states.marketing_days"
                  required=""
                />
                <div class="invalid-feedback">
                  Valid 일한 날짜수 is required.
                </div>
              </div>
              <div class="col-sm-3">
                <label for="marketing_peoples_per_day" class="form-label"
                  >일별 인원수</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="marketing_peoples_per_day"
                  placeholder=""
                  v-model="states.marketing_peoples_per_day"
                  required=""
                />
                <div class="invalid-feedback">
                  Valid 일별 인원수 is required.
                </div>
              </div>
            </div>
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
