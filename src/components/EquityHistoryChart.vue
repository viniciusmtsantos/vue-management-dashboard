<template>
  <div class="grid w-full mt-5">
    <!-- Equity history chart -->
    <div class=" p-5 bg-white rounded-2xl shadow">
      <div class="text-xl font-bold">
        Crescimento de Ativos
        <i v-tooltip="'Evolução de Patrimônio'" class="pi pi-info-circle text-surface-400 ml-2"></i>
      </div>
      <div class="flex items-center justify-center pt-4">
        <Chart type="line" :data="setChartEquityHistoryData()" :options="setChartOptions()" class="w-11/12 h-96" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  equityHistoryDates: Array,
  equityHistoryValues: Array
});

const setChartEquityHistoryData = () => {
  return {
    labels: formatDate(props.equityHistoryDates),
    datasets: [

      {
        label: 'Ativo',
        data: props.equityHistoryValues,
        fill: true,
        borderColor: 'rgb(100, 100, 242)',
        tension: 0.4,
        backgroundColor: 'rgba(28, 100, 242, 0.5)'
      }
    ]
  };
};

const setChartOptions = () => {
  const textColor = 'rgb(45, 55, 72)';
  const textColorSecondary = 'rgb(45, 55, 72)';

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: 'rgb(241, 245, 249)'
        }
      }
    }
  };
}

const formatDate = (value: any) => {
  return value.map((dateString: any) => {
    const parts = dateString.split('-');
    const year = Number(parts[0]) + 2000; // Assuming it's YY format, add 2000 to get full year
    const month = Number(parts[1]) - 1; // Months in JavaScript are zero-based (0-11)
    const day = Number(parts[2]);
    const date = new Date(year, month, day);

    const options: Object = { day: 'numeric', month: 'short', year: '2-digit' };
    return date.toLocaleDateString('pt-BR', options);
  });
};

</script>
