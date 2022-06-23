<script setup>
import { GetProvincia_id  } from '@/config/URIPath';
import { onBeforeMount, ref, computed } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

const post = ref([]);
const deneme = computed(() => {
    if(route.params.id !== post.value.id) {
        return true
    }
})

onBeforeMount(async () => {
    try {
        await fetch(GetProvincia_id  + route.params.id)
            .then(response => response.json())
            .then(json => post.value = json);
    } catch (error) {
        console.log(error);
    }
});

</script>

<template>
<div>   
        <div class="card mt-3">
            <span class="text-start badge bg-light text-wrap text-muted extra-small">id: {{ post.id }}</span>
            <div class="card-body">
                <span v-if="deneme"><h3>No hay registro</h3></span>
                <h5 class="card-title">
                    <table>
                        <tr>
                            <td>Provincia:</td>
                            <td>{{ post.nombre }}</td>
                        </tr>
                    </table>                    
                </h5>
                <p class="card-text">
                    <table>
                        <tr>
                            <td>Capital: </td>
                            <td>{{ post.capital }}</td>
                        </tr>
                        <tr>
                            <td>Población: </td>
                            <td>{{ post.poblacion }}</td>
                        </tr>
                        <tr>
                            <td>Superficie: </td>
                            <td>{{ post.superficie }}</td>
                        </tr>
                        <tr>
                            <td>Número de Departamentos: </td>
                            <td>{{ post.nroDepartamentos }}</td>
                        </tr>
                        <tr>
                            <td>Abreviatura: </td>
                            <td>{{ post.abreviatura }}</td>
                        </tr>
                        <tr>
                            <td>Bandera: </td>
                           <img :src="`./img/${post.bandera}`">
                            
                        </tr>
                        
                    </table>
                </p>
                <div class="btn-group">
                    <router-link to="/" class="btn btn-outline-warning btn-sm">Atrás</router-link>
                    <router-link :to="{name:'post-edit'}" class="btn btn-outline-success btn-sm">Editar</router-link>
                    <router-link :to="{name:'post-delete'}" class="btn btn-outline-danger btn-sm">Borrar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.extra-small {
    font-size: 0.6rem;
    font-style: italic;
}
</style>
