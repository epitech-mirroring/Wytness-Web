<template>
  <div class="flex justify-between h-screen w-full overflow-hidden">
    <div class="flex flex-col justify-center items-center h-screen w-1/3 max-[1070px]:w-full">
      <slot />
      <div class="absolute bottom-3 w-1/3 flex justify-between items-center gap-5 font-[Inter] text-xs">
        <p class="text-gray-400 ms-5">© 2024 Wytness. All rights reserved.</p>
        <div class="flex gap-3 items-center me-5">
          <a class="hover:underline">Pricacy Policy</a>
          <div class="w-1 h-1 rounded bg-slate-300"></div>
          <a class="hover:underline">Term & Condition</a>
        </div>
      </div>
    </div>

    <div class="max-[1070px]:hidden relative h-[150vh] w-[70vw] bg-[#fbfbfb] bg-[url('/assets/images/login/background_item.svg')] bg-repeat bg-[length:20px_20px] shadow-[0px_3px_18px_0px_rgba(0,0,0,0.25)] rotate-3 -top-[10vh] -right-[5vw]">
      <div class="rotate-[-3deg]">
        <div class="select-none relative top-[23vh] left-[2vw] min-[1150px]:left-[5vw] xl:left-[12vw] 2xl:left-[20vw]">
          <!-- Discord DM Receive -->
          <div class="h-8 pl-[5px] pr-2.5 bg-white rounded-[7px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] border border-[#5765f2] justify-start items-center gap-[5px] inline-flex overflow-hidden">
            <img class="w-8 h-8" src="/assets/images/login/discord.png" />
            <div class="text-black text-[13px] font-medium font-['Parkinsans']">Discord DM Receive</div>
          </div>
          <!-- Start Arrow -->
          <div class="relative left-[-95px] top-[10px] w-4 h-4 p-0.5 bg-white rounded-[36px] shadow-[0px_3px_4px_0px_rgba(87,74,226,0.50)] justify-center items-center inline-flex overflow-hidden">
            <div class="w-3 h-3 relative bg-[#574ae2] rounded-[26px]"></div>
          </div>
          <!-- Link between discord and Spotify -->
          <div class="z-[-1] relative left-[133px] top-[4px] w-[72px] h-10 origin-top-left rotate-90 rounded-br-[40px] border-r-4 border-b-4 border-black"></div>
          <!-- End Arrow -->
          <svg class="relative left-[123px] top-[20px] w-[26px] h-[26px] z-[1] select-none" xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
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
          <!-- Spotify Is Playing button -->
          <div class="relative left-[143px] top-[-8px] h-8 px-2.5 py-[5px] bg-white rounded-[7px] shadow-[0px_2px_4.199999809265137px_0px_rgba(28,215,96,0.25)] border border-[#1cd760] justify-start items-center gap-2.5 inline-flex overflow-hidden">
            <img class="w-[22px] h-[22px]" src="/assets/images/login/spotify.png" />
            <div class="text-black text-[13px] font-medium font-['Parkinsans']">Is playing?</div>
          </div>
          <!-- Start arrow -->
          <div class="relative left-[138px] top-[-13px] w-4 h-4 p-0.5 bg-white rounded-[36px] shadow-[3px_0px_4px_0px_rgba(87,74,226,0.50)] justify-center items-center inline-flex overflow-hidden">
            <div class="w-3 h-3 relative bg-[#574ae2] rounded-[26px]"></div>
          </div>
          <!-- Link between Spotify and If button -->
          <div class="z-[-1] relative left-[332px] top-[-23px] w-20 h-1 origin-top-left -rotate-180 border-b-4 border-black"></div>
          <!-- End arrow -->
          <svg class="relative left-[318px] top-[-42px] w-[26px] h-[26px] z-[1] select-none" xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
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
          <!-- If button -->
          <div class="relative left-[338px] top-[-70px] h-8 px-2.5 py-[5px] bg-white rounded-[7px] shadow-[0px_2px_4.199999809265137px_0px_rgba(247,143,9,0.25)] border border-[#f78f09] justify-start items-center gap-2.5 inline-flex overflow-hidden">
            <div class="w-[22px] h-[22px] bg-[#f78f09] rounded-[3px] justify-center items-center gap-2.5 flex overflow-hidden">
              <div class="w-4 h-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.04436 13.78C6.59664 13.78 7.04436 13.3323 7.04436 12.78C7.04436 12.2277 6.59664 11.78 6.04436 11.78V13.78ZM2.84475 10.6468L1.84475 10.6468L2.84475 10.6468ZM3.84436 1.59996C3.84434 1.04768 3.3966 0.599982 2.84432 0.600006C2.29203 0.60003 1.84434 1.04776 1.84436 1.60005L3.84436 1.59996ZM6.04436 5.87792C6.59664 5.87792 7.04436 5.4302 7.04436 4.87792C7.04436 4.32563 6.59664 3.87792 6.04436 3.87792V5.87792ZM12.4444 6.57778L12.4444 5.57778L12.4444 6.57778ZM9.24436 6.57777L9.24435 7.57777H9.24435L9.24436 6.57777ZM13.1556 1.60001L14.1556 1.60003C14.1556 1.33481 14.0502 1.08045 13.8627 0.892907C13.6752 0.705366 13.4208 0.600006 13.1556 0.600006V1.60001ZM13.1555 5.86669L14.1555 5.86671V5.86671L13.1555 5.86669ZM8.53325 5.86665L7.53325 5.86665V5.86665L8.53325 5.86665ZM8.53327 3.02223L7.8689 2.27482C7.65542 2.46459 7.53327 2.73659 7.53327 3.02222L8.53327 3.02223ZM10.1333 1.60001V0.600006C9.88833 0.600006 9.65193 0.689886 9.46888 0.852601L10.1333 1.60001ZM12.4444 14.4L12.4444 13.4L12.4444 14.4ZM9.24436 14.4L9.24435 15.4L9.24436 14.4ZM13.1556 9.42223L14.1556 9.42225C14.1556 9.15703 14.0502 8.90267 13.8627 8.71513C13.6752 8.52759 13.4208 8.42223 13.1556 8.42223V9.42223ZM13.1555 13.6889L14.1555 13.6889V13.6889L13.1555 13.6889ZM8.53325 13.6889L7.53325 13.6889V13.6889L8.53325 13.6889ZM8.53327 10.8444L7.8689 10.097C7.65542 10.2868 7.53327 10.5588 7.53327 10.8444L8.53327 10.8444ZM10.1333 9.42223V8.42223C9.88833 8.42223 9.65193 8.51211 9.46888 8.67482L10.1333 9.42223ZM6.04436 11.78H4.97808V13.78H6.04436V11.78ZM3.84475 10.6467L3.8445 4.87788L1.8445 4.87796L1.84475 10.6468L3.84475 10.6467ZM3.8445 4.87788L3.84436 1.59996L1.84436 1.60005L1.8445 4.87796L3.8445 4.87788ZM6.04436 3.87792H2.8445V5.87792H6.04436V3.87792ZM4.97808 11.78C4.35218 11.78 3.84478 11.2727 3.84475 10.6467L1.84475 10.6468C1.84482 12.3773 3.24764 13.78 4.97808 13.78V11.78ZM12.4444 5.57778L9.24436 5.57777L9.24435 7.57777L12.4444 7.57778L12.4444 5.57778ZM12.1556 1.59998L12.1555 5.86667L14.1555 5.86671L14.1556 1.60003L12.1556 1.59998ZM12.4444 7.57778C13.3894 7.57779 14.1555 6.81172 14.1555 5.86671L12.1555 5.86666C12.1555 5.70712 12.2848 5.57778 12.4444 5.57778L12.4444 7.57778ZM7.53325 5.86665C7.53324 6.81167 8.29933 7.57777 9.24435 7.57777L9.24436 5.57777C9.40391 5.57777 9.53325 5.70711 9.53325 5.86666L7.53325 5.86665ZM9.53325 5.86666L9.53327 3.02224L7.53327 3.02222L7.53325 5.86665L9.53325 5.86666ZM10.1333 2.60001H13.1556V0.600006H10.1333V2.60001ZM9.46888 0.852601L7.8689 2.27482L9.19764 3.76963L10.7976 2.34741L9.46888 0.852601ZM12.4444 13.4L9.24436 13.4L9.24435 15.4L12.4444 15.4L12.4444 13.4ZM12.1556 9.4222L12.1555 13.6889L14.1555 13.6889L14.1556 9.42225L12.1556 9.4222ZM12.4444 15.4C13.3894 15.4 14.1555 14.6339 14.1555 13.6889L12.1555 13.6889C12.1555 13.5293 12.2848 13.4 12.4444 13.4L12.4444 15.4ZM7.53325 13.6889C7.53324 14.6339 8.29933 15.4 9.24435 15.4L9.24436 13.4C9.40391 13.4 9.53325 13.5293 9.53325 13.6889L7.53325 13.6889ZM9.53325 13.6889L9.53327 10.8445L7.53327 10.8444L7.53325 13.6889L9.53325 13.6889ZM10.1333 10.4222H13.1556V8.42223H10.1333V10.4222ZM9.46888 8.67482L7.8689 10.097L9.19764 11.5919L10.7976 10.1696L9.46888 8.67482Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div class="text-black text-[13px] font-medium font-['Parkinsans']">If</div>
          </div>
          <!-- Start arrow -->
          <div class="relative left-[336px] top-[-72px] w-4 h-4 p-0.5 bg-white rounded-[36px] shadow-[3px_0px_4px_0px_rgba(87,74,226,0.50)] justify-center items-center inline-flex overflow-hidden">
            <div class="w-3 h-3 relative bg-[#574ae2] rounded-[26px]"></div>
          </div>
          <!-- Link between If button and Spotify Stop music button -->
          <div class="z-[-1] relative left-[480px] top-[-84px] w-20 h-1 origin-top-left -rotate-180 border-b-4 border-black"></div>
          <!-- End arrow -->
          <svg class="relative left-[452px] top-[-103px] w-[26px] h-[26px] z-[1] select-none" xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
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
          <!-- Spotify Stop music button -->
          <div class="relative left-[472px] top-[-132px] h-8 px-2.5 py-[5px] bg-white rounded-[7px] shadow-[0px_2px_4.199999809265137px_0px_rgba(28,215,96,0.25)] border border-[#1cd760] justify-start items-center gap-2.5 inline-flex overflow-hidden">
            <img class="w-[22px] h-[22px]" src="/assets/images/login/spotify.png" />
            <div class="text-black text-[13px] font-medium font-['Parkinsans']">Stop music</div>
          </div>
          <!-- Inactive button -->
          <div class="relative left-[405px] top-[-117px] w-4 h-4 p-0.5 bg-white rounded-[36px] shadow-[0px_3px_4px_0px_rgba(149,147,174,0.50)] justify-center items-center inline-flex overflow-hidden">
            <div class="w-3 h-3 relative bg-[#9592ad] rounded-[26px]"></div>
          </div>
          <!-- Start arrow -->
          <div class="relative left-[220px] top-[-117px] w-4 h-4 p-0.5 bg-white rounded-[36px] shadow-[3px_0px_4px_0px_rgba(87,74,226,0.50)] justify-center items-center inline-flex overflow-hidden">
            <div class="w-3 h-3 relative bg-[#574ae2] rounded-[26px]"></div>
          </div>
          <!-- Else button -->
          <div class="relative left-[328px] top-[-122px]">
            <div class="h-[19px] px-2.5 py-[5px] bg-[#6962ff]/90 rounded-sm backdrop-blur-sm justify-center items-center gap-2.5 inline-flex">
              <span class="text-white text-[13px] font-medium font-['Parkinsans']">Else</span>
            </div>
            <svg class="relative overflow-hidden top-[-26px] left-[32px] z-[-1]" xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
              <g clip-path="url(#bgblur_0_86_4956_clip_path)" data-figma-skip-parse="true"><foreignObject x="-3.26318" y="-4" width="17.5264" height="14"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(2px);height:100%;width:100%"></div></foreignObject></g><path data-figma-bg-blur-radius="4" d="M5.5 0L10.2631 6H0.73686L5.5 0Z" fill="#6962FF" fill-opacity="0.9"/>
              <defs>
                <clipPath id="bgblur_0_86_4956_clip_path"><path d="M5.5 0L10.2631 6H0.73686L5.5 0Z"/>
              </clipPath></defs>
            </svg>
          </div>
          <!-- Cursor -->
          <svg class="relative left-[372px] top-[-160px] w-[22px] h-[22px] relative" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M16.9783 19.5841L19.5841 16.9783C19.8719 16.6905 19.8719 16.2239 19.5841 15.936L15.4759 11.8279C15.1653 11.5173 15.1937 11.0056 15.5367 10.7312L18.9903 7.96831C19.4578 7.59434 19.308 6.84858 18.7324 6.68412L3.14036 2.22926C2.58438 2.07041 2.07036 2.58443 2.22921 3.1404L6.68407 18.7324C6.84853 19.308 7.5943 19.4578 7.96826 18.9904L10.7312 15.5367C11.0056 15.1937 11.5172 15.1654 11.8278 15.476L15.936 19.5841C16.2238 19.872 16.6905 19.872 16.9783 19.5841Z" fill="#776DE3" stroke="#4135BD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <!-- Link between if button and Send web request button -->
          <div class="z-[-1] relative left-[374px] top-[-182px] w-20 h-1 origin-top-left rotate-90 border-b-4 border-black"></div>
          <!-- End arrow -->
          <svg class="relative left-[359px] top-[-113px] w-[26px] h-[26px] z-10 rotate-90 select-none" xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
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
          <!-- Send web request button -->
          <div class="relative left-[282px] top-[-118px] h-8 px-2.5 py-[5px] bg-white rounded-[7px] shadow-[0px_2px_4.199999809265137px_0px_rgba(21,171,219,0.25)] border border-[#15abdb] justify-start items-center gap-2.5 inline-flex overflow-hidden">
            <div class="w-[22px] h-[22px] bg-[#15abdb] rounded-[3px] justify-center items-center gap-2.5 flex overflow-hidden">
                <div class="w-4 h-4 relative overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_80_4893)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.77013 0.314904C2.6571 1.21661 0.325884 3.95855 0.0314941 7.28571H3.68887C3.9041 4.83001 4.61616 2.45625 5.77013 0.314904ZM3.68887 8.71429H0.0314941C0.325884 12.0415 2.6571 14.7834 5.77013 15.6851C4.61615 13.5438 3.9041 11.17 3.68887 8.71429ZM7.60255 15.9903C6.22424 13.812 5.3711 11.3164 5.1234 8.71429H10.8767C10.629 11.3164 9.77581 13.812 8.39749 15.9903C8.26582 15.9967 8.1333 16 8.00005 16C7.86676 16 7.73424 15.9967 7.60255 15.9903ZM10.2299 15.6851C13.343 14.7834 15.6742 12.0415 15.9686 8.71429H12.3111C12.0959 11.17 11.3839 13.5438 10.2299 15.6851ZM12.3111 7.28571H15.9686C15.6742 3.95854 13.343 1.21658 10.2299 0.314895C11.3839 2.45624 12.0959 4.83 12.3111 7.28571ZM7.60256 0.00970232C7.73424 0.00325922 7.86677 0 8.00005 0C8.1333 0 8.26582 0.00325863 8.39749 0.00970057C9.77581 2.18795 10.629 4.68362 10.8767 7.28571H5.1234C5.3711 4.68362 6.22424 2.18795 7.60256 0.00970232Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_80_4893">
                        <rect width="16" height="16" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
            </div>
            <div class="text-black text-[13px] font-medium font-['Parkinsans']">Send web request</div>
          </div>
          <!-- Start arrow -->
          <div class="relative left-[192px] top-[-100px] w-4 h-4 p-0.5 bg-white rounded-[36px] shadow-[0px_3px_4px_0px_rgba(87,74,226,0.50)] justify-center items-center inline-flex overflow-hidden">
            <div class="w-3 h-3 relative bg-[#574ae2] rounded-[26px]"></div>
          </div>
          <!-- Link between Send web request button and Play music spotify button -->
          <div class="z-[-1] relative left-[470px] top-[-112px] w-[72px] h-[100px] origin-top-left rotate-90 rounded-br-[40px] border-r-4 border-b-4 border-black"></div>
          <!-- End arrow -->
          <svg class="relative left-[450px] top-[-155px] w-[26px] h-[26px] select-none" xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
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
          <!-- Spotify Play music button -->
          <div class="z-[-1] relative left-[470px] top-[-184px] h-8 px-2.5 py-[5px] bg-white rounded-[7px] shadow-[0px_2px_4.199999809265137px_0px_rgba(28,215,96,0.25)] border border-[#1cd760] justify-start items-center gap-2.5 inline-flex overflow-hidden">
            <img class="w-[22px] h-[22px]" src="/assets/images/login/spotify.png" />
            <div class="text-black text-[13px] font-medium font-['Parkinsans']">Play music</div>
          </div>
          <!-- Inactive button -->
          <div class="relative left-[400px] top-[-170px] w-4 h-4 p-0.5 bg-white rounded-[36px] shadow-[0px_3px_4px_0px_rgba(149,147,174,0.50)] justify-center items-center inline-flex overflow-hidden">
            <div class="w-3 h-3 relative bg-[#9592ad] rounded-[26px]"></div>
          </div>
        </div>
        <div class="absolute top-[77vh] left-[5vw] w-[534px]">
          <p class="leading-8 text-black text-5xl font-bold font-['Roboto_Mono']">Create <span class="after:relative after:inline-block after:content-[''] after:inline-block after:w-[232px] after:h-[13px] after:bg-[#F4D06F] after:relative after:top-[-47px] after:left-[200px] after:-z-10 after:select-none">powerful</span> automations 🚀</p>
        </div>
        <div class="absolute left-[40vw] min-[1150px]:left-[42vw] xl:left-[44vw] 2xl:left-[47vw] top-[98vh] select-none flex w-[198px] px-[10px] py-[8px] justify-between items-center flex-[1_0_0] gap-[19px] rounded-[54px] bg-white">
          <i class="fa-regular fa-gauge-simple-high text-[20px]"></i>
          <i class="fa-regular fa-gear text-[20px]"></i>
          <i class="fa-regular fa-pen text-[20px]"></i>
          <div class="flex w-[30px] h-[30px] p-[6px] justify-center items-center flex-shrink-0 rounded-[19px] bg-[radial-gradient(circle_at_18.75%_22.92%,_#574AE2_0%,_#776DE3_100%)] shadow-[0px_4px_5.7px_rgba(127,117,232,0.77)]">
            <i class="fa-solid fa-plus text-white"></i>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
