<script setup lang="ts">
  import LandingNavBar from "~/components/LandingNavBar.vue";
  import WindowCard from "~/components/WindowCard.vue";

  useHead({
    title: "Wytness",
  });
</script>


<template>
  <LandingNavBar />

  <div class="flex ms-0 sm:ms-[6vw] mt-20">
    <div class="mt-0 md:mt-16 mx-auto md:mx-0 md:mx-0 xl:mx-0">
      <p id="landing-title">
        <span id="automate-faster">Automate faster, </span>
        <span id="work-less">work less</span>
      </p>
      <p id="landing-subtitle">
        Wytness connects all your services
        so you can spend more time doing
        what you are good at. ⚡️
      </p>
    </div>

    <!-- Workflow Example -->
    <div class="h-0 hidden md:block ms-[-150px] min-[820px]:ms-[-100px] min-[870px]:ms-[-50px] min-[930px]:ms-[0px] min-[1010px]:ms-[50px] xl:ms-[-10px] min-[1350px]:ms-[-20px] 2xl:ms-[5vw]">
      <div id="workflow-button-1" class="workflow-button">
        <div class="inner-workflow-button">
          <span class="text-workflow-button">⌘</span>
        </div>
      </div>
      <div id="workflow-button-2" class="workflow-button">
        <div class="inner-workflow-button">
          <svg width="32" height="20" viewBox="0 0 32 20">
            <path d="M3.20312 9.15625C3.0625 9.76562 2.45312 10.1406 1.84375 10C1.23438 9.85938 0.859375 9.25 1 8.64062L2.125 8.875L1 8.64062V8.59375C1.04688 8.59375 1.04688 8.54688 1.04688 8.5C1.04688 8.45312 1.09375 8.35938 1.09375 8.26562C1.1875 8.03125 1.28125 7.70312 1.42188 7.32812C1.70312 6.57812 2.125 5.59375 2.73438 4.5625C3.90625 2.59375 6.01562 0.25 9.25 0.25C11.7812 0.25 13.4688 1.65625 14.5938 3.48438C15.7188 5.21875 16.375 7.51562 17.0312 9.625L17.0781 9.67188C17.7344 11.875 18.3438 13.8906 19.2344 15.3438C20.125 16.75 21.1562 17.5 22.75 17.5C24.7656 17.5 26.2188 16.0938 27.2969 14.3125C27.8125 13.4688 28.1875 12.5781 28.4219 11.9219C28.5625 11.5938 28.6094 11.3125 28.7031 11.125C28.7031 11.0312 28.75 10.9844 28.75 10.9375V10.8906C28.8906 10.2812 29.5 9.90625 30.1094 10.0469C30.7188 10.1875 31.0938 10.7969 30.9531 11.4062L29.875 11.125L30.9531 11.4062V11.4531C30.9531 11.4531 30.9062 11.5 30.9062 11.5469C30.9062 11.5938 30.8594 11.6875 30.8594 11.7812C30.7656 12.0156 30.6719 12.3438 30.5312 12.7188C30.25 13.4688 29.8281 14.4531 29.2188 15.4844C28.0469 17.4531 25.9375 19.75 22.75 19.75C20.1719 19.75 18.4844 18.3906 17.3594 16.5625C16.2344 14.7812 15.5781 12.5312 14.9219 10.4219V10.3281C14.2188 8.17188 13.6094 6.15625 12.7188 4.70312C11.8281 3.29688 10.7969 2.5 9.25 2.5C7.1875 2.5 5.73438 3.95312 4.65625 5.73438C4.14062 6.57812 3.76562 7.46875 3.53125 8.125C3.4375 8.45312 3.34375 8.6875 3.29688 8.875C3.25 8.96875 3.25 9.0625 3.20312 9.10938V9.15625Z" fill="black"/>
          </svg>
        </div>
      </div>
      <div id="start-arrow">
        <div id="inner-start-arrow"></div>
      </div>
      <svg id="end-arrow" xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
        <g filter="url(#filter0_d_79_4862)">
          <path d="M29 14.0359C31.6667 15.5755 31.6667 19.4245 29 20.9641L14.75 29.1913C12.0833 30.7309 8.75 28.8064 8.75 25.7272V9.27275C8.75 6.19355 12.0833 4.26906 14.75 5.80866L29 14.0359Z" fill="white"/>
        </g>
        <path d="M26 15.7679C27.3333 16.5377 27.3333 18.4623 26 19.2321L14.75 25.7272C13.4167 26.497 11.75 25.5348 11.75 23.9952V11.0048C11.75 9.46521 13.4167 8.50296 14.75 9.27276L26 15.7679Z" fill="#574AE2"/>
        <defs>
          <filter id="filter0_d_79_4862" x="4.75" y="3.26679" width="30.25" height="32.4664" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.359538 0 0 0 0 0.359538 0 0 0 0 0.359538 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_79_4862"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_79_4862" result="shape"/>
          </filter>
        </defs>
      </svg>
      <svg id="cursor" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M21.6088 24.9253L24.9253 21.6088C25.2916 21.2425 25.2916 20.6486 24.9253 20.2822L19.6967 15.0537C19.3014 14.6584 19.3375 14.0072 19.774 13.6579L24.1695 10.1415C24.7645 9.66553 24.5738 8.71638 23.8413 8.50707L3.99688 2.83724C3.28928 2.63507 2.63507 3.28928 2.83724 3.99688L8.50707 23.8413C8.71638 24.5738 9.66553 24.7645 10.1415 24.1695L13.6579 19.774C14.0072 19.3375 14.6584 19.3014 15.0537 19.6967L20.2822 24.9253C20.6486 25.2916 21.2425 25.2916 21.6088 24.9253Z" fill="#776DE3" stroke="#574AE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div id="full-line-bottom"></div>
      <div id="full-line-top"></div>
      <svg id="dashed-line" width="212" height="14" viewBox="0 0 212 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_66_56)">
          <path d="M205 6C206.657 6 208 4.65685 208 3C208 1.34315 206.657 0 205 0V6ZM7 0C5.34315 0 4 1.34315 4 3C4 4.65685 5.34315 6 7 6V0ZM12.7115 6C14.3684 6 15.7115 4.65685 15.7115 3C15.7115 1.34315 14.3684 0 12.7115 0V6ZM26.0385 0C24.3816 0 23.0385 1.34315 23.0385 3C23.0385 4.65685 24.3816 6 26.0385 6V0ZM37.4615 6C39.1184 6 40.4615 4.65685 40.4615 3C40.4615 1.34315 39.1184 0 37.4615 0V6ZM50.7885 0C49.1316 0 47.7885 1.34315 47.7885 3C47.7885 4.65685 49.1316 6 50.7885 6V0ZM62.2115 6C63.8684 6 65.2115 4.65685 65.2115 3C65.2115 1.34315 63.8684 0 62.2115 0V6ZM75.5385 0C73.8816 0 72.5385 1.34315 72.5385 3C72.5385 4.65685 73.8816 6 75.5385 6V0ZM86.9615 6C88.6184 6 89.9615 4.65685 89.9615 3C89.9615 1.34315 88.6184 0 86.9615 0V6ZM100.288 0C98.6316 0 97.2885 1.34315 97.2885 3C97.2885 4.65685 98.6316 6 100.288 6V0ZM111.712 6C113.368 6 114.712 4.65685 114.712 3C114.712 1.34315 113.368 0 111.712 0V6ZM125.038 0C123.382 0 122.038 1.34315 122.038 3C122.038 4.65685 123.382 6 125.038 6V0ZM136.462 6C138.118 6 139.462 4.65685 139.462 3C139.462 1.34315 138.118 0 136.462 0V6ZM149.788 0C148.132 0 146.788 1.34315 146.788 3C146.788 4.65685 148.132 6 149.788 6V0ZM161.212 6C162.868 6 164.212 4.65685 164.212 3C164.212 1.34315 162.868 0 161.212 0V6ZM174.538 0C172.882 0 171.538 1.34315 171.538 3C171.538 4.65685 172.882 6 174.538 6V0ZM185.962 6C187.618 6 188.962 4.65685 188.962 3C188.962 1.34315 187.618 0 185.962 0V6ZM199.288 0C197.632 0 196.288 1.34315 196.288 3C196.288 4.65685 197.632 6 199.288 6V0ZM7 6H12.7115V0H7V6ZM26.0385 6H37.4615V0H26.0385V6ZM50.7885 6H62.2115V0H50.7885V6ZM75.5385 6H86.9615V0H75.5385V6ZM100.288 6H111.712V0H100.288V6ZM125.038 6H136.462V0H125.038V6ZM149.788 6H161.212V0H149.788V6ZM174.538 6H185.962V0H174.538V6ZM199.288 6H205V0H199.288V6Z" fill="black"/>
        </g>
      </svg>
    </div>

    <!-- 14412 -->
    <div class="h-0 hidden xl:block xl:ms-[-400px] min-[1350px]:ms-[-350px] min-[1450px]:ms-[-300px] 2xl:ms-[-300px] min-[1600px]:ms-[-250px] min-[1650px]:ms-[-200px] min-[1700px]:ms-[-150px] min-[1780px]:ms-[-50px] min-[1880px]:ms-0">
      <WindowCard id="card1" variant="card1"/>
      <WindowCard id="card2" variant="card2"/>
      <svg id="blue-gradient-block" xmlns="http://www.w3.org/2000/svg" width="390" height="676" viewBox="0 0 390 676" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M390 31C390 13.8792 376.121 0 359 0H31C13.8792 0 0 13.8792 0 31V233C0 250.121 13.8792 264 31 264H115C132.121 264 146 277.879 146 295V645C146 662.121 159.879 676 177 676H359C376.121 676 390 662.121 390 645V31Z" fill="url(#paint0_radial_66_85)"/>
        <defs>
          <radialGradient id="paint0_radial_66_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(186.5 187.5) rotate(72.646) scale(460.984 265.952)">
            <stop stop-color="#776DE3"/>
            <stop offset="1" stop-color="#3221EE"/>
          </radialGradient>
        </defs>
      </svg>
      <div id="white-button"></div>
      <div id="white-button-2">
        <div id="white-button-2-inner"></div>
      </div>

      <!-- Eye -->
      <svg id="eye" width="282" height="242" viewBox="0 0 282 242" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_68_166)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M91.9657 155.508L47.0624 97.5769L111.739 68.2232C124.442 61.2303 139.707 58.8096 154.897 62.5552C154.994 62.5792 155.091 62.6035 155.188 62.6279C155.285 62.6512 155.381 62.6747 155.477 62.6985C169.873 66.2484 181.753 74.7336 189.762 85.9087L234.666 143.84L169.989 173.194C157.286 180.186 142.021 182.607 126.832 178.861C126.735 178.838 126.638 178.813 126.541 178.789C126.444 178.766 126.348 178.742 126.251 178.718C111.855 175.168 99.9747 166.683 91.9657 155.508Z" fill="white"/>
        </g>
        <g clip-path="url(#clip0_68_166)">
          <rect x="116.542" y="80.7929" width="66" height="66" rx="33" transform="rotate(13.8527 116.542 80.7929)" fill="black"/>
          <path d="M140.65 121.9L141.259 85.3587L164.901 94.5593L140.65 121.9Z" fill="#776DE3"/>
        </g>
        <defs>
          <filter id="filter0_d_68_166" x="0.662437" y="18.4013" width="280.403" height="212.614" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="23.2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_68_166"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_68_166" result="shape"/>
          </filter>
          <clipPath id="clip0_68_166">
          <rect x="116.542" y="80.7929" width="66" height="66" rx="33" transform="rotate(13.8527 116.542 80.7929)" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      <!-- Visual Area -->
      <svg id="visual-area" xmlns="http://www.w3.org/2000/svg" width="231" height="329" viewBox="0 0 231 329" fill="none">
        <g filter="url(#filter0_bd_68_170)">
          <path d="M15.848 309.435L19.2125 12.1642C19.2125 12.1642 83.95 19.9794 122.986 35.2314C162.021 50.4834 214.909 88.627 214.909 88.627L15.848 309.435Z" fill="white" fill-opacity="0.75"/>
        </g>
        <defs>
          <clipPath id="visual-area-clip">
            <path d="M15.848 309.435L19.2125 12.1642C19.2125 12.1642 83.95 19.9794 122.986 35.2314C162.021 50.4834 214.909 88.627 214.909 88.627L15.848 309.435Z" fill="white" fill-opacity="0.75"/>
          </clipPath>
          <filter id="filter0_bd_68_170" x="0.548022" y="0.864245" width="229.66" height="327.871" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_68_170"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="7.65"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_backgroundBlur_68_170" result="effect2_dropShadow_68_170"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_68_170" result="shape"/>
          </filter>
        </defs>
      </svg>

      <div id="panel">
        <i class="fa-regular fa-gauge-simple-high text-[20px]"></i>
        <i class="fa-regular fa-gear text-[20px]"></i>
        <i class="fa-regular fa-pen text-[20px]"></i>
        <div class="plus-button">
          <i class="fa-solid fa-plus text-white"></i>
        </div>
      </div>
    </div>

  </div>
  <div id="logos">
    <img class="logo" id="discord_logo" src="/assets/images/landing_page/discord_logo.png" alt="Logo Discord"/>
    <img class="logo" id="spotify_logo" src="/assets/images/landing_page/spotify_logo.png" alt="Logo Spotify"/>
    <img class="logo" id="slack_logo" src="/assets/images/landing_page/slack_logo.png" alt="Logo Slack"/>
  </div>
</template>

<style scoped>

  .logo {
    width: 121px;
  }

  .workflow-button {
    border-radius: 17px;
    display: flex;
    width: 80px;
    height: 80px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .inner-workflow-button {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 35px;
    background: #FFF;
    box-shadow: -4px 4px 0px 0px rgba(0, 0, 0, 0.37);
  }

  .text-workflow-button {
    color: #000;
    font-size: 30px;
    user-select: none;
  }

  .plus-button {
    display: flex;
    width: 30px;
    height: 30px;
    padding: 6px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 19px;
    background: radial-gradient(124.06% 124.06% at 18.75% 22.92%, #574AE2 0%, #776DE3 100%);
    box-shadow: 0px 4px 5.7px 0px rgba(127, 117, 232, 0.77);
  }

</style>

<style>
  #landing-title {
    width: 478px;
    height: 259px;

    font-family: 'Parkinsans';
    font-style: normal;
    font-weight: 600;
    font-size: 96px;
    line-height: 100%;
    letter-spacing: -0.03em;

    color: #000000;
  }

  #automate-faster::after {
    content: '';
    display: inline-block;
    width: 84px;
    height: 84px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 84 84'%3E%3Cpath d='M42 10.5C42 27.897 56.103 42 73.5 42C56.103 42 42 56.103 42 73.5C42 56.103 27.897 42 10.5 42C27.897 42 42 27.897 42 10.5Z' fill='%23F4D06F'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    top: 15px;
    left: -1px;
    user-select: none;
  }

  #work-less::after {
    content: '';
    display: inline-block;
    width: 435px;
    height: 13px;
    background: #F4D06F;
    position: relative;
    top: -95px;
    z-index: -1;
    user-select: none;
  }

  #landing-subtitle {
    width: 361px;

    font-family: 'Parkinsans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 125%;

    color: #5C5C5C;

    margin: 5rem 0 0 0;
  }

  #card1 {
    left: 240px;
    top: -38px;
  }

  #card2 {
    left: 650px;
    top: -100px;
    z-index: 10;
  }

  #blue-gradient-block {
    position: relative;
    left: 450px;
    top: -400px;
    user-select: none;
    z-index: -10;
  }

  #white-button {
    position: relative;
    width: 20px;
    height: 20px;
    left: 775px;
    top: -1060px;
    user-select: none;
    border-radius: 36px;
    background: #FFF;
    box-shadow: 0px 3px 4px 0px rgba(87, 74, 226, 0.50);
  }

  #white-button-2 {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 20px;
    height: 20px;
    left: 800px;
    top: -1080px;
    user-select: none;
    border-radius: 36px;
    background: #FFF;
    box-shadow: 0px 3px 4px 0px rgba(87, 74, 226, 0.50);
  }

  #white-button-2-inner {
    width: 16px;
    height: 16px;
    flex-shrink: 0;

    border-radius: 26px;
    background: #3221EE;
  }

  #eye {
    position: relative;
    width: 273px;
    height: 213;
    left: 430px;
    top: -780px;
    z-index: 15;
  }

  #visual-area {
    position: relative;
    left: 550px;
    top: -1210px;
    clip-path: url(#visual-area-clip);
    backdrop-filter: blur(4.2px);
  }

  #panel {
    position: relative;
    left: 619px;
    top: -1100px;
    user-select: none;

    display: flex;
    width: 198px;
    padding: 8px 10px;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
    gap: 19px;

    border-radius: 54px;
    background: #FFF;
  }

  #workflow-button-1 {
    position: relative;
    top: 500px;
    background: #F4D06F;
    box-shadow: 0px 4px 3px 0px #F8ECCE inset;
  }

  #start-arrow {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 20px;
    height: 20px;
    left: 80px;
    top: 369px;
    user-select: none;
    border-radius: 36px;
    background: #FFF;
    box-shadow: 0px 3px 4px 0px rgba(87, 74, 226, 0.50);
  }

  #inner-start-arrow {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    border-radius: 26px;
    background: #574AE2;
  }

  #full-line-bottom {
    position: relative;
    width: 72px;
    height: 100px;
    left: 90px;
    top: 200px;
    flex-shrink: 0;

    border-radius: 0px 0px 40px 0px;
    border-right: 6px solid #000;
    border-bottom: 6px solid #000;

    z-index: -1;
  }

  #full-line-top {
    position: relative;
    width: 72px;
    height: 100px;
    left: 156px;
    top: 0px;
    flex-shrink: 0;

    border-radius: 40px 0px 0px 0px;
    border-left: 6px solid #000;
    border-top: 6px solid #000;
  }

  #end-arrow {
    position: relative;
    width: 35px;
    height: 35px;
    left: 212px;
    top: 149px;

    z-index: 1;
    user-select: none;
  }

  #workflow-button-2 {
    position: relative;
    left: 240px;
    top: 225px;
    background: #F2545B;
    box-shadow: 0px 4px 3px 0px #F4B1B4 inset;
  }

  #dashed-line {
    position: relative;
    left: 140px;
    top: 94px;

    z-index: -1;
  }

  #cursor {
    position: relative;
    width: 28px;
    height: 28px;
    left: 342px;
    top: 323px;
    user-select: none;
  }

  #logos {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 400px;
    height: 10px;

    margin: 200px auto 0 70px;

    position: absolute;
    top: 72vh;
    user-select: none;
  }

  @media (max-width: 767px) {
    #logos {
      margin: 15vh auto 0 auto;
    }

    #subtitle {
      margin: 5rem auto 0 auto;
    }
  }

</style>