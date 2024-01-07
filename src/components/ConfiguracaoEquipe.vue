<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-boxes me-2"></i>Configuração da equipe</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <p>Enfermeiro:  {{enfermeiro}}</p>
        <p>Socorrista:  {{socorrista}}</p>
        <p>Médico:  {{medico}}</p>
        <p>Carro:  {{carro}}</p>
        <p>Telefone:  {{telefone}}</p>
        <p>Kit de reanimação:  {{kit}}</p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img class="img-fluid" :src="require(`@/assets/ambulancias/${getAmbulancia}.png`)">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary" @click="montar">Montar equipe</button>
          </div>
        </div>              
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    name: 'ConfiguracaoEquipe',
    
    computed:{
      ...mapState(
                  {enfermeiro:state=>state.equipe.enfermeiro,
                   socorrista:state=>state.equipe.socorrista,
                   medico:state=>state.equipe.medico,
                   carro:state=>state.equipe.carro,
                   telefone:state=>state.equipe.telefone,
                   kit:state=>state.equipe.kit,
                   equipe:state=>state.equipe}),

      getAmbulancia(){

        if(this.equipe.kit && this.equipe.carro){
          return "uti"
        }
         if(this.equipe.carro){
          return "simples"
        }

        return "indefinida"
      }
    
    },
   
 
    methods:{
       ...mapMutations({criar:"criarEquipe"}),

        montar(){
          
          if(this.enfermeiro && this.socorrista && this.medico && this.carro && this.telefone){
              this.criar(this.equipe)
          }else {
             alert("Equipe não está com todos os profissionais selecionados")
          }
        }

    },

}
</script>

