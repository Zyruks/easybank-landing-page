const burgerBtn = document.querySelector(".js-burger-menu");
const lines = document.querySelectorAll(".js-line");

const backDrop = document.querySelector(".js-backdrop");
const primaryNav = document.querySelector(".js-primary-nav");

burgerBtn.addEventListener("click", () => {
  burgerMenuAnimation();
});

/**
 * If the burger button doesn't have the class "open", add the classes "anima-rotate-45deg",
 * "anima-opacity-off", and "anima-rotate-negative-45deg" to the first, second, and third lines of the
 * burger button, respectively. If the burger button does have the class "open", remove the classes
 * "anima-rotate-45deg", "anima-opacity-off", and "anima-rotate-negative-45deg" from the first, second,
 * and third lines of the burger button, respectively
 */
function burgerMenuAnimation() {
  if (burgerBtn.classList.contains("open") !== true) {
    lines[0].classList.add("anima-rotate-45deg");
    lines[1].classList.add("anima-opacity-off");
    lines[2].classList.add("anima-rotate-negative-45deg");

    lines[0].classList.remove("anima-rotate-45deg-back");
    lines[1].classList.remove("anima-opacity-on");
    lines[2].classList.remove("anima-rotate-negative-45deg-back");

    /* nav menu animation */

    backDrop.classList.add("anima-opacity-on");
    backDrop.classList.add("backdrop-on");

    primaryNav.classList.add("anima-pop-up");
    primaryNav.classList.remove("anima-pop-out");
    primaryNav.classList.add("dp-block");

    burgerBtn.classList.add("open");
  } else {
    /* burgerMenu Animation */
    lines[0].classList.remove("anima-rotate-45deg");
    lines[1].classList.remove("anima-opacity-off");
    lines[2].classList.remove("anima-rotate-negative-45deg");

    lines[0].classList.add("anima-rotate-45deg-back");
    lines[1].classList.add("anima-opacity-on");
    lines[2].classList.add("anima-rotate-negative-45deg-back");

    /* nav menu Animation */
    backDrop.classList.remove("anima-opacity-on");
    backDrop.classList.add("anima-opacity-off");

    primaryNav.classList.remove("anima-pop-up");
    primaryNav.classList.add("anima-pop-out");

    /* Extra */
    burgerBtn.classList.remove("open");

    setTimeout(() => {
      backDrop.classList.remove("backdrop-on");
      backDrop.classList.remove("anima-opacity-off");

      primaryNav.classList.remove("dp-block");
    }, 350);
  }
}
