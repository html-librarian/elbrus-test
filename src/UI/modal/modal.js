export function Modal() {
    $("button[data-modal]").on("click", function () {
        const modalID = $(this).data("modal");
        $(modalID).toggleClass('show');
    });
}
