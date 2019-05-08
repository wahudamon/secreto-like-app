<template>
  <div id="new-message">
    <h3>Pesan barumu untuk bagas</h3>
    <div class="row">
    <form @submit.prevent="saveMessage" class="col s12">
       <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="content" required>
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
  </div>
  </div>
</template>

<script>
    import db from './firebaseInit'
    export default {
      name: 'new-message',
      data () {
        return {
          content: null
        }
      },
      methods: {
        saveMessage () {
          db.collection('messages').add({
            content: this.content
          })
          .then(docRef => {
            console.log('Message added: ', docRef.id)
            this.$router.push('/')
          })
          .catch(error => {
            console.error('Error adding message: ', error)
          })
        }
      }
    }
</script>