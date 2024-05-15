import {Store} from 'vuex'

export default new Store({
    state:{
        enfermeiros: [],
        socorristas: [],
        medicos: [],
        equipamentos: {
            carros: [],
            telefones: [],
            kitsDeReanimacao: []
        },

        equipe:{  enfermeiro:"",
                  socorrista:"",
                  medico:"",
                  carro:"",
                  telefone:"",
                  kit:""},

        equipesMontadas:[ ]
                  
                },

    getters:{
        getTotalEnfermeiros(state){
            return state.enfermeiros.length  
        },
        getTotalSocorristas(state){
            return state.socorristas.length  
        },
        getTotalMedicos(state){
            return state.medicos.length  
        },

        getTotalPorturno(state){
            return (turno)=>{
                if(turno!=="") return state.socorristas.filter((e)=>e.turno==turno).length
                
                return "Selecione um filtro"
            }
        }
    },

    mutations:{
        recuperarStateProfissionais(state,payload){
            let dado=payload.dado
            let tipo=payload.tipo
            switch(tipo){
                case "enfermeiros":return state.enfermeiros=dado
                case "socorristas":return state.socorristas=dado
                case "medicos":return state.medicos=dado
              }
        },

        recuperarStateEquipamentos(state,payload){
            state.equipamentos.carros=payload.carros
            state.equipamentos.kitsDeReanimacao=payload.kitsDeReanimacao
            state.equipamentos.telefones=payload.telefones
        },

        montarEquipe(state,payload){
            let dado=payload.dado
            let tipo=payload.tipo
            switch(tipo){
                case "enfermeiros":return state.equipe.enfermeiro=dado.nome
                case "socorristas":return state.equipe.socorrista=dado.nome
                case "medicos":return state.equipe.medico=dado.nome
                case "carros":return state.equipe.carro=dado.placa
                case "telefones":return state.equipe.telefone=dado.telefone
                case "kits-de-reanimacao":return state.equipe.kit=dado.kit
      
              }
          
            
        },

        criarEquipe:(state,payload)=>{
            state.equipesMontadas.push(payload)
            state.equipe={}
        }
    },

    actions:{
        recuperarProfissionais(context,payload){//pode também receber um payload como parâmetro
            payload.forEach(element => {
                fetch("https://db-json-sistema-hospitalar-vue.vercel.app/"+element)
                .then((resp)=>resp.json())
                .then(((resp)=>{
                    let dados={tipo:element,dado:resp}
                    context.commit("recuperarStateProfissionais",dados)
                    
                }))
            });
            
        },

        recuperarEquipamentos({commit}){
            fetch("https://db-json-sistema-hospitalar-vue.vercel.app/equipamentos")
            .then(resp=>resp.json())
            .then((resp)=>{
                commit("recuperarStateEquipamentos",resp)
            })
        }
    }
})
