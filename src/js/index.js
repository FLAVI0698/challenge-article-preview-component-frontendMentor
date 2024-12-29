const btnShare = document.querySelector(".btn-share");

console.log(btnShare)

btnShare.addEventListener("click", () => {
    const showShare = document.querySelector(".infor-profile");
    btnShare.classList.toggle("active");
    showShare.classList.toggle("active");
})