<template>
  <div class="love-me p-3">
    <vue-word-cloud
            :words="names"
            :color="([, weight]) => weight > 3 ? '#fff' : weight > 2 ? '#eee' : '#fff'"
            font-family="Pacifico" :spacing="8"
    />
    <transition name="fade">
      <div v-if="showHeart" @click="setHeart" class="heart p-5 text-center" :class="{'active-heart': activeHeart}">
        <transition name="fade">
          <input v-if="activeHeart" v-model="name" type="text" class="form-control name" placeholder="Имя">
        </transition>
        <small v-if="name === 'артур' || name === 'Артур'">Возможно, вы имели в виду Собака</small>
        <transition name="fade">
          <button v-if="activeHeart" @click="sendValentine" class="btn btn-danger mt-3">Отправить</button>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
  import VueWordCloud from 'vuewordcloud';
  import axios from "axios";

  export default {
    name: 'Loveme',
    components: {
      VueWordCloud,
    },
    data: () => {
      return {
        activeHeart: false,
        showHeart: true,
        name: null,
        names: null
      }
    },
    methods: {
      setHeart() {
        this.activeHeart = true;
      },
      sendValentine() {
        if (this.name) {
          axios.post('/api/techs', {
            name: this.name,
            num: 4
          });
          this.showHeart = false;
          this.getNames();
        }
      },
      async getNames() {
        const res = await axios.get('/api/techs');
        let arr = [];
        for (let item of res.data) {
          arr.push([item.name, item.num])
        }
        this.names = arr;
      }
    },
    created() {
      this.getNames();
    },
    mounted() {
        console.log(this.namesArr)
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Pacifico&subset=cyrillic');

  .love-me {
    height: 100vh;
    background-color: #7b0a0b;
    .heart {
      background: url('../assets/img/love-me/heart.png') no-repeat center;
      background-size: contain;
      height: 300px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 300px;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      cursor: pointer;
      &.active-heart {
        width: 320px;
        height: 320px;
      }
      &:hover {
        width: 320px;
        height: 320px;
      }

      .name {
        margin-top: 3rem;
        &:focus {
          border-color: #cb4e44;
          -webkit-box-shadow: 0 0 0 0.2rem rgba(123, 27, 22, 0.2);
          -moz-box-shadow: 0 0 0 0.2rem rgba(123, 27, 22, 0.2);
          box-shadow: 0 0 0 0.2rem rgba(123, 27, 22, 0.2);
        }
      }
      .btn-danger {
        background: #9a2d28;
        border: none;
      }
    }

    /* Анимация */
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  }


</style>