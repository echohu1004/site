<template>
    <el-container>
		<el-aside width="200px">
			<v-menu></v-menu>
		</el-aside>
        <el-container>
        	<el-header><v-header></v-header></el-header>
            <el-main>
				<router-view class="bg"></router-view>
			</el-main>
        </el-container>
    </el-container>
</template>
<script>
import header from '@/components/header.vue'
import leftMenu from '@/components/leftMenu.vue'
export default {
	name: 'app',
	data() {
		return {
		}
	},
	components: {
		'v-header': header,
		'v-menu': leftMenu
	},
}
</script>

<style lang="scss">
	@import "@/common/scss/element-variables.scss";
	.el-container{
		height: 100%;
		background-color: #f2f5f7;
		font-size: 14px;
	}
	.el-header {
		padding: 0!important;
		height: 64px;
		line-height: 64px;
		background-color: #ffffff;
	}
	.el-main {
		height: 100%;
		background-color: #f2f5f7;
	}
	.bg {
		background-color: #ffffff;
	}
</style>