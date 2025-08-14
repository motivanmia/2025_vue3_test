import { ref } from "vue";
import { defineStore } from "pinia";
// 可以不用做到local storage

export const useFavoriteStore = defineStore("favoriteStore", () => {
  const list = ref([]);

  // 任務8. 加入我的最愛
  const addFav = (album) => {
    const found = list.value.find((item) => item.id === album.id);
    if (!found) {
      list.value.push(album);
    }
    // console.log(album);
  };

  // 移除我的最愛
  const removeFav = (album) => {
    const albumID = album && album.id ? album.id : null;
    if (!albumID) return;

    const idx = list.value.findIndex((fav) => fav.id == albumID);
    if (idx >= 0) {
      list.value.splice(idx, 1);
    }
  };

  return { list, addFav, removeFav };
});
