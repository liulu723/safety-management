<template>
  <div class="home">
    <bs-background></bs-background>
  <cube-form  class="base_form">
      <cube-form-group>
        <cube-form-item>
          <cube-input
            type="text"
            placeholder="账号"
            v-model="user"
          ></cube-input>
        </cube-form-item>
        <cube-form-item>
          <cube-input
            type="password"
            placeholder="密码"
            v-model="password"
            :eye="eye"
          ></cube-input>
        </cube-form-item>
      </cube-form-group>
      <cube-form-group> 
        <cube-button type="submit" @click="submitHandler" class="base_btn">登录</cube-button>
      </cube-form-group>
      <cube-form-group class='get-password'>
        <router-link to="/login/logout">
          忘记密码？
        </router-link>
      </cube-form-group>
    </cube-form>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import BSBackground from '@/components/BSBackground'
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
      eye: {
        open: false,
        reverse: false,
      },
    };
  },
  created() {
    console.log(this.$store._actions);
  },
  beforeCreate () {
	// 修改背景色
    document.querySelector('body').setAttribute('style', 'background-color:#fff')
},
beforeDestroy () {
	// 销毁背景色
   document.querySelector('body').removeAttribute('style')
},
  computed: {
    ...mapState("foot", {
      state: "state",
    }),
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      this.$store._actions.login[0]({user:this.user, password:this.password}).then((res) => {
        if (res) {
          this.$router.push("/index");
        }
      });
    },
    resetHandler() {
    },
    ...mapMutations({
      login: "login",
    }),
  },
  components:{
    'bs-background':BSBackground
  }
};
</script>
<style scoped lang="less">
@import "@/static/css/login/login.less";
</style>
