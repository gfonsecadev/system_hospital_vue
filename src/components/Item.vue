<template>
    <div>  
        <table class="table table-hover ">
            <tbody>
                <tr class=row>
                    <td class="col-1" v-if="dado.id" v-text="dado.id"></td>
                    <td class="col" v-if="dado.nome" v-text="dado.nome"></td>
                    <td class="col" v-if="dado.turno" v-text="dado.turno"></td>
                    <td class="col-3" v-if="dado.escala" v-text="dado.escala"></td>
                    <td class="col-3" v-if="dado.placa" v-text="dado.placa"></td>
                    <td class="col-3" v-if="dado.telefone" v-text="dado.telefone"></td>
                    <td class="col-3" v-if="dado.kit" v-text="dado.kit"></td>
                    <td class="col-3" ><i class="bi bi-pencil-square" style="cursor:pointer" @click="criarEquipe(dado)"></i></td>
                </tr>
            </tbody>
        </table>

    
    </div>
</template>

<script>
export default {
  
    name: 'Item',
    data:()=>({
        teste:"false"
    }),
    props:{
        tipo:String,
        dado: Object
    },
    methods:{
        criarEquipe(profissional){
           
            let dados={
                tipo:this.tipo,
                dado:profissional
            }

            this.$store.commit("montarEquipe",dados)
           
        }
    }
}
</script>




