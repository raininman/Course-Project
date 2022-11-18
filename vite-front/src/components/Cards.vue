<template>
  <div class="container">
    <router-link to="/expressionism" class="panel" :class="{ 'active': card1 }" @mouseover="card1=true" @mouseout="card1=false"  style="background-image: url('https://s.studiobinder.com/wp-content/uploads/2019/08/What-is-German-Expressionism-in-Film-Header.jpeg')">
      <h3>German Expressionism</h3>
    </router-link>
    <router-link to="/hollywood"  class="panel" :class="{ 'active': card2 }" @mouseover="card2=true" @mouseout="card2=false" style="background-image: url('https://www.futurity.org/wp/wp-content/uploads/2018/07/grayscale-hollywood-sign_1600.jpg')">
      <h3>New Hollywood</h3>
    </router-link>
    <router-link to="/french"  class="panel" :class="{ 'active': card3 }" @mouseover="card3=true" @mouseout="card3=false" style="background-image: url('https://nofilmschool.com/sites/default/files/styles/article_wide/public/the_french_new_wave.jpeg?itok=e3HcItpv')">
      <h3>French New Wave</h3>
    </router-link>
    <router-link to="/independent" class="panel" :class="{ 'active': card4 }" @mouseover="card4=true" @mouseout="card4=false" style="background-image: url('https://www.regentstreetcinema.com/images/Yv49JTjBEJ7KfbhBJLriMymFb_4=/114104/fill-1200x630/Outside_of_Cinema_at_Night.jpg')">
      <h3>Independent</h3>
    </router-link>
    <router-link to="/decades"  class="panel" :class="{ 'active': card5 }" @mouseover="card5=true" @mouseout="card5=false" style="background-image: url('https://img.freepik.com/premium-photo/old-movie-camera-consisting-tripod-lens-film-reels-clapperboards-black-white-photo_90134-457.jpg?w=2000')">
      <h3>Decades</h3>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  card1: {
    type: Boolean,
    default: false,
  },
  card2: {
    type: Boolean,
    default: false,
  },
  card3: {
    type: Boolean,
    default: false,
  },
  card4: {
    type: Boolean,
    default: false,
  },
  card5: {
    type: Boolean,
    default: false,
  }
});
</script>


<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin: auto;
  margin-top: 50px;
}
.panel{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex:0.5;
  margin: 0 10px;
  position: relative;
  transition: flex 0.7s ease-in;
}
.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity:0;
}
.panel.active{
  flex: 5;
}
.panel.active h3{
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
</style>