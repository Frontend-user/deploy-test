<template>

  <div class="posts-view">
    <div class="posts-view__inner">
      <div class="posts-view__filters">
        <el-input
          class="posts-view__search-field"
          v-model="postsStore.searchModel"
          style="width: 240px"
          placeholder="Введите текст для поиска..."
        />
        <el-select
          class="posts-view__select-field"
          v-model="postsStore.sortFieldName"
          placeholder="Select"
          size="large"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-button class="posts-view__button" @click="postsStore.changeDialogVisible" type="success"
          >Создать пост
        </el-button>
      </div>
      <post-dialog
        @create-post="postsStore.createPost"
        @update-post="postsStore.updatePost"
        :dialog-type="postsStore.dialogType"
      />
      <context-menu v-if="postsStore.showContextMenu" />
      <posts-list :list="postsStore.getSlicedPosts" />
      <el-pagination
        size="small"
        background
        v-model:page-size="postsStore.pageSize"
        v-model:current-page="postsStore.pageNumber"
        layout="prev, pager, next"
        :total="postsStore.getFilteredPosts.length"
        class="mt-4"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { usePostsStore } from '@/stores/postsStore'

const postsStore = usePostsStore()
import PostsList from '@/components/posts-list.vue'
import PostDialog from '@/components/post-dialog.vue'
import ContextMenu from '@/components/context-menu.vue'

const options = [
  {
    value: 'title',
    label: 'Заголовок'
  },
  {
    value: 'description',
    label: 'Описание'
  }
]
</script>
<style lang="less" scoped>
.posts-view {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  &__filters {
    width: 700px;
    padding: 20px 0 20px 0;
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__search-field {
    height: 40px;
  }

  &__select-field {
    height: 40px;
  }

  &__button {
    width: 100%;
    height: 40px;
  }
}
</style>
