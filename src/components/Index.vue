<template>
  <div>
    
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Emergencias Médicas</a>
      </div>
    </nav>

    <div class="container">

      <div class="row mt-5">
        <div class="col-6 p">
          <profissionais />
        </div>

        <div class="col-6">
          <equipamentos />
        </div>
      </div>

      <div class="row mt-5 mb-5 bg-light p-2">
        <div class="col">
          <configuracao-equipe />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col">
          <equipes />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfiguracaoEquipe from './ConfiguracaoEquipe.vue'
import Equipamentos from './Equipamentos.vue'
import Equipes from './Equipes.vue'
import Profissionais from './Profissionais.vue'
import {mapActions} from 'vuex'
export default {
  data:()=>({
    profissonais:["enfermeiros","socorristas","medicos"]
  }),
  components: { 
    ConfiguracaoEquipe,
    Equipamentos,
    Equipes,
    Profissionais
  },

  name: 'Index',
  props: {
    msg: String
  },

  methods:{
    ...mapActions({
                getProfissionais:"recuperarProfissionais",
                getEquipamentos:"recuperarEquipamentos"
    })          
  },

  created() {
    this.getProfissionais(this.profissonais)
    this.getEquipamentos()
  },
}
</script>

