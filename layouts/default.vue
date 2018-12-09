<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile 
          v-for="item in menuItems" 
          :key="item.title" 
          :to="item.link">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <nuxt-link to="/" tag="span" style="cursor: pointer"><img src="" alt="nuxtserial Mexico Logo" height="50px">nuxtserial</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat
        v-for="item in menuItems" 
        :key="item.title"
        :to="item.link">
        {{ item.title }}
        </v-btn>
        <!-- <v-btn flat v-if="userIsAuthenticated" @click="onLogout">
          <v-icon>exit_to_app</v-icon>Logout
        </v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <nuxt />
      </v-content>
    </main>
    <v-footer class="pa-3" app>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { title: 'Home', link: '/' }
        ]
        return menuItems
      },
    },
  }
</script>

<style scoped>

</style>