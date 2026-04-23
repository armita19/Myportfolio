const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")

if (menuBtn) {
    menuBtn.onclick = () => {
        navLinks.classList.toggle("show")
    }
}

const shots = document.querySelectorAll(".shot img")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")
const lightboxClose = document.getElementById("lightbox-close")
const lightboxBg = document.getElementById("lightbox-bg")

shots.forEach(img => {
    img.onclick = () => {
        lightbox.classList.add("show")
        document.body.classList.add("lock")
        document.documentElement.classList.add("lock")
        lightboxImg.src = img.src
    }
})

const closeLightbox = () => {
    lightbox.classList.remove("show")
    document.body.classList.remove("lock")
    document.documentElement.classList.remove("lock")
}

if (lightboxClose) lightboxClose.onclick = closeLightbox
if (lightboxBg) lightboxBg.onclick = closeLightbox

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLightbox()
})

const viewBtns = document.querySelectorAll(".view-btn")

viewBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault()
        const link = this.href

        const shoot = () => {
            confetti({
                particleCount: 40,
                spread: 360,
                startVelocity: 20,
                gravity: 0,
                scalar: 1.2
            })
        }

        shoot()
        setTimeout(shoot, 100)
        setTimeout(shoot, 200)

        setTimeout(() => {
            window.open(link, "_blank")
        }, 400)
    })
})