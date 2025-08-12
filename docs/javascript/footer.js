const footer = document.getElementById('footer')
footer.innerHTML = `
 <footer
        class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 p-5 mt-10 mx-auto max-w-7xl p-5">
        <div data-aos="fade-up" class="md:col-span-2 md:pr-16">
            <h2 class="md:text-4xl text-3xl text-zinc-800 font-semibold ">Almas Pyramids</h2>
            <p class="md:mt-5 mt-3 text-zinc-600">
               Our goal is to provide the best hotel services, ensuring exceptional comfort, unforgettable experiences, and unparalleled hospitality.
            </p>
            <div class="mt-7">
               <a href="https://www.booking.com/Share-AxXMZg2"
                            class="w-full md:w-auto tracking-wider py-2 px-7 bg-[#cba14f] text-center text-white rounded-sm border border-[#cba14f] hover:opacity-70 transition-all duration-500">
                            Book Now
                        </a>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" class="second">
            <h2 class="text-2xl text-zinc-800 font-semibold">Quick Link</h2>
            <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/gallery.html">Gallery</a></li>
                <li><a href="/tours.html">Tours</a></li>
            </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" class="second">
            <h2 class="text-2xl text-zinc-800 font-semibold"> Contact Info</h2>
            <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
                <li><a href="/contact.html">Contact Us</a></li>
                <li><a href="https://www.booking.com/Share-AxXMZg2">Book Now</a></li>
                <li><a href="/privacy.html">Privacy Policy</a></li>
            </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" class="second">
            <h2 class="text-2xl text-zinc-800 font-semibold">Social Media</h2>
            <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
                <li class="flex items-center gap-3"><i class="fa-brands fa-instagram text-xl"></i><a href="https://www.instagram.com/almaspyramidshotel?igsh=MTQ3NWZrdGZvOXVneg==" target="_blank">Instagram</a></li>
                <li class="flex items-center gap-3"><i class="fa-brands fa-tiktok text-xl"></i><a href="https://www.tiktok.com/@almas.pyramids.ho?_t=ZN-8ylIxZAKKE2&_r=1">Tiktok</a></li>
            </ul>
        </div>
    </footer>

    <p class="text-center p-4 text-zinc-600 mt-5">
        Copyright © <span id="copyright"></span> Almas Pyramids. All rights reserved.
    </p>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year