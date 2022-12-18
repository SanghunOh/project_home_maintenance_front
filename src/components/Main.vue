<script setup>
import ProcessStates from "./process_states/ProcessStates.vue";
import ConsentRateChart from "./ConsentRateChart";
</script>

<template>
  <div class="row g-5">
    <!-- contents left -->
    <div class="col-md-8">
      <h4 class="pb-1"><i class="bi-map"></i> 심곡본동 603,604번지 일대</h4>
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="card bg-dark text-white">
            <img src="../assets/real_estate.png" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <div class="mb-1 card-text text-muted">대지면적:1,867,30평</div>
              <div class="mb-1 card-text text-muted">건축면적:502.15평</div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="card text-dark">
            <ConsentRateChart />
          </div>
        </div>
      </div>
    </div>

    <!--- Sidebar -->
    <div class="col-md-4">
      <process-states></process-states>
    </div>
  </div>
</template>

<style></style>
