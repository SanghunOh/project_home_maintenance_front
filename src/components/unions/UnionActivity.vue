<script setup>
import { reactive, computed } from "vue";
import UsedCosts from "./UsedCosts.vue";

const states = reactive({
  contract_amount: 250000000, // 대출업체 계약액
  used_loan_amount: 0, // 부담할 총액

  loan_amount: 0, // 대출 총액
  loan_per_month: 500000, // 월부담금
  used_loan_months: 5, // 사용한 개월수
  bundle_loans: 2500000, // 사전 대출 금액

  marketing_amount: 0, // 마케팅 금액
  marketing_peoples_per_month: 6, // 월별 마케팅 인원수
  cost_people_per_day: 120000, // 인원당 일당 비용
  used_people_days: 5, // 마케팅 일수
});
</script>

<template>
  <div class="row g-5">
    <!-- contents left -->
    <div class="col-md-8">
      <h5 class="pb-1"><i class="bi-map"></i>운영비 계산 (단위:원)</h5>
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="card border-0">
            <h6>
              대출 지급할 총액 :
              {{ states.contract_amount + states.marketing_amount }}
            </h6>
            <div>
              계약 대출금({{ states.contract_amount }}) + 홈보비({{
                states.marketing_amount
              }})
            </div>
            <hr />
            <h6>
              현재 사용 총액 :
              {{ states.used_loan_amount + states.marketing_amount }}
            </h6>
            <div>
              사용액({{ states.used_loan_amount }}) + 홈보비({{
                states.marketing_amount
              }})
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
              <h6>대출 내역 계산 : {{ states.loan_amount }}</h6>
              <div class="col-sm-6">
                <label for="loan_per_month" class="form-label">월부담금</label>
                <input
                  type="text"
                  class="form-control"
                  id="loan_per_month"
                  placeholder=""
                  :value="states.loan_per_month"
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
                  :value="states.used_loan_months"
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
                    :value="states.bundle_loans"
                  />
                  <div class="invalid-feedback">
                    Your 사전 대출 금액 is required.
                  </div>
                </div>
              </div>
              <hr class="mt-3" />
              <h6>홍보 내역 계산 : {{ marketing_amount }}</h6>
              <div class="col-sm-6">
                <label for="cost_people_per_day" class="form-label"
                  >일당 비용</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="cost_people_per_day"
                  placeholder=""
                  :value="states.cost_people_per_day"
                  required=""
                />
                <div class="invalid-feedback">Valid 일당 비용 is required.</div>
              </div>
              <div class="col-sm-3">
                <label for="marketing_peoples_per_month" class="form-label"
                  >월별 인원수</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="marketing_peoples_per_month"
                  placeholder=""
                  :value="states.marketing_peoples_per_month"
                  required=""
                />
                <div class="invalid-feedback">
                  Valid 월별 인원수 is required.
                </div>
              </div>
              <div class="col-sm-3">
                <label for="used_people_days" class="form-label">일수</label>
                <input
                  type="text"
                  class="form-control"
                  id="used_people_days"
                  placeholder=""
                  :value="states.used_people_days"
                  required=""
                />
                <div class="invalid-feedback">Valid 일수 is required.</div>
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
