<script setup lang="ts">
import NavBarButton from './ui/button/NavBarButton.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

var currentRoute = '';
const navbarButtons1 = ref([
  { buttonName: 'Dashboard', iconName: 'fa fa-home', selected: false, path: 'dashboard' },
  { buttonName: 'Workflows', iconName: 'far fa-arrow-progress', selected: false, path: 'workflows' },
  { buttonName: 'Connections', iconName: 'far fa-link', selected: false, path: 'connections' },
  { buttonName: 'Webhooks', iconName: 'far fa-globe', selected: false, path: 'webhooks' },
  { buttonName: 'Marketplace', iconName: 'far fa-cart-shopping', selected: false, path: 'marketplace' }
]);
const navbarButtons2 = ref([
  { buttonName: 'Settings', iconName: 'far fa-gear', selected: false, path: 'settings' },
  { buttonName: 'Help & Support', iconName: 'far fa-question', selected: false, path: 'help' }
]);

const router = useRouter();

onMounted(() => {
  const route = useRoute();
  currentRoute = route.name?.toString() || '';

  navbarButtons1.value.forEach((button) => {
    if (button.path === currentRoute) {
      button.selected = true;
    }
  });
  navbarButtons2.value.forEach((button) => {
    if (button.path === currentRoute) {
      button.selected = true;
    }
  });
});

const navigateTo = async (path: string) => {
  for (let button of navbarButtons1.value) {
    button.selected = false;
  }
  for (let button of navbarButtons2.value) {
    button.selected = false;
  }
  for (let button of navbarButtons1.value) {
    if (button.path === path) {
      button.selected = true;
    }
  }
  await router.push({ name: path });
};

</script>

<template>
  <div class="flex flex-col min-w-64 pb-4 pt-2 pl-2 h-screen min-h-120 border-r-navbar-border border-r">
    <div class="project-logo flex pr-2.5 pl-3 gap-2 self-stretch items-center cursor-pointer" @click="navigateTo('dashboard')">
      <div class="navbar-title-logo flex flex-col py-1.5 items-center self-stretch justify-center">
        <svg width="47" height="37" viewBox="0 0 47 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#574AE2"
            d="M13.8433 32.3701C13.2706 32.2761 12.6831 32.0782 12.145 31.8012C10.5948 30.9999 9.53332 29.5852 9.18773 27.8539C9.0889927.3642 9.08406 27.196 9.08406 23.1399V18.9304L8.45706 18.2576C8.11147 17.8866 7.60296 17.3524 7.33143 17.0655C6.20086 15.8784 5.40601 15.0226 5.3912 14.983C5.38133 14.9583 8.27439 14.9385 12.066 14.9385H18.7605L18.7507 17.1002L18.7358 19.2667L16.0304 19.2816L13.3299 19.2915L13.3397 23.2141C13.3545 26.919 13.3595 27.1416 13.4483 27.3147C13.6754 27.7747 14.2037 28.0963 14.727 28.0963C15.1269 28.0963 15.4182 27.9231 15.8773 27.4186C16.0896 27.1812 16.3365 26.919 16.4155 26.8349C16.4994 26.7508 16.7512 26.4738 16.9832 26.2166C17.2153 25.9594 17.4374 25.712 17.4769 25.6725C17.5164 25.6329 17.6596 25.4746 17.7929 25.3262C17.9262 25.1778 18.1483 24.9305 18.2866 24.7821C18.4248 24.6337 18.7951 24.233 19.1061 23.8917C19.4171 23.5504 19.6837 23.2635 19.6986 23.2487C19.7134 23.2338 19.9355 22.9915 20.1923 22.7046C20.449 22.4177 20.6711 22.1753 20.6859 22.1604C20.7008 22.1456 20.9427 21.8785 21.229 21.5669C21.5154 21.2552 21.8807 20.8546 22.0486 20.6765C22.2164 20.4984 22.6015 20.078 22.9076 19.7366C23.6432 18.9254 24.3344 18.1637 24.7343 17.7333C24.912 17.5453 25.1786 17.2535 25.3267 17.0903C25.4699 16.927 25.7167 16.6599 25.8648 16.4967C26.0179 16.3334 26.3733 15.9427 26.6597 15.631C26.946 15.3194 27.2274 15.0127 27.2966 14.9484L27.4101 14.8346L30.2439 14.8445C31.804 14.8495 33.0926 14.8742 33.1074 14.894C33.1173 14.9138 33.0778 14.983 33.0185 15.0473C32.9543 15.1116 32.5298 15.5717 32.0706 16.0762C31.6115 16.5808 31.019 17.2238 30.7574 17.5107C30.4957 17.7976 30.007 18.3318 29.6712 18.6979C29.3355 19.0639 28.8468 19.5981 28.5851 19.885C28.3234 20.1719 27.7359 20.815 27.2768 21.3195C26.8177 21.8241 26.319 22.3682 26.166 22.5314C25.6624 23.0756 25.302 23.4713 25.0552 23.7433C24.9169 23.8967 24.5664 24.2825 24.2653 24.604C23.969 24.9256 23.6926 25.2372 23.6531 25.2965C23.5938 25.4004 23.6333 25.4697 24.3146 26.3947C25.1588 27.5423 25.3563 27.755 25.7217 27.938C25.9586 28.0567 26.0524 28.0715 26.4622 28.0715C26.8917 28.0715 26.9559 28.0567 27.2274 27.9182C27.5483 27.75 27.7705 27.5274 28.7332 26.4145C28.9109 26.2116 29.3997 25.6527 29.8194 25.1778C30.239 24.703 30.7278 24.144 30.9055 23.9412C31.0832 23.7384 31.2363 23.5603 31.2511 23.5455C31.2659 23.5306 31.4634 23.308 31.6954 23.0508C31.9274 22.7936 32.1249 22.571 32.1397 22.5562C32.1545 22.5413 32.3076 22.3633 32.4853 22.1604C32.663 21.9576 32.8753 21.7103 32.9593 21.6163C33.0432 21.5223 33.4875 21.0227 33.9417 20.5034C34.3959 19.9889 34.9094 19.4102 35.0772 19.2173C35.2451 19.0293 35.4673 18.7721 35.5759 18.6484C35.6795 18.5247 35.7783 18.4159 35.7931 18.4011C35.8079 18.3862 36.1535 18.0004 36.5583 17.5354C37.2298 16.7638 38.0049 15.8883 38.0641 15.8289C38.0789 15.8141 38.232 15.636 38.4097 15.4332C38.5874 15.2304 38.8046 14.9781 38.8984 14.8792C39.4662 14.251 39.7081 13.5288 39.5946 12.7967C39.4465 11.8272 38.8343 11.0753 37.9654 10.7884C37.6543 10.6845 37.6198 10.6845 29.301 10.6845H20.9476L20.1873 9.87822C19.7726 9.43798 19.274 8.90871 19.0814 8.7059C18.8938 8.50309 18.5581 8.14694 18.3409 7.91445C17.6596 7.19226 17.2004 6.7075 17.0375 6.52943L16.8746 6.3563L27.2126 6.34146C34.8008 6.33157 37.6642 6.34146 37.99 6.38103C38.8441 6.4948 39.4761 6.68277 40.2314 7.0587C41.9149 7.89467 43.2825 9.67542 43.6923 11.5749C43.7268 11.7233 43.7762 11.9459 43.8058 12.0695C43.8354 12.1932 43.8601 12.673 43.8601 13.133C43.8601 13.8206 43.8404 14.0679 43.7466 14.4884C43.48 15.7151 42.9715 16.7242 42.1174 17.7086C41.8162 18.0598 40.3795 19.6921 40.0932 20.0087C39.9945 20.1175 39.5946 20.5726 39.1996 21.0227C38.8096 21.4729 38.4739 21.8488 38.4591 21.8637C38.4442 21.8785 37.9555 22.4325 37.3729 23.0953C35.8178 24.8662 35.5462 25.1778 34.7761 26.0484C34.391 26.4788 33.7936 27.1564 33.448 27.5522C33.1024 27.9479 32.747 28.3485 32.663 28.4425C32.5791 28.5365 32.115 29.0658 31.6362 29.6099C30.4463 30.9702 30.0267 31.3313 29.1479 31.7814C28.358 32.187 27.2817 32.4492 26.4227 32.4492C25.2329 32.4492 23.8802 31.9793 22.8632 31.2126C22.251 30.7476 21.9597 30.4162 20.8834 28.9471C20.6415 28.6206 20.6119 28.5909 20.5526 28.6701C20.5181 28.7146 20.3502 28.9026 20.1824 29.0806C20.0096 29.2587 19.6393 29.6643 19.353 29.976C19.0716 30.2876 18.7013 30.6784 18.5384 30.8416C17.3189 32.0733 15.5268 32.657 13.8433 32.3701Z"
          />
        </svg>
      </div>
      <span class="navbar-title tracking-tight text-3.5xl font-semibold	leading-normal text-center">Wytness</span>
    </div>

    <div class="flex flex-col items-center self-stretch px-2.5 py-12 gap-2.5 text-navbar-inactive grow text-center tracking-tighter leading-4">
      <NavBarButton
        v-for="button in navbarButtons1"
        :key="button.buttonName"
        :buttonName="button.buttonName"
        :iconName="button.iconName"
        :selected="button.selected"
        @click="navigateTo(button.path)"
      />
    </div>

    <div class="flex flex-col items-center px-2.5 gap-2.5 text-navbar-inactive text-center tracking-tighter leading-4">
      <NavBarButton
        v-for="button in navbarButtons2"
        :key="button.buttonName"
        :buttonName="button.buttonName"
        :iconName="button.iconName"
        :selected="button.selected"
      />
    </div>

  </div>
</template>

<style>

</style>
