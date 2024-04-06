import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import Chart from 'primevue/chart';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import PrimeVue from "primevue/config";
import DataTable from 'primevue/datatable';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import MultiSelect from 'primevue/multiselect';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import "./style.css";

import Lara from "./presets/lara";

import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true, unstyled: true, pt: Lara });
app.use(ToastService);

app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);

app.component('Button', Button);
app.component('Toast', Toast);
app.component('MultiSelect', MultiSelect);
app.component('Tag', Tag);
app.component('Dropdown', Dropdown);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Menu', Menu);
app.component('InputText', InputText);
app.component('Divider', Divider);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Chart', Chart);
app.component('Avatar', Avatar);
app.component('Badge', Badge);

app.mount("#app");