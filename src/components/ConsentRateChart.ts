import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'PieChart';

export const data = [
  ['Task', 'Hours per Day'],
  ['동의', 62],
  ['비동의', 33],
];

export const options = {
  title: '동의율',
  width: 800,
  height: 600,
};

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
      });
  },
});
