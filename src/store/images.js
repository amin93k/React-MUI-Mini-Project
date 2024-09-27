const images = [
    "../public/feeds-image/camera_lense_0.jpeg",
    "../public/feeds-image/360_F_956804567_Qc1Znk496Zblwl8ydOpEVudQysZ5tOsC.jpg",
    "../public/feeds-image/01_PT_hero_42_153645159.jpg",
    "../public/feeds-image/MainAfter.webp",
    "../public/feeds-image/prompthero-prompt-2a1f7a9b113.webp",
]

const getRandomImage = () => {
    return images[Math.floor(Math.random() * 5)]
}

export default getRandomImage