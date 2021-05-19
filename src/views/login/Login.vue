<template>
  <div class="home">
    <div class="bg"></div>
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
  computed: {
    ...mapState("foot", {
      state: "state",
    }),
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      console.log(this.user, this.password);
      this.$store._actions.login[0]({user:this.user, password:this.password}).then((res) => {
        if (res) {
          this.$router.push("/index");
        }
      });
    },
    resetHandler(e) {
      console.log("reset", e);
    },
    ...mapMutations({
      login: "login",
    }),
  },
};
</script>
<style scoped lang="less">
@import "@/static/css/login.less";
</style>
