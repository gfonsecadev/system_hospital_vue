<template>
    <div>
        <table class="table table-striped table-hover">
            <thead  >
                <tr class="text-center bg-secondary">
                    <th scope="col">ID</th>
                    <th >Enfermeiro</th>
                    <th >Socorrista</th>
                    <th >Médico</th>
                    <th >Carro</th>
                    <th >Telefone</th>
                    <th class="text-truncate" >Kit de reanimação</th>
                </tr>
            </thead>
            <tbody v-for="(equipe,indice) in equipes" :key='indice'>
                <equipe :dados="equipe" :indice="indice"></equipe>
            </tbody>
        </table>
        
    </div>
</template>

<script>
import Equipe from '@/components/Equipe.vue'
import {mapState} from 'vuex'
export default {
    name: 'ListasEquipe',
    components: {
        Equipe
    },
    computed:{
        ...mapState({
            equipes:state=>state.equipesMontadas
        })
    }
}
</script>