<template>
    
        <tr class="text-center">
            <th scope="row"  >{{indice+1}}</th>
            <td >{{dados.enfermeiro}}</td>
            <td >{{dados.socorrista}}</td>
            <td >{{dados.medico}}</td>
            <td >{{dados.carro}}</td>
            <td >{{dados.telefone}}</td>
            <td >{{dados.kit}}</td>
        </tr>
    
</template>

<script>


export default {
    name: 'Equipe',
    props:{
        dados:Object,
        indice: Number
    }

}
   
</script>