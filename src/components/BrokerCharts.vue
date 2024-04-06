<template>
  <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-2 mt-5">
    <!-- Broker charts -->
    <div class=" p-5 bg-white rounded-2xl shadow">
      <div class="text-xl font-bold">
        Carteiras por Corretora
        <i v-tooltip="'Carteiras por Corretora'" class="pi pi-info-circle text-surface-400 ml-2"></i>
      </div>
      <div class="flex items-center justify-between pt-8">

        <div class="card w-full h-52">
          <Chart type="bar" :data="setChartClientCountData()" :options="setChartOptions()" class="h-30rem h-64" />
        </div>
      </div>
    </div>
    <div class=" p-5 bg-white rounded-2xl shadow">
      <div class="text-xl font-bold">
        Patrimônio por Corretora
        <i v-tooltip="'Patrimônio por Corretora'" class="pi pi-info-circle text-surface-400 ml-2"></i>
      </div>
      <div class="flex items-center justify-between pt-8">
        <div class="card w-full h-full">
          <Chart type="bar" :data="setChartPatrimoniesData()" :options="setChartOptions()" class="h-30rem h-64" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  clientsSumary: Array,
});

const brokers = () => {
  const brokersMap: any = {};
  if (props.clientsSumary)
    props.clientsSumary.forEach((client: any) => {
      if (!brokersMap[client.broker]) {
        brokersMap[client.broker] = 1;
      } else {
        brokersMap[client.broker]++;
      }
    });

  return Object.keys(brokersMap);
}

const clientCounts = () => {
  const brokersMap: any = {};
  if (props.clientsSumary)
    props.clientsSumary.forEach((client: any) => {
      if (!brokersMap[client.broker]) {
        brokersMap[client.broker] = 1;
      } else {
        brokersMap[client.broker]++;
      }
    });

  return Object.values(brokersMap);
}

const patrimonies = () => {
  const patrimonyByBroker: any = {};
  if (props.clientsSumary)
    props.clientsSumary.forEach((client: any) => {
      const broker = client.broker;
      const transactions = client.latest_transactions;
      const patrimony = transactions?.reduce((acc: any, cur: any) => acc + cur.value, 0);

      if (!patrimonyByBroker[broker]) {
        patrimonyByBroker[broker] = 0;
      }
      patrimonyByBroker[broker] += patrimony;
    });

  return Object.values(patrimonyByBroker);
}

const setChartClientCountData = () => {
  return {
    labels: brokers(),
    datasets: [
      {
        label: 'Carteiras',
        backgroundColor: ' rgb(100, 100, 242)',
        borderColor: ' rgb(28, 100, 242)',
        data: clientCounts()
      }
    ]
  };
};

const setChartPatrimoniesData = () => {
  return {
    labels: brokers(),
    datasets: [
      {
        label: 'Patrimônio',
        backgroundColor: 'rgb(100, 100, 242)',
        borderColor: 'rgb(28, 100, 242)',
        data: patrimonies()
      }
    ]
  };
};

const setChartOptions = () => {
  const textColor = 'rgb(45, 55, 72)';
  const textColorSecondary = 'rgb(45, 55, 72)';

  return {
    indexAxis: 'y',
    maintainAspectRatio: false,
    aspectRatio: 0.8,
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
          color: textColorSecondary,
          font: {
            weight: 500
          }
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
</script>
