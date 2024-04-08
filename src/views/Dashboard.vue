<template>
  <Toast />

  <ClientStats :numberOfClients="numberOfClients" :totalEquality="totalEquality" :averageEquality="averageEquality"
    :isLoading="isLoading" />

  <EquityHistoryChart :equityHistoryDates="equityHistoryDates" :equityHistoryValues="equityHistoryValues" />

  <ClientDataTable :clientsSumary="clientsSumary" />

  <BrokerCharts :clientsSumary="clientsSumary" />

</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useToast } from 'primevue/usetoast';
import ClientStats from "../components/ClientStats.vue";
import EquityHistoryChart from '../components/EquityHistoryChart.vue';
import BrokerCharts from '../components/BrokerCharts.vue';
import ClientDataTable from '../components/ClientDataTable.vue';

const toast = useToast();
const isLoading = ref(false)
const numberOfClients = ref();
const totalEquality = ref();
const averageEquality = ref();
const equityHistoryDates = ref([])
const equityHistoryValues = ref([])
const clientsSumary = ref([{}])

const fetchData = async () => {
  isLoading.value = true
  try {
    const response = await fetch('https://run.mocky.io/v3/4dbc7153-c982-493d-892e-1a812a0978f8');
    const data = await response.json();

    // Atualiza as refs com base nos dados recebidos da API
    numberOfClients.value = data?.data.advisor_summary?.client_count;
    totalEquality.value = data?.data.advisor_summary?.total_equity;
    averageEquality.value = data?.data.advisor_summary?.average_equity;

    equityHistoryDates.value = data?.data.advisor_summary.equity_history.map((item: any) => item.date);
    equityHistoryValues.value = data?.data.advisor_summary.equity_history.map((item: any) => item.value);

    clientsSumary.value = data?.data.clients_summary;

  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Erro na Requisição dos dados',
      life: 3000
    });

    console.error('Houve um erro ao buscar os dados:', error);
  }
  isLoading.value = false
};

onMounted(fetchData)

</script>