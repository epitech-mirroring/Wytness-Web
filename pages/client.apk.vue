<template>
  <div class="download-page">
    <h1>Téléchargement en cours...</h1>
    <p>Si le téléchargement ne démarre pas automatiquement, <a :href="apkUrl" download>Téléchargez ici</a>.</p>
  </div>
</template>

<script>
  export default {
  data() {
    return {
    apkUrl: "/wytness-mobile.apk",
    };
  },
  mounted() {
    const link = document.createElement("a");
    link.href = this.apkUrl;
    link.setAttribute("download", "wytness-mobile.apk");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  };
</script>

<style>
  .download-page {
    text-align: center;
    margin-top: 50px;
  }
</style>
