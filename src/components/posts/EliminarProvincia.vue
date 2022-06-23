<script setup>
import { eliminarProvincia, GetProvincia_id, pathMain } from '@/config/URIPath';
import { onBeforeMount, ref, computed } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

const post = ref([]);


const deneme = computed(() => {
    if (route.params.id !== post.value.id) {
        return true
    }
})

onBeforeMount(async () => {
    try {
        await fetch(GetProvincia_id + route.params.id)
            .then(response => response.json())
            .then(json => post.value = json);
    } catch (error) {
        console.log(error);
    }
});

async function deletePost() {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    await fetch(eliminarProvincia + route.params.id, requestOptions)
        .then(response => {
            response.json()
            window.location.href = `${pathMain}`;
        })
        .catch(error => console.log(error));
}

</script>
<template>
<div>
    <PostTitle :title="title" />
        <div class="card mt-3">
            <span class="text-start badge bg-light text-wrap text-muted extra-small">_id: {{ post.id }}</span>
            <div class="card-body">
                <span v-if="deneme">
                    <h3>No se encuentra la provincia</h3>
                </span>
                <h5 class="card-title">{{ post.nombre }}</h5>
                <p class="card-text">{{ post.capital }}</p>
                <p class="card-text">{{ post.poblacion }}</p>
                <p class="card-text">{{ post.superficie }}</p>
                <p class="card-text">{{ post.post.nroDepartamentos }}</p>
                <p class="card-text">{{ post.post.abreviatura }}</p>
                <p class="card-text">{{ post.post.bandera }}</p>


                <div class="container">
                    <div class="row">
                        <div class="d-grid gap-2 mt-4">
                            <button @mouseover="btn = 'success'" @mouseleave="btn = 'danger'"
                                :class='"btn btn-block btn-" + btn' @click="deletePost">
                                {{ btn == 'danger' ? 'Seguro que desea eliminar este registro?' : 'Si' }}
                            </button>
                        </div>
                        <div class="d-grid gap-2 mt-4">
                            <router-link to="/" class="btn btn-warning">Cancelar</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.extra-small {
    font-size: 0.6rem;
    font-style: italic;
}
</style>
