<template>
  <div class="grid w-full mt-5">
    <!-- Client data table -->
    <div class=" p-5 bg-white rounded-2xl shadow">
      <div class="card">
        <DataTable v-model:filters="filters" :value="clientsDataFormatted()" stateStorage="session"
          stateKey="dt-state-demo-session" paginator :rows="6" filterDisplay="menu" stripedRows selectionMode="single"
          dataKey="id" :globalFilterFields="['name', 'date', 'value', 'type']">
          <template #header>
            <div class="flex justify-between items-center mb-3">
              <div>
                <div class="text-xl font-bold  text-surface-950">
                  Transações
                </div>
                <div class=" text-base font-normal text-surface-500">
                  Tabela das últimas transações
                </div>
              </div>
              <div class="justify-end">
                <IconField iconPosition="left">
                  <InputIcon class="pi pi-search"></InputIcon>
                  <InputText v-model="filters['global'].value" size="small" placeholder="Pesquisar" />
                </IconField>
              </div>
            </div>

          </template>
          <Column field="name" header="Cliente" sortable style="width: 25%">
          </Column>
          <Column field="date" header="Data" sortable style="width: 25%">
            <template #body="slotProps">
              {{ formatDate(slotProps.data.date) }}
            </template>
          </Column>
          <Column field="value" header="Valor" sortable style="width: 25%">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.value) }}
            </template>
          </Column>
          <Column field="type" header="Tipo" sortable style="width: 25%">
            <template #body="slotProps">
              <Tag :value="slotProps.data.type" :severity="getSeverity(slotProps.data.type)" />
            </template>

          </Column>
          <template #empty> Nenhum dado encontrado. </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { defineProps, ref } from 'vue';

const props = defineProps({
  clientsSumary: Array
});

const clientsDataFormatted = () => {
  // Organizar os dados de forma linear
  const formattedData: any = [];
  if (props.clientsSumary)
    props.clientsSumary.forEach((client: any) => {
      client.latest_transactions?.forEach((transaction: any) => {
        formattedData.push({
          name: client.name,
          date: transaction.date,
          value: transaction.value,
          type: transaction.type
        });
      });
    });

  return formattedData;
}

const filters = ref(
  {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    value: { value: null, matchMode: FilterMatchMode.IN },
    type: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
  }
);

const formatCurrency = (value: any) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatDate = (value: any) => {
  const parts = value.split('-');
  const year = Number(parts[0]);
  const month = Number(parts[1]) - 1;
  const day = Number(parts[2]);
  const date = new Date(year, month, day);

  return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
};

const getSeverity = (status: String) => {
  switch (status) {
    case 'Resgate':
      return 'danger';

    case 'Aporte':
      return 'success';
  }
};
</script>
