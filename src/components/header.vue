<template>
  	<div class="header-top">
    	<el-breadcrumb class="breadcrumb-title" separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
			<el-breadcrumb-item>活动列表</el-breadcrumb-item>
			<el-breadcrumb-item>活动详情</el-breadcrumb-item>
    	</el-breadcrumb>
		<!-- <div class="hearder-userinfo">
			<div class="username">您好，{{userName}}</div>
			<div class="loginout" @click.prevent="logOut">退出</div>
		</div> -->
  	</div>
</template>

<script>
import { removeStore, removeStoreSession, getStoreSession, getStore } from '@/utils/utils.js'
export default {
  data() {
    return {
        userName: ''
    }
  },
  methods: {
    logOut() {
      console.log('hhhh')
      loginOut().then((res) => {
        console.log('退出成功')
        removeStore('authToken');
        removeStore('refreshToken');
        removeStore('loginInfouser');
        removeStore('menuAdmin');
        removeStoreSession('haslogin');
        this.islogin = false;
        this.$router.push({path: '/login'});
      }, (err) => {
      })
    }
  },
  mounted() {
    if (getStoreSession('haslogin') == 'yes') {
      let loginInfouser = JSON.parse(getStore('loginInfouser'));
      this.userName = loginInfouser.userInfo.userName
    }
  }
}
</script>
<style lang="scss">
.el-dropdown-menu {
	.el-dropdown-menu__item {
		text-align: center;
	}
}
.header-top {
	display: flex;
	justify-content: space-between;
	height: 100%;
	padding: 0 24px;
	font-size: 16px;
	color: #333;
	box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
	.breadcrumb-title {
		line-height: 64px;
		font-size: 20px;
	}
  	.hearder-userinfo {
		display: flex;
		align-items: center;
		padding: 0 20px;
		color: #fff;
    .username {
      	margin-right: 32px;
    }
    .loginout {
      	cursor: pointer;
    }
  }
}
</style>
