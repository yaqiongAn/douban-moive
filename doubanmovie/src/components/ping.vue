<template lang="html">
  <div class="ping">
     <h1><span>短评</span><label>写短评</label></h1>
     <div class="perping" v-for="item of popular">
      <h2>
        <h3>
          <img v-lazy="getImage(item.author.avatar)" alt="">
          <span>{{item.author.name}}</span>
          <div class="stars" >
              <img src="../../static/img/gray.png" alt="">
              <div class="starsbox" :style="{width:rating.average*0.1+'rem'}">
                  <img  src="../../static/img/huang.png" alt="" >
              </div>
          </div>
        </h3>
        <h4>
          <img src="../../static/img/zan.png" alt="" @click="zan">
          <label>{{item.useful_count}}</label>
        </h4>
     </h2>
     <p>{{item.content}}</p>
     </div>
     <div class="allping"  @click="pushping(id)">
       全部短评<span>{{counts}}</span>条
     </div>
  </div>
</template>

<script>
let jsonp = require("jsonp");
export default {
  name: "ping",
  data() {
    return {
      // 在数据中接收
      id: this.$route.params.id,
      msg: {},
      popular: {},
      counts: "",
      rating: {}
    };
  },
  methods: {
    getImage(url) {
      if (url !== undefined) {
        return url.replace("https://", "https://images.weserv.nl/?url=");
      }
    },
    getData() {
      databus.$on("alldata", data => {
        this.msg = data;
        this.popular = data.popular_comments;
        this.counts = data.comments_count;
        this.rating = data.rating;
        // console.log('热门短评，bus传值');
        // console.log(this.msg);
      });
    },
    pushping(item) {
      this.$router.push({
        path: "/pingpage/" + item
      });
    },
    zan() {
      if(!this.$store.getters.IS_LOGIN) {
        this.$router.push({
          path: "/login"
        });
      }
    }
  },
  created() {
    if (this.id) {
      this.getData();
    }
  },
  watch: {
    $route(newdata, olddata) {
      this.id = newdata.params.id;
    }
  }
};
</script>
<style lang="css">
.ping h1 {
  width: 90%;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #000;
  margin: 0 auto;
  font-size: 0.3rem;
}
.ping h1 label {
  float: right;
  margin-top: 0.2rem;
  font-size: 0.15rem;
  text-align: center;
  color: green;
  width: 0.8rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border: 0.01rem solid green;
  border-radius: 0.04rem;
}
.ping h2 {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0.8rem;
}
.ping h2 h3 > img,
.ping h2 h4 img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  vertical-align: middle;
}
.ping h2 h4 img {
  width: 0.35rem;
  height: 0.35rem;
}
.ping p {
  width: 90%;
  line-height: 0.5rem;
  margin: 0 auto;
}
.allping {
  width: 100%;
  text-align: center;
  color: green;
  font-size: 0.25rem;
  font-weight: 900;
  line-height: 1rem;
  border-bottom: 0.01rem solid lightgray;
}
.perping h2 h3 span {
  font-weight: 900;
}
.stars {
  height: 0.2rem;
  line-height: 0.2rem;
  width: 1rem;
  position: relative;
  display: inline-block;
}
.starsbox {
  overflow: hidden;
  position: absolute;
  height: 0.35rem;
}
.stars img {
  width: 1rem;
  position: absolute;
  height: 0.2rem;
}

</style>
