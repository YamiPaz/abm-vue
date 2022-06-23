<script setup>
import { editarProvincia, GetProvincia_id, pathMain } from '@/config/URIPath';
import { onBeforeMount, reactive, ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()


const post = ref([]);

onBeforeMount(async () => {
    try {
        try {
        await fetch(GetProvincia_id  + route.params.id)
            .then(response => response.json())
            .then(json => post.value = json);
    } catch (error) {
        console.log(error);
    }
    } catch (error) {
        console.log(error);
    }
});



async function editSave() {
    const data = {
        id: post.id,
        nombre: post.nombre,
        capital: post.capital,
        poblacion: post.poblacion,
        superficie: post.superficie,
        nroDepartamentos: post.nroDepartamentos,
        abreviatura: post.abreviatura,
        bandera: post.bandera
    };
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    await fetch(editarProvincia , requestOptions)
        .then(response => {
            response.json()
            window.location.href = `${pathMain}`;
        })
        .then(json => post.value = json);
}


</script>

<template>
<div>
    
        <!-- <form @submit.prevent="editSave(post._id, event)"> DATA CHECK CONTROL AFTER -->
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="id" placeholder="ID provincia" v-model="post.id">
                <label for="title">ID provincia</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="nombre" placeholder="Nombre provincia" v-model="post.nombre">
                <label for="title">Nombre provincia</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="capital" placeholder="Capital" v-model="post.capital">
                <label for="title">Capital</label>
            </div>

            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="poblacion" placeholder="Población" v-model="post.poblacion">
                <label for="title">Población</label>
            </div>

            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="departamentos" placeholder="Departamentos" v-model="post.nroDepartamentos">
                <label for="title">Número de departamentos</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="abreviatura" placeholder="Abreviatura" v-model="post.abreviatura">
                <label for="title">Abreviatura</label>
            </div>

            <div class="form-floating">
                 <div class="container">
                    <div class="row">
                        <div class=" gap-2 mt-4">
                            <button class="btn btn-success" type="button" @click="editSave()">Guardar</button>
                        </div>
                        <div class=" gap-2 mt-4">
                            <router-link to="/" class="btn btn-warning">Cancelar</router-link>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </form> -->
    </div>
</template>
