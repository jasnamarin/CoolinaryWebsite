<template>
  <header :class="hasBoxShadow ? 'header__boxShadow' : ''" class="header">
    <router-link style="text-decoration: none;" to="/"
      ><h2 class="header__logo">
        <svg
          width="48px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 490 490"
        >
          <defs />
          <path
            d="M412.842 94.37H124.343c-20.271 0-36.76-16.484-36.76-36.754 0-20.271 16.489-36.765 36.76-36.765h288.499c13.536 0 13.993-20.851 0-20.851H124.343C92.577 0 66.732 25.85 66.732 57.616v336.997c0 52.596 42.786 95.387 95.382 95.387h250.728c5.757 0 10.426-4.662 10.426-10.426V104.795c0-5.762-4.669-10.425-10.426-10.425zm-157.845 20.851h76.45v124.455l-29.561-35.665c-3.125-3.573-10.347-6.441-15.969-.102l-30.92 36.348V115.221zm-92.882 353.928c-41.097 0-74.531-33.435-74.531-74.536V101.934c9.982 8.292 22.798 13.287 36.76 13.287h109.803V268.59c0 9.49 12.04 13.951 18.367 6.761l41.239-48.472 40.094 48.37c7.415 7.812 18.453 1.989 18.453-6.659V115.221h50.118v353.928H162.115z"
          />
        </svg>
        {{ dictionary.header }}
      </h2></router-link
    >
    <nav class="header__nav">
      <div class="header__navbar">
        <div class="header__item">
          <div class="breadcrumb">
            {{ breadcrumb }}
          </div>
          <a class="header__link">
            <button
              class="header--button"
              v-if="show"
              key="on"
              @click="show = false"
            >
              <svg viewBox="0 0 24 24" class="header--icon">
                <title>{{ dictionary.close }}</title>
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  fill="currentColor"
                  d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                />
              </svg>
            </button>
            <button
              class="header--button"
              v-else
              key="off"
              @click="show = true"
            >
              <svg viewBox="0 0 24 24" class="header--icon">
                <title>{{ dictionary.navigationMenu }}</title>
                <path
                  fill="currentColor"
                  d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                />
              </svg>
            </button>
          </a>
          <!-- Dropdown Menu -->
          <transition name="dropdown">
            <div
              class="dropdown__menu"
              v-bind:class="{ active: show }"
              v-if="show"
            >
              <ul class="dropdown__menu-nav">
                <router-link to="/" class="styled-link">
                  <li class="dropdown__menu-item" v-on:click="show = false">
                    <a class="dropdown__menu-link" title="Home">
                      <div class="dropdown__menu-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 491.47 491.47"
                        >
                          <defs />
                          <path
                            d="M0 268.68h73.023v222.055h345.393V268.68h73.054L245.712.735 0 268.68zm387.777-30.624v222.055H103.632V238.056H69.624L245.712 46.043 421.8 238.056h-34.023z"
                          />
                        </svg>
                      </div>
                      <div class="dropdown__menu-text">
                        {{ dictionary.home }}
                      </div>
                    </a>
                  </li>
                </router-link>
                <router-link to="/recipes" class="styled-link">
                  <li class="dropdown__menu-item" v-on:click="show = false">
                    <a class="dropdown__menu-link" title="Recipes">
                      <div class="dropdown__menu-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 64 64"
                        >
                          <defs />
                          <path
                            d="M55.531 13.515a6.8 6.8 0 00-4.778-1.98H16.077a1.828 1.828 0 01-1.821-1.839 1.923 1.923 0 011.929-1.929h33.118a1 1 0 100-2H16.185a3.906 3.906 0 00-2.78 1.152 3.914 3.914 0 00-1.15 2.794 3.826 3.826 0 003.822 3.822H18V37.19a1 1 0 001.707.707l5.586-5.586a.997.997 0 011.414 0l5.586 5.586A1 1 0 0034 37.19V13.535h16.753c1.253 0 2.48.508 3.364 1.394.9.9 1.395 2.095 1.395 3.365V57.32c0 1.25-.488 2.425-1.371 3.309S52.082 62 50.832 62H13.329a4.812 4.812 0 01-3.423-1.416 4.82 4.82 0 01-1.418-3.425V8.16A6.167 6.167 0 0114.648 2h38.98a1 1 0 100-2h-38.98c-4.5 0-8.16 3.66-8.16 8.16v49c0 1.825.711 3.543 2.003 4.837A6.799 6.799 0 0013.33 64h37.503a6.632 6.632 0 004.723-1.957 6.632 6.632 0 001.957-4.723V18.294a6.715 6.715 0 00-1.98-4.78zM32 34.775l-3.879-3.878A2.98 2.98 0 0026 30.018a2.98 2.98 0 00-2.121.879L20 34.775V13.604h12v21.171z"
                          />
                        </svg>
                      </div>
                      <div class="dropdown__menu-text">
                        {{ dictionary.recipes }}
                      </div>
                    </a>
                  </li> </router-link
                ><router-link
                  v-if="isLoggedIn"
                  to="/share-recipe"
                  class="styled-link"
                >
                  <li class="dropdown__menu-item" v-on:click="show = false">
                    <a class="dropdown__menu-link" title="Share recipe">
                      <div class="dropdown__menu-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <defs />
                          <path
                            d="M493.532 397.388h-28.469l-.003-240.574a7.5 7.5 0 00-15 0l.003 240.574H218.72c-10.183 0-18.467 8.284-18.467 18.467v28.671c0 13.174-10.718 23.892-23.892 23.892h-.102c-13.109 0-23.775-10.666-23.775-23.777l-.014-62.416c5.07.462 10.168.702 15.285.702h46.887c13.316 0 24.15-10.834 24.15-24.15V348.13a24 24 0 00-2.954-11.566c8.058-3.918 13.626-12.188 13.626-21.734v-10.646c0-4.557-1.269-8.823-3.471-12.463 7.146-4.199 11.953-11.968 11.953-20.837v-10.647c0-5.078-1.576-9.795-4.264-13.688 6.096-4.388 10.072-11.544 10.072-19.612V216.29c0-13.316-10.833-24.15-24.148-24.15l-79.872-.018c-4.006-.001-7.265-3.261-7.265-7.266v-20.367a7.5 7.5 0 00-7.5-7.5c-21.327 0-41.126 9.61-54.32 26.366-9.912 11.308-13.04 20.315-25.367 24.891-1.672-16.489-15.635-29.4-32.558-29.4C14.68 178.843 0 193.523 0 211.568v138.634c0 18.045 14.68 32.725 32.725 32.725 14.974 0 27.622-10.113 31.497-23.865 4.272.227 9.803-.853 17.421 2.181 21.625 7.905 30.842 14.351 55.827 18.931l.014 64.468c0 21.381 17.395 38.775 38.775 38.775H473.109c21.445 0 38.892-17.447 38.892-38.892v-28.671c-.001-10.182-8.285-18.466-18.469-18.466zM87.194 347.31c-10.631-4.236-18.821-3.051-21.744-3.247V331.48a7.5 7.5 0 00-15 0v18.723c0 9.773-7.952 17.725-17.726 17.725-9.773 0-17.725-7.952-17.725-17.725V211.568c0-9.773 7.952-17.725 17.725-17.725 9.774 0 17.726 7.952 17.726 17.725v84.831a7.5 7.5 0 0015 0v-72.541c21.633-5.302 28.493-22.21 36.983-31.226 8.765-11.132 21.253-18.235 35.036-20.134v12.355c0 12.274 9.986 22.263 22.261 22.266l79.874.018c5.045 0 9.15 4.105 9.15 9.15v10.647c0 5.045-4.104 9.15-9.15 9.15L164 236.076h-.001a7.5 7.5 0 00-.001 15l69.795.008h.001c5.045 0 9.15 4.104 9.15 9.15v10.647c0 5.045-4.105 9.15-9.15 9.15l-78.407-.006c-4.142 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5l69.926.006c5.045 0 9.15 4.105 9.15 9.15v10.646c0 5.045-4.105 9.15-9.15 9.15l-80.787-.018h-.002a7.5 7.5 0 00-.002 15l70.117.018h.002c5.045 0 9.15 4.105 9.15 9.15v10.647c0 5.045-4.105 9.15-9.15 9.15h-46.887c-41.272.004-65.304-15.684-80.56-20.614zM497 444.526c0 13.174-10.718 23.892-23.892 23.892H207.029a38.695 38.695 0 008.224-23.892v-28.671a3.471 3.471 0 013.467-3.467h274.812a3.471 3.471 0 013.468 3.467zM92.013 146.783h52.956a7.5 7.5 0 007.5-7.5V67.474c0-9.003-3.083-17.294-8.237-23.892h282.054c13.109 0 23.775 10.666 23.775 23.775v54.395c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V67.357c0-21.381-17.395-38.775-38.775-38.775H113.577c-21.445 0-38.892 17.447-38.892 38.892v61.981c0 9.555 7.773 17.328 17.328 17.328zm-2.328-79.309c0-13.174 10.718-23.892 23.892-23.892s23.892 10.718 23.892 23.892v64.309H92.013a2.33 2.33 0 01-2.328-2.328z"
                          />
                        </svg>
                      </div>
                      <div class="dropdown__menu-text">
                        {{ dictionary.shareRecipe }}
                      </div>
                    </a>
                  </li> </router-link
                ><router-link
                  v-if="isLoggedIn"
                  to="/profile"
                  class="styled-link"
                >
                  <li class="dropdown__menu-item" v-on:click="show = false">
                    <a class="dropdown__menu-link" title="Profile">
                      <div class="dropdown__menu-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <defs />
                          <path
                            d="M256 0c-84.83 0-153.6 85.965-153.6 192S171.17 384 256 384s153.6-85.965 153.6-192S340.83 0 256 0zm0 358.4c-70.579 0-128-74.65-128-166.4S185.421 25.6 256 25.6 384 100.25 384 192s-57.421 166.4-128 166.4z"
                          />
                          <path
                            d="M367.812 361.762c-6.869 6.682-14.182 12.689-21.82 18.099 24.388 11.332 45.781 20.753 64.051 28.732 67.797 29.585 76.356 35.439 76.356 52.207 0 11.597-11.418 25.6-25.6 25.6H51.2c-14.182 0-25.6-14.003-25.6-25.6 0-16.768 8.559-22.622 76.348-52.207 18.278-7.979 39.671-17.399 64.051-28.732-7.637-5.41-14.95-11.418-21.82-18.099C37.598 410.539 0 417.075 0 460.8 0 486.4 22.921 512 51.2 512h409.6c28.279 0 51.2-25.6 51.2-51.2 0-43.725-37.598-50.261-144.188-99.038z"
                          />
                        </svg>
                      </div>
                      <div class="dropdown__menu-text">
                        {{ dictionary.profile }}
                      </div>
                    </a>
                  </li> </router-link
                ><router-link to="/about" class="styled-link">
                  <li class="dropdown__menu-item" v-on:click="show = false">
                    <a class="dropdown__menu-link" title="About">
                      <div class="dropdown__menu-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <defs />
                          <path
                            d="M411.272 52.471C366.343 18.145 312.651.001 255.999.001c-68.38 0-132.667 26.629-181.019 74.98C26.629 123.334 0 187.621 0 256.001c0 68.463 26.686 132.807 75.143 181.178a8.307 8.307 0 005.885 2.434 8.33 8.33 0 005.885-14.223c-45.305-45.224-70.254-105.38-70.254-169.388 0-63.931 24.896-124.035 70.102-169.241 45.206-45.205 105.31-70.101 169.24-70.101 52.964 0 103.16 16.961 145.158 49.049a8.33 8.33 0 0011.676-1.561 8.333 8.333 0 00-1.563-11.677zM437.234 75.199a8.33 8.33 0 00-11.779-.012 8.327 8.327 0 00-.014 11.778C470.517 132.15 495.342 192.181 495.342 256c0 63.931-24.896 124.035-70.102 169.24-45.206 45.206-105.31 70.102-169.24 70.102-52.784 0-102.841-16.856-144.76-48.744a8.33 8.33 0 00-10.086 13.258C145.996 493.969 199.541 512 256 512c68.38 0 132.667-26.629 181.019-74.98C485.371 388.666 512 324.379 512 255.999c0-68.261-26.553-132.471-74.766-180.8z"
                          />
                          <path
                            d="M262.474 352.114c-16.457 0-30.361 13.904-30.361 30.361v8.094c0 16.741 13.62 30.361 30.361 30.361 17.309 0 30.361-13.052 30.361-30.361v-8.094c-.002-17.024-13.337-30.361-30.361-30.361zm13.701 38.454c0 7.939-5.763 13.703-13.703 13.703-7.556 0-13.703-6.147-13.703-13.703v-8.094c0-7.299 6.403-13.703 13.703-13.703 7.811 0 13.703 5.891 13.703 13.703v8.094zM365.673 192.283c0-56.657-46.296-102.75-103.2-102.75-36.409 0-70.353 19.506-88.577 50.893-8.459 14.501-3.842 32.702 10.508 41.437l.134.08c4.746 2.768 10.114 4.232 15.521 4.232 10.962-.001 20.848-5.729 26.468-15.364 7.301-12.679 21.074-20.556 35.947-20.556 24.073 0 42.928 18.461 42.928 42.029 0 23.176-19.258 42.029-42.928 42.029-16.174 0-30.361 14.187-30.361 30.361 0 .328.014.642.04.944-.028.302-.04.589-.04.855v46.761c0 16.741 13.619 30.361 30.361 30.361 17.309 0 30.361-13.052 30.361-30.361v-22.852h-.001c43.209-13.137 72.839-52.576 72.839-98.099zm-83.085 83.618a8.326 8.326 0 00-6.411 8.105v29.226c0 7.939-5.763 13.703-13.703 13.703-7.556 0-13.703-6.147-13.703-13.703v-44.853a8.914 8.914 0 00.45-2.807c0-.817-.12-1.622-.351-2.392.85-6.463 7.061-12.21 13.604-12.21 32.856 0 59.586-26.327 59.586-58.687 0-15.908-6.222-30.739-17.519-41.762-11.184-10.914-26.124-16.924-42.068-16.924-20.812 0-40.118 11.075-50.359 28.861-2.578 4.419-7.085 7.057-12.057 7.058-2.435 0-4.874-.665-7.059-1.923-6.577-4.048-8.604-12.105-4.705-18.788 15.262-26.285 43.686-42.614 74.18-42.614 47.719 0 86.542 38.621 86.542 86.092 0 39.981-27.316 74.366-66.427 83.618z"
                          />
                        </svg>
                      </div>
                      <div class="dropdown__menu-text">
                        {{ dictionary.about }}
                      </div>
                    </a>
                  </li></router-link
                >
                <li
                  v-if="isLoggedIn"
                  class="dropdown__menu-item"
                  v-on:click="logout"
                >
                  <a class="dropdown__menu-link" title="Logout">
                    <div class="dropdown__menu-svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <defs />
                        <path
                          d="M301.697 491.922H90.785c-11.025 0-21.029-9.649-21.029-20.669V39.39c0-11.02 10.005-19.311 21.029-19.311h210.912c5.544 0 10.039-4.49 10.039-10.039 0-5.55-4.496-10.04-10.039-10.04H90.785C68.692 0 49.677 17.292 49.677 39.39v431.863C49.677 493.35 68.692 512 90.785 512h210.912c5.544 0 10.039-4.49 10.039-10.039s-4.496-10.039-10.039-10.039z"
                        />
                        <path
                          d="M459.745 243.586l-90.353-100.392c-3.711-4.127-10.059-4.451-14.176-.745-4.123 3.706-4.456 10.4-.745 14.517l75.272 83.976H201.304a10.036 10.036 0 00-10.039 10.039 10.036 10.036 0 0010.039 10.039h226.745l-73.216 72.877c-3.922 3.922-3.922 10.103 0 14.025 1.961 1.961 4.529 2.858 7.098 2.858s5.137-1.022 7.098-2.983l90.353-90.375c3.775-3.775 3.937-9.866.363-13.836z"
                        />
                      </svg>
                    </div>
                    <div class="dropdown__menu-text">
                      {{ dictionary.logout }}
                    </div>
                  </a>
                </li>
                <router-link to="/login" class="styled-link"
                  ><li
                    v-if="!isLoggedIn"
                    class="dropdown__menu-item"
                    v-on:click="show = false"
                  >
                    <a class="dropdown__menu-link" title="About">
                      <div class="dropdown__menu-svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <defs />
                          <path
                            d="M327.287 246.852l-74.931-76.595c-4.941-5.06-13.039-5.146-18.099-.205-5.06 4.941-5.146 13.056-.205 18.099l53.854 55.057H12.8C5.734 243.2 0 248.934 0 256s5.734 12.8 12.8 12.8h275.098l-53.845 55.057c-4.941 5.043-4.855 13.158.205 18.099 5.06 4.941 13.158 4.855 18.099-.205l75.128-76.8c4.939-5.043 4.854-13.158-.198-18.099z"
                          />
                          <path
                            d="M499.2 0H166.4c-7.066 0-12.8 5.734-12.8 12.8V192h25.6V25.6h307.2v460.8H179.2V320h-25.6v179.2c0 7.066 5.734 12.8 12.8 12.8h332.8c7.066 0 12.8-5.734 12.8-12.8V12.8C512 5.734 506.266 0 499.2 0z"
                          />
                        </svg>
                      </div>
                      <div class="dropdown__menu-text">
                        {{ dictionary.login }}
                      </div>
                    </a>
                  </li></router-link
                >
              </ul>
              <hr />
              <div class="language">
                {{ dictionary.language }}:&nbsp;
                <div class="language__picker">
                  <div
                    v-bind:class="{
                      'language__picker--choice--selected': isSerbian,
                    }"
                    v-on:click="$emit('switchLanguage', 'serbian')"
                    class="language__picker--choice"
                  >
                    SR
                  </div>
                  &nbsp;|&nbsp;
                  <div
                    v-bind:class="{
                      'language__picker--choice--selected': isEnglish,
                    }"
                    v-on:click="$emit('switchLanguage', 'english')"
                    class="language__picker--choice"
                  >
                    EN
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import rsLang from "@/assets/language/header/sr.json";
import engLang from "@/assets/language/header/eng.json";
import breadcrumbEnglish from "@/assets/language/breadcrumb/eng.json";
import breadcrumbSerbian from "@/assets/language/breadcrumb/sr.json";

export default {
  name: "Header",
  el: ".header",
  data() {
    return {
      show: false,
      hasBoxShadow: true,
    };
  },
  props: ["language", "isLoggedIn", "refreshApp"],
  methods: {
    logout: function () {
      this.show = false;
      window.localStorage.removeItem("user");
      this.$props.refreshApp();
      this.$router.push({ path: "/login" });
    },
  },
  mounted() {
    if (this.$route?.name?.includes("RecipesList")) {
      this.hasBoxShadow = false;
      return;
    }

    this.hasBoxShadow = true;
  },
  watch: {
    $route: function (to) {
      if (to?.name?.includes("RecipesList")) {
        this.hasBoxShadow = false;
        return;
      }

      this.hasBoxShadow = true;
    },
  },
  computed: {
    dictionary: function () {
      return this.$props.language === "english" ? engLang : rsLang;
    },
    isSerbian: function () {
      return this.$props.language !== "english";
    },
    isEnglish: function () {
      return this.$props.language === "english";
    },
    breadcrumb: function () {
      const breadcrumbDict =
        this.$props.language === "english"
          ? breadcrumbEnglish
          : breadcrumbSerbian;

      return breadcrumbDict[this.$route.fullPath] ?? this.$route.fullPath;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  z-index: 3;
  padding: 1rem 3rem 1rem 3rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background: #fff;
  width: 100%;

  &__logo {
    display: flex;
    align-items: center;
    color: var(--color-primary);

    svg {
      fill: var(--color-primary);
      margin-right: 12px;
      margin-top: -12px;
    }
  }

  &__boxShadow {
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  }

  h2 {
    width: 420px;
    text-align: left;
  }
  &__item {
    position: relative;
    padding: 1rem 0 1rem 1rem;
    display: flex;
    align-items: center;
  }
  &--icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  &--button {
    margin: 0;
    padding: 0;
    position: relative;
    color: gray;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    &:focus {
      outline: 0;
    }
  }
}

// Dropdown Menu

.dropdown__menu {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  min-width: 300px;
  overflow-y: auto;
  padding: 2rem 0rem 2rem 0rem;
  border-radius: 12px;
  background-color: white;
  border: 1px solid var(--color-gray);
  background-clip: padding-box;
  &-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    fill: rgba(0, 0, 0, 0.6);
    padding: 0.8rem 0 0.8rem 2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    border-radius: 0 50px 50px 0;
    &:hover {
      color: var(--color-green);
      fill: var(--color-green);
      background-color: rgba(79, 192, 141, 0.1);
    }
  }
  &-svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &-text {
    font-weight: 300;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

// Animation Menu Icon

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}

// Dropdown Menu Animation

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.styled-link {
  text-decoration: none;
  color: #4f5959;
}

.breadcrumb {
  font-size: 16px;
  margin-right: 12px;
}

.language {
  display: flex;
  padding-left: 2rem;
}

.language__picker {
  display: flex;

  &--choice:hover {
    cursor: pointer;
  }

  &--choice--selected {
    text-decoration: underline;
  }
}

ul {
  list-style-type: none;
  padding-inline-start: 0;
}
</style>
