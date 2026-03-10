const button = document.getElementById("submitBtn");
const duck = document.getElementById("duckSound");

// when the button is clicked
button.addEventListener("click", (e) => {
    e.preventDefault(); // stop form submitting immediately

    console.log("Button clicked, playing sound...");

    duck.play();

    duck.addEventListener("ended", () => {
        button.form.submit(); // submit form after sound ends
    });
});
