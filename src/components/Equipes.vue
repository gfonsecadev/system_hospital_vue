<template>
    <div>
        <div class="row">
            <div class="col">
                <h5><i class="bi-clipboard-check me-2"></i>Equipes montadas</h5>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <listas-equipe  />
            </div>
        </div>
    </div>
</template>

<script>
import ListasEquipe from '@/components/ListasEquipe.vue'

export default {
    name: 'Equipes',
    components: {
        ListasEquipe
    }
}
</script>