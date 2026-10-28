// Screenshot galleries: thumbnails open a slideshow that works with a
// mouse, touch, or keyboard (Tab, Enter, arrow keys, Escape).
(function () {
    var openModal = null;   // the dialog that's currently showing
    var opener = null;      // the thumbnail that opened it, to return focus
    var current = 0;

    function slides(modal) {
        return modal.querySelectorAll(".modalSlide");
    }

    function show(modal, index) {
        var all = slides(modal);
        current = (index + all.length) % all.length;
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = i === current ? "block" : "none";
        }
    }

    function open(modal, index, trigger) {
        opener = trigger;
        openModal = modal;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        show(modal, index);
        modal.querySelector(".close").focus();
    }

    function close() {
        if (!openModal) return;
        openModal.style.display = "none";
        document.body.style.overflow = "";
        openModal = null;
        if (opener) opener.focus();
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".thumbButton").forEach(function (btn) {
            btn.addEventListener("click", function () {
                var modal = document.getElementById(btn.dataset.gallery);
                open(modal, Number(btn.dataset.index), btn);
            });
        });

        document.querySelectorAll(".modal").forEach(function (modal) {
            modal.querySelector(".close").addEventListener("click", close);
            modal.querySelector(".prev").addEventListener("click", function () { show(modal, current - 1); });
            modal.querySelector(".next").addEventListener("click", function () { show(modal, current + 1); });
            // Clicking the dark backdrop (not the screenshot) also closes it
            modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
        });
    });

    document.addEventListener("keydown", function (e) {
        if (!openModal) return;
        if (e.key === "Escape") {
            close();
        } else if (e.key === "ArrowLeft") {
            show(openModal, current - 1);
        } else if (e.key === "ArrowRight") {
            show(openModal, current + 1);
        } else if (e.key === "Tab") {
            // Keep keyboard focus inside the open slideshow
            var items = openModal.querySelectorAll("button");
            var first = items[0], last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                last.focus(); e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === last) {
                first.focus(); e.preventDefault();
            }
        }
    });
})();
