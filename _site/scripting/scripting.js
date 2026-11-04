//delay utility function
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

//automated slicknav
$(function () {
  $("#menu").slicknav({
    prependTo: "#slicknav_menu",
    label: "",
    allowParentLinks: false,
    showChildren: false,
  });
  $("html").addClass("js");
});

// typing function for hero
window.addEventListener("load", async function () {
  let text = document.getElementById("type_text").innerHTML;
  text = text.replace(/<br\s*\/?>/gi, "\n");
  let charArray = text.split("");
  document.getElementById("type_text").innerHTML = "";
  await delay(200);
  for (let char of charArray) {
    await delay(100);
    document.getElementById("type_text").innerHTML += char;
  }
});

// animated gif for cards
$(function () {
  document.querySelectorAll(".gif_img").forEach((element) => {
    let imageSrc = element.src;
    let baseSrc = imageSrc.slice(0, imageSrc.length - 3);
    $(element).hover(
      function () {
        $(element).attr("src", baseSrc + "gif");
      },
      function () {
        $(element).attr("src", imageSrc);
      },
    );
  });
});
