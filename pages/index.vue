<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text>{{ messages }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import io from 'socket.io-client';

export default {
  data () {
    return {
      messages: [],
    }
  },
  mounted() {
    this.socket.on('MESSAGE', (data) => {
        this.messages = [...this.messages, data]
        // you can also do this.messages.push(data)
    });
  }
}
</script>

<style scoped>

</style>