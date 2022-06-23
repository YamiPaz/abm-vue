<script setup>
import { reactive, ref } from 'vue';
import { crearProvincia, pathMain } from '@/config/URIPath';

// crear un registro
const post = reactive({
    id: '',
    nombre: '',
    capital: '',
    poblacion: '',
    superficie: '',
    nroDepartamentos: '',
    abreviatura: '',
    bandera: ''
});

const postEnv = process.env.VUE_BACKEND_POSTS_URI;
const title = ref('Crear provincia');

async function postSave() {
    const data = {
       
        nombre: post.nombre,
        capital: post.capital,
        poblacion: post.poblacion,
        superficie: post.superficie,
        nroDepartamentos: post.nroDepartamentos,
        abreviatura: post.abreviatura,
        bandera: post.bandera
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    await fetch(crearProvincia, requestOptions)
    .then(response => {
        response.json()
        window.location.href = `${pathMain}`;
    })
    .then(json => post.value = json);
}



</script>

<template>
<div>

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

             <div class="form-floating mb-3">
                <input type="text" class="form-control" id="bandera" placeholder="Bandera" v-model="post.bandera">
                <label for="title">Bandera</label>
            </div>


            <div class="form-floating">
                
                <div class="container">
                    <div class="row">
                        <div class="d-grid gap-2 mt-4">
                            <button class="btn btn-success" type="button" @click="postSave">Crear</button>
                        </div>
                        <div class="d-grid gap-2 mt-4">
                            <router-link to="/" class="btn btn-warning">Cancelar</router-link>
                        </div>
                    </div>
                </div>
            </div>
</div>
</template>
