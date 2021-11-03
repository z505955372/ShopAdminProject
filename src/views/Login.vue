<template>
  <div class="container">
    <!-- 左边部分 -->
    <div class="info-side">
      <div class="imager">
        <img src="../assets/img/info-img111.png" alt="" />
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="login-side">
      <el-form :model="LoginFrom" :rules="LoginFromRules" ref="LoginFromRef">
        <div class="login-container">
          <h1>电商购物管理平台</h1>
          <el-form-item prop="username">
            <el-input
              class="username"
              v-model="LoginFrom.username"
              type="text"
              placeholder="请输入你的账号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              class="password"
              v-model="LoginFrom.password"
              type="password"
              placeholder="请输入你的密码"
            >
            </el-input>
          </el-form-item>
          <button class="login-button" @click="login">登录</button>
          <div class="two-fled">
            <div class="fled-one">
              <input type="checkbox" name="" id="" />
              记住密码
            </div>
            <div class="fled-two">
              <a href="#">已有账号，忘记密码?</a>
            </div>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LoginFrom: {
        username: "zs",
        password: "231",
      },
      // 表单验证规则
      LoginFromRules: {
        username: [
          { required: true, message: "用户名为必填项", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码为必填项", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.LoginFromRef.validate(async valid => {
        if (!valid) return;
        const{data:res} = await this.$http.post("login", this.LoginFrom);
        if(res.meta.status !==200){return  this.$message.error('登录失败')}else{
         this.$message.success('登录成功')
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/common.css";
.container {
  position: relative;
  top: 200px;
  width: 1100px;
  height: 550px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  display: flex;
  border-radius: 15px;
  transition: 200ms;
}
.info-side .imager {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.info-side {
  width: 800px;
  height: 550px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
}

.login-side {
  width: 300px;
  height: 550px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}
.login-container {
  width: 250px;
  height: 500px;
}
.login-container h1 {
  font: 900 30px "";
}
// .login-container .username, .password {
//   width: 230px ;
//   margin: 20px 0 ;
//   outline: none;
//   border: 0 ;
//   padding: 10px;
//   border-bottom: 3px solid rgb(80, 80, 170) !important;
//   font: 900 16px "";
// }

.login-container .login-button {
  margin: 20px 0;
  width: 230px;
  height: 35px;
  background-image: linear-gradient(150deg, #a1c4fd 10%, #8fd3f4 100%);
  border-radius: 5px;
  transition: 200ms;
}
.login-container .login-button:hover {
  transform: scale(1.05);
}
.container:hover {
  transform: scale(1.05);
}
.login-container .two-fled {
  margin: 20px 0px;
  width: 250px;
  float: left;
}
.login-container .two-fled .fled-one {
  text-align: left;
}
.login-container .two-fled .fled-two {
  margin: 20px 0;
  text-align: center;
}
.login-container a {
  text-decoration: none;
  cursor: pointer;
  color: #005980;
}
</style>
