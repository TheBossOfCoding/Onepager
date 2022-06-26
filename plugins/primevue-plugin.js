import { defineNuxtPlugin } from "#app";
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Fieldset from 'primevue/fieldset'
import ScrollPanel from 'primevue/scrollpanel'
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, {ripple : true})
    nuxtApp.vueApp.component('Button', Button)
                    .component('Card', Card)
                    .component('Fieldset', Fieldset)
                    .component('ScrollPanel', ScrollPanel)
                    .component('Accordion', Accordion)
                    .component('AccordionTab', AccordionTab)
})