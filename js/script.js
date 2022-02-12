"use strict";
var openSubmenu = function () {
    var menu = document.querySelector(".menu");

    menu.addEventListener("click", function (e) {
        e.preventDefault();
        var target = e.target,
            parent = target.closest(".menu__item");
        if (parent) {
            var nextElement = parent.nextElementSibling;
            if (nextElement.classList.contains("submenu")) {
                var submenu = nextElement;
                if (submenu.classList.contains("submenu--active")) {
                    submenu.classList.remove("submenu--active");
                } else {
                    submenu.classList.add("submenu--active");
                }
            }

            if (parent.classList.contains("menu--active")) {
                parent.classList.remove("menu--active");
            } else {
                parent.classList.add("menu--active");
            }
        }
    });
};

openSubmenu();
