<template>
  <div>
    <div>
      <h1 id="tituloComentario_test" class="tituloComentario">
        <span class="modificarTituloComentario">{{ comentario }}</span>
      </h1>
    </div>

    <v-container>
      <!-- INICIO DE CONTACTO -->
      <v-btn
        dark
        block
        id="contactanos_test"
        class="btn_contacto_test"
        color="deep-purple lighten-3"
        :to="{ name: 'Contacto' }"
      >
        CONTÁCTANOS
      </v-btn>
      <router-view />
      <!-- FINAL DE CONTACTO -->

      <!-- ENVIAR COMENTARIOS A LOS ARTISTAS -->
      <div>
        <h3 class="tituloEscribele font-weight-thin text-center my-5">
          ESCRIBELE A NUESTROS ARTISTAS DE
          <span class="modificacionEscribele font-weight-bold"
            >AUFIELDS CHILE 2021
          </span>
        </h3>
      </div>
      <div class="ma-10">
        <p id="textDiscapacidad_test" class="text-caption text-justify">
          {{ discapacitado }}
        </p>
        <p class="text-caption">
          {{ notaComentarios }}
        </p>
        <router-link class="linkAgregar" to="/agregar">
          <v-btn class="btnAgregar_test" dark color="purple accent-4" block>
            AGREGAR
          </v-btn>
        </router-link>
      </div>
      <!-- CONTADOR DE LIKES -->
      <div>
        <div class="tegustaComentarios">
          <h5 class="textLike_test text-caption mx-5 pa-3 purple lighten-4">
            ¿Te gusta esta sección de comentarios?
          </h5>
          <v-btn id="btnContador_test" class="ma-5" icon text @click="likes">
            <v-icon color="yellow">mdi-star</v-icon> {{ count }}
          </v-btn>
        </div>

        <!-- CARD COMENTARIOS -->
        <v-card
          class="ma-2 purple accent-1"
          v-for="(item, index) in comentarios"
          :key="index"
        >
          <v-chip
            class="ma-2 text-caption
        "
            color="purple lighten-1 "
            label
            text-color="white"
          >
            <v-icon left>
              mdi-label
            </v-icon>
            {{ item.id }}
          </v-chip>
          <v-card-text class="textoDataNombre">
            {{ item.data.nombre }}
          </v-card-text>

          <v-divider></v-divider>

          <div class="purple lighten-3">
            <router-link class="linkEditar" :to="`/editar/${item.id}`">
              <v-btn
                @click="editar(item.id)"
                class="ma-2"
                id="btnEditar_test"
                icon
                color="purple accent-4"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </router-link>
            <v-btn icon @click="eliminar(item.id)" color="amber darken-4">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-card>
      </div>

      <!-- FINAL COMENTARIOS A LOS ARTISTAS -->
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Contactous",
  data() {
    return {
      comentario: "COMENTARIOS",
      count: 0,
      discapacitado:
        "Si tiene alguna pregunta relacionada con el acceso para discapacitados y / o desea registrarse en el programa, o si tiene preguntas sobre la entrada de medicamentos al evento, comuníquese con el equipo de acceso en acceso@aufields.cl o llame al 0207009 3490.",
      notaComentarios:
        "Puedes agregar un comentario para los artistas invitados al AUFIELDS 2021",
    };
  }, //final de data
  computed: {
    ...mapState("Comentarios", ["comentarios"]),
  },
  methods: {
    ...mapActions("Comentarios", ["eliminarComentario"]),
    editar() {
      this.$swal("Muy bien!", "Puedes editar el comentario!", "success");
    },
    eliminar(id) {
      this.eliminarComentario(id);
      this.$swal("Cuidado!", "Borraste el comentario!", "error");
    },
    likes() {
      this.count++;
    },
  },
};
</script>

<style lang="scss" scoped>
.tituloComentario {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 60px 0;

  background: #6e60f1;
  background: linear-gradient(49deg, #6e60f1 0%, #7ec4f7 80%);
  background: -webkit-linear-gradient(49deg, #6e60f1 0%, #7ec4f7 80%);
  background: -moz-linear-gradient(49deg, #6e60f1 0%, #7ec4f7 80%);
  .modificarTituloComentario {
    color: #f3e5f5;
  }
}
.textoDataNombre {
  color: #6a1b9a;
}
.linkAgregar {
  text-decoration: none;
}
.tituloEscribele {
  color: #ffc107;
}
.modificacionEscribele {
  color: #7c4dff;
}
.linkEditar {
  text-decoration: none;
}
</style>
