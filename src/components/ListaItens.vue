<template>
    <div>
        <transition-group  enter-active-class="animate__animated  animate__backInDown"  appear >
            <div v-if="tipo=='socorristas'">
                <select v-model="turno" class="form-control bg-light">
                    <option value="" disabled>Selecione um turno</option>
                    <option value="manhã">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                </select>
            </div>

            <div key="1" v-if="teste">
                <item v-for="(dado,indice) in dados" :key="indice" :dado="dado" :tipo="tipo" />
            </div>
            <small v-if="tipo=='socorristas'"> <strong>*Total por turno: </strong> {{getTotalPorturno(turno)}}</small>
        </transition-group>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
export default {
    name: 'ListaItens',
    data:()=>({
        teste:true,
        turno:"",
        totalTurno:""
    }),

    computed:{
        ...mapState({
            enfermeiros:state=>state.enfermeiros,
            socorristas:state=>state.socorristas,
            medicos:state=>state.medicos,
            carros:state=>state.equipamentos.carros,
            telefones:state=>state.equipamentos.telefones,
            kitReanimacao:state=>state.equipamentos.kitsDeReanimacao
        }),
        ...mapGetters(['getTotalPorturno']),

        dados(){
            switch(this.tipo){
                case 'enfermeiros':return this.enfermeiros
                case 'socorristas':return this.socorristas
                case 'medicos':return this.medicos
                case 'carros':return this.carros
                case 'telefones':return this.telefones
                case 'kits-de-reanimacao':return this.kitReanimacao
            }
            return null
        }

        

        
    },
    components: { 
        Item
    },
    props: {
        tipo: String
    },
    watch:{
        tipo(){
            this.teste=false
            setTimeout(()=>this.teste=true,10)
              
        }
    }
}
</script>

<style >
  .fade-enter-to,.fade-leave-from{
    opacity: 1;
}

.fade-enter-active,.fade-leave-active{
    transition: opacity 2s;
}

.fade-enter-from,.fade-leave-to{
    opacity: 0;
}
</style>