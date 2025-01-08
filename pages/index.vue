<script setup lang="ts">
import FeatureCard from "~/components/ui/FeatureCard.vue";
import { Button } from "@/components/ui/button";
import { useRouter } from "vue-router";
import WindowCard1 from "~/components/WindowCard.vue";

const router = useRouter();

const automateIcon = `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='size-10'>
                                <path stroke-linecap='round' stroke-linejoin='round' d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z' />
                                <path stroke-linecap='round' stroke-linejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                        </svg>`;

const connectIcon = `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='size-10'>
                                <path stroke-linecap='round' stroke-linejoin='round' d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244'/>
                        </svg>`;

const simplifyIcon = `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='size-10'>
                                <path stroke-linecap='round' stroke-linejoin='round' d='m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' />
                            </svg>`;

const services = [
  { name: "Apple Music", logo: "assets/images/service_icons/apple_music.png" },
  { name: "Open AI", logo: "assets/images/service_icons/open_ai.png" },
  { name: "Spotify", logo: "assets/images/service_icons/spotify.png" },
  { name: "Discord", logo: "assets/images/service_icons/discord.png" },
  { name: "Revolut", logo: "assets/images/service_icons/revolut.png" },
  { name: "GitHub", logo: "assets/images/service_icons/github.png" },
  { name: "Shazam", logo: "assets/images/service_icons/shazam.png" },
  { name: "Notion", logo: "assets/images/service_icons/notion.png" },
  { name: "Slack", logo: "assets/images/service_icons/slack.png" },
  { name: "Trello", logo: "assets/images/service_icons/trello.png" },
  { name: "Google Trad", logo: "assets/images/service_icons/google_trad.png" },
  { name: "Bluesky", logo: "assets/images/service_icons/bluesky.png" },
];
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
      <img id="workflow-button-1" src="/assets/images/landing_page/workflow-button-1.png" alt="Workflow Example" />
      <img id="workflow-button-2" src="/assets/images/landing_page/workflow-button-2.png" alt="Workflow Example" />
      <img id="start-arrow" src="/assets/images/landing_page/start-arrow.png" alt="Workflow Example" />
      <img id="end-arrow" src="/assets/images/landing_page/end-arrow.png" alt="Workflow Example" />
      <img id="cursor" src="/assets/images/landing_page/cursor.png" alt="Workflow Example" />
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
      <img id="blue-gradient-block" src="/assets/images/landing_page/blue-gradient-block.png" alt="Forme 'T' en bleu gradient"/>
      <img id="white-button" src="/assets/images/landing_page/white-button.png" alt="Boutton blanc de fenêtre d'ordinateur"/>
      <img id="white-button-2" src="/assets/images/landing_page/blue-button-white-border.png" alt="Boutton avec bordure blanche de fenêtre d'ordinateur"/>

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
      <svg id="visual-area" width="231" height="329" viewBox="0 0 231 329" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bd_68_170)">
        <path d="M15.848 309.435L19.2125 12.1642C19.2125 12.1642 83.95 19.9794 122.986 35.2314C162.021 50.4834 214.909 88.627 214.909 88.627L15.848 309.435Z" fill="white" fill-opacity="0.75" shape-rendering="crispEdges"/>
        </g>
        <defs>
          <clipPath id="visual-area-clip">
            <path d="M15.848 309.435L19.2125 12.1642C19.2125 12.1642 83.95 19.9794 122.986 35.2314C162.021 50.4834 214.909 88.627 214.909 88.627L15.848 309.435Z" fill="white" fill-opacity="0.75" shape-rendering="crispEdges"/>
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

      <img id="panel" src="/assets/images/landing_page/panel.png" alt="Panel"/>
    </div>

  </div>
  <div id="logos">
    <img id="discord_logo" src="/assets/images/landing_page/discord_logo.png" alt="Logo Discord"/>
    <img id="spotify_logo" src="/assets/images/landing_page/spotify_logo.png" alt="Logo Spotify"/>
    <img id="slack_logo" src="/assets/images/landing_page/slack_logo.png" alt="Logo Slack"/>
  </div>
</template>

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
    width: 390px;
    height: 676px;
    left: 450px;
    top: -400px;
    user-select: none;
    z-index: -10;
  }

  #white-button {
    position: relative;
    width: 20px;
    height: 20px;
    left: 770px;
    top: -1060px;
    user-select: none;
  }

  #white-button-2 {
    position: relative;
    width: 20px;
    height: 20px;
    left: 790px;
    top: -1080px;
    user-select: none;
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
  }

  #workflow-button-1 {
    position: relative;
    width: 80px;
    height: 80px;
    left: 0px;
    top: 500px;
    user-select: none;
  }

  #start-arrow {
    position: relative;
    width: 20px;
    height: 20px;
    left: 78px;
    top: 372px;
    user-select: none;
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
    width: 80px;
    height: 80px;
    left: 240px;
    top: 225px;
    user-select: none;
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
    padding-bottom: 50px;

    margin: 200px auto 0 70px;

    /* position: absolute;
    left: 100px;
    top: 850px; */
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