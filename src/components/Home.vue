<template>
  <div id="home">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Perkataanmu ke bagas</h4></li>
      <li v-for="message in messages" v-bind:key="message.id" class="collection-item">
        {{message.content}}
      </li>
    </ul>
    <router-link to="/new"><button type="submit" class="btn green">Tambah Baru</button></router-link>    
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'home',
    data () {
      return {
        messages: [],
        loading: true
      }
    },
    created () {
      db.collection('messages').orderBy('content').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'content': doc.data().content,
            //next features
            // 'createdAt': doc.data().createdAt
          }
          this.messages.push(data)
        })
      })
    }
  }
</script>