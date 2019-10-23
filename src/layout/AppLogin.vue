<template>
    <div class="appLogin">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
	name: 'app',
	data() {
		return {
		}
	}
}
</script>

<style>
  	.appLogin {
    	min-width: 1280px;
        height: 100%;
	}
</style>