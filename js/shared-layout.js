window.RAYAH_SHARED_LAYOUT = {
  navbar: `<header class="absolute top-2 md:top-6 w-full z-30">
    <div class="px-4 sm:px-6">
        <div class="max-w-3xl mx-auto">
            <div class="flex items-center justify-between h-14 border border-transparent [background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg px-3">

                <!-- Site branding -->
                <div class="shrink-0 mr-4">
                    <!-- Logo -->
                    <a class="flex items-center justify-center bg-white w-10 h-8 rounded-sm shadow-xs shadow-zinc-950/20" href="index.html">
                        <img src="./images/logo.png" width="1563" height="369" alt="Logo" data-i18n-attr="alt:common.logoAlt">
                    </a>
                </div>

                <!-- Desktop navigation -->
                <nav class="flex grow">

                    <!-- Desktop sign in links -->
                    <ul class="flex grow justify-end flex-wrap items-center">
                        <!-- <li>
                            <a class="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 lg:px-5 py-2 flex items-center transition" href="login.html" data-i18n="common.nav.login">Log in</a>
                        </li> -->
                        <li class="ml-1">
                            <a class="btn-sm text-zinc-100 bg-rayah-primary-600 hover:bg-rayah-primary-100 hover:text-white w-full shadow-sm" href="https://rayah-panel.borj.dev/login" data-i18n="common.nav.joinNow">Join Now</a>
                        </li>
                        <li class="ml-2">
                            <div class="flex items-center text-xs text-zinc-500">
                                <button type="button" class="px-1 py-1 hover:text-zinc-900 transition" data-lang-switch="en" aria-pressed="false">EN</button>
                                <span>/</span>
                                <button type="button" class="px-1 py-1 hover:text-zinc-900 transition" data-lang-switch="ar" aria-pressed="false">AR</button>
                            </div>
                        </li>
                    </ul>

                </nav>

            </div>
        </div>
    </div>
</header>`,
  footer: `<footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <!-- Top area: Blocks -->
        <div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-zinc-200">

            <!-- 1st block -->
            <div class="sm:col-span-6 md:col-span-3 lg:col-span-6 max-sm:order-1 flex flex-col">
                <div class="mb-4">
                    <!-- Logo -->
                    <a class="flex items-center justify-center bg-white w-8 h-8 rounded-sm shadow-xs shadow-zinc-950/20" href="index.html">
                        <img src="./images/logo.png" width="24" height="24" alt="Logo" data-i18n-attr="alt:common.logoAlt">
                    </a>
                </div>
                <div class="grow text-sm text-zinc-500" data-i18n="common.footer.copyrightHome">&copy; RAYAH. All rights reserved.</div>
                <!-- Social links -->
                <ul class="flex space-x-4 mt-4 mb-1">
                    <li>
                        <a class="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition" href="#0" aria-label="Twitter" data-i18n-attr="aria-label:common.social.twitter">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                <path d="m7.063 3 3.495 4.475L14.601 3h2.454l-5.359 5.931L18 17h-4.938l-3.866-4.893L4.771 17H2.316l5.735-6.342L2 3h5.063Zm-.74 1.347H4.866l8.875 11.232h1.36L6.323 4.347Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a class="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition" href="#0" aria-label="Medium" data-i18n-attr="aria-label:common.social.medium">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                <path d="M17 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V12.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241V7.993L9.6 14.124h-.329l-2.81-6.13V12.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472V7.351A.416.416 0 0 0 5.683 7l-1-1.209V5.61H7.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a class="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition" href="#0" aria-label="Telegram" data-i18n-attr="aria-label:common.social.telegram">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                <path d="M17.968 3.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045S3.087 8.106 2.286 8.664c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622S17.894 5.292 17.98 3.909c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- 2nd block -->
            <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h6 class="text-sm text-zinc-800 font-medium mb-2" data-i18n="common.footer.explore">Explore</h6>
                <ul class="text-sm space-y-2">
                    <li>
                        <a class="text-zinc-500 hover:text-zinc-900 transition" href="index.html" data-i18n="common.footer.home">Home</a>
                    </li>
                    <li>
                        <a class="text-zinc-500 hover:text-zinc-900 transition" href="#0" data-i18n="common.footer.contactUs">Contact Us</a>
                    </li>
                    <li>
                        <a class="text-zinc-500 hover:text-zinc-900 transition" href="#0" data-i18n="common.footer.aboutUs">About Us</a>
                    </li>
                </ul>
            </div>

            <!-- 3rd block -->
            <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h6 class="text-sm text-zinc-800 font-medium mb-2" data-i18n="common.footer.getStarted">Get Started</h6>
                <ul class="text-sm space-y-2">
                    <li>
                        <a class="text-zinc-500 hover:text-zinc-900 transition" href="request-demo.html" data-i18n="common.nav.requestDemo">Request Demo</a>
                    </li>
                    <li>
                        <a class="text-zinc-500 hover:text-zinc-900 transition" href="login.html" data-i18n="common.footer.signIn">Sign In</a>
                    </li>
                </ul>
            </div>

            <!-- 4th block -->
            <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h6 class="text-sm text-zinc-800 font-medium mb-2" data-i18n="common.footer.legal">Legal</h6>
                <ul class="text-sm space-y-2">
                    <li>
                        <a class="text-zinc-500 hover:text-zinc-900 transition" href="#0" data-i18n="common.footer.termsAndConditions">Terms & Conditions</a>
                    </li>
                    <li>
                        <a class="text-zinc-500 hover:text-zinc-900 transition" href="#0" data-i18n="common.footer.privacyPolicy">Privacy Policy</a>
                    </li>
                </ul>
            </div>

        </div>

    </div>
</footer>`,
};
