<template>
  <div id="login">
    <div id="bgd">
      <canvas
        id='myCanvas'
        :width='width'
        :height='height'
      >
      </canvas>
    </div>
    <div id="loginBox">
      <h4>登录</h4>
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
        <el-form-item
          label=""
          prop="userName"
          style="margin-top:40px;"
        >
          <el-row>
            <el-col :span='2'>
              <i class="el-icon-user"></i>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='用户名'
                v-model="loginForm.userName"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item
          label=""
          prop="passWord"
        >
          <el-row>
            <el-col :span='2'>
              <i class="el-icon-lock"></i>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='密码'
                v-model="loginForm.passWord"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            round
            class="submitBtn"
            @click="submitForm"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      context: null,
      stars: [], //星星数组
      shadowColorList: [
        "#39f",
        "#ec5707",
        "#b031d4",
        "#22e6c7",
        "#92d819",
        "#14d7f1",
        "#e23c66"
      ], //阴影颜色列表
      directionList: ["leftTop", "leftBottom", "rightTop", "rightBottom"], //星星运行方向
      speed: 50, //星星运行速度
      last_star_created_time: new Date(), //上次重绘星星时间
      Ball: class Ball {
        constructor(radius) {
          this.x = 0;
          this.y = 0;
          this.radius = radius;
          this.color = "";
          this.shadowColor = "";
          this.direction = "";
        }
      }, //工厂模式定义Ball类
      width: window.innerWidth,
      height: window.innerHeight,
      loginForm: {
        userName: "",
        passWord: ""
      },
      loginRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //提交登录
    async submitForm() {
        let res = await this.$axios.queryUserInfo();
        console.log(res);
        alert('登录成功：',res)
    },
  },
  mounted() {
    // this.canvas = document.getElementById("myCanvas");
    // this.context = this.canvas.getContext("2d");
  }
};
</script>

<style lang='scss' scoped>
#login {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  font-size: 16px;
  background-repeat: no-repeat;
  background-position: left top;
  background-color: #242645;
  color: #fff;
  font-family: "Source Sans Pro";
  background-size: 100%;
  background-color: #158cbb;
  position: relative;
  #bgd {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #loginBox {
    width: 280px;
    height: 280px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
    /deep/ .inps input {
      border: none;
      color: #fff;
      background-color: transparent;
      font-size: 12px;
    }
    .submitBtn {
      background-color: transparent;
      color: #39f;
      width: 200px;
    }
  }
}
</style>