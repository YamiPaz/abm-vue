<script setup>
import { GetProvincias, GetProvincias_nombre } from '@/config/URIPath';
import { onBeforeMount, ref, computed } from 'vue';

const posts = ref([]);
const post = ref([]);
const busqueda = '';

onBeforeMount(async () => {
    try {
        await fetch(GetProvincias)
            .then(response => response.json())
            .then(json => posts.value = json);
    } catch (error) {
        console.log(error);
    }
});

async function buscarProvincia(title) {
      try {
      await fetch(GetProvincias_nombre + title)
        .then(response => response.json())
            .then(json => posts.value = json);
         } catch (error) {
        console.log(error);
    }
     }
    
  


</script>

<template>
<div class="mb-2">
    <h1>Provincias Argentinas</h1>
    <div class="gap-2 mt-4">
        <router-link to="/crear" class="btn btn-primary">Agregar Provincia</router-link>
    </div>
    </div>
<input type="text" class=" mt-4 mb-4 form-control" placeholder="Buscar por nombre de provincia" v-model="busqueda" v-on="buscarProvincia(busqueda)"/>

    <table class="table table-hover table-responsive">
        <thead>
            <tr>
                <th scope="col">Provincia</th>
                <th scope="col">Abreviatura</th>
                <th scope="col">Bandera</th>
                <th scope="col"> </th>
            </tr>
        </thead>
        <tbody>
            <template v-if="posts.length > 0">
                <tr v-for="(i, index) in posts" :key="i.id">                    
                    
                      <td class="text-center">
                            {{ i.nombre }}
                    </td>                       
                        
                    
                    <td class="text-center">
                            {{ i.abreviatura }}
                    </td>
                    <td>
                        <img :src="`./img/${i.bandera}`">
                        
                          </td>
                    <td class="text-end">
                        <div class="btn-group">
                            <router-link :to="{ name: 'post-edit', params: { id: i.id } }"
                                class="btn btn-outline-success btn-sm">Editar</router-link>
                            <router-link :to="{ name: 'post', params: { id: i.id } }"
                                class="btn btn-outline-primary btn-sm">Detalle</router-link>
                            <router-link :to="{ name: 'post-delete', params: { id: i.id } }" class="btn btn-outline-danger btn-sm">Eliminar</router-link>
                        </div>
                    </td>
                </tr>
            </template>
            <tr v-else>
                <td colspan="4">No hay registros</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.extra-small {
    font-size: 0.5rem;
}

</style>
