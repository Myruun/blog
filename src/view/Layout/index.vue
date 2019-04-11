<template>
  <div id="layout">
    1
    <router-view />
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <cardimgtext />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import cardimgtext from '@/view/Other/card/card-image-text'
export default {
  name: 'Layout',
  comments: {
    cardimgtext
  }
}
</script>

<style scoped>
</style>
