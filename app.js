// let choose_img =  document.querySelectorAll(".choose_img");
let stone_img = document.querySelector(".stone_img");

let scissor_img = document.querySelector(".scissor_img");

let paper_img = document.querySelector(".paper_img");

let user_inp_img = document.querySelector(".user_inp");

let cput_inp_img = document.querySelector(".cpu_inp");

let cont_text_box = document.querySelector(".cont_text");

let user_field = document.querySelector(".user_field");
let cpu_field = document.querySelector(".cpu_field");



let user_input = false;
let user_input_value = 0;

let cpu_input_value;


function change_img_user() {
    user_inp_img.classList.add("user_inp_img_class");
}

function change_img_cpu() {
    cput_inp_img.classList.add("cpu_img_class");
}

stone_img.addEventListener("click", () => {

    user_input = true;
    user_input_value = 1;
    cont_text_box.innerHTML = "<b>START<b>";
    stone_img.style.opacity = "1";
});



paper_img.addEventListener("click", () => {

    user_input = true;
    user_input_value = 2;
    paper_img.style.opacity = "1";
    cont_text_box.innerHTML = "<b>START<b>";
});



scissor_img.addEventListener("click", () => {

    user_input = true;
    user_input_value = 3;
    cont_text_box.innerHTML = "<b>START<b>";
    scissor_img.style.opacity = "1";
});


cont_text_box.addEventListener("click", () => {

    wave();

    setTimeout(() => {


        cpu_input_value = Math.ceil(Math.random() * 3);


        if (user_input) {

            cpu_field.classList.remove("waving_input1");
            user_field.classList.remove("waving_input2");

            // 0->1
            if (user_input_value == 1 && cpu_input_value == 1) {
                user_inp_img.style.backgroundImage = "url('stone.png')";
                change_img_user();
                cput_inp_img.style.backgroundImage = "url('stone.png')";
                change_img_cpu();
                cont_text_box.innerHTML = "<b>draw<b>";
            }

            // 0->2
            else if (user_input_value == 2 && cpu_input_value == 2) {
                user_inp_img.style.backgroundImage = "url('paper.png')";
                change_img_user();
                cput_inp_img.style.backgroundImage = "url('paper.png')";
                change_img_cpu();
                cont_text_box.innerHTML = "<b>draw<b>";
            }

            // 0->3
            else if (user_input_value == 3 && cpu_input_value == 3) {
                user_inp_img.style.backgroundImage = "url('scissors.png')";
                change_img_user();
                cput_inp_img.style.backgroundImage = "url('scissors.png')";
                change_img_cpu();
                cont_text_box.innerHTML = "<b>draw<b>";
            }



            // 1
            else if (user_input_value == 1 && cpu_input_value == 3) {


                user_inp_img.style.backgroundImage = "url('stone.png')";
                change_img_user();
                cput_inp_img.style.backgroundImage = "url('scissors.png')";
                change_img_cpu();
                cont_text_box.innerHTML = "<b>you won<b>";
            }

            // 2
            else if (user_input_value == 1 && cpu_input_value == 2) {

                user_inp_img.style.backgroundImage = "url('stone.png')";
                change_img_user();
                cput_inp_img.style.backgroundImage = "url('paper.png')";
                change_img_cpu();
                cont_text_box.innerHTML = "<b>cpu won<b>";
            }

            // 3
            else if (user_input_value == 2 && cpu_input_value == 1) {

                user_inp_img.style.backgroundImage = "url('paper.png')";
                change_img_user();
                cput_inp_img.style.backgroundImage = "url('stone.png')";
                change_img_cpu();
                cont_text_box.innerHTML = "<b>you won<b>";
            }

            // 4
            else if (user_input_value == 2 && cpu_input_value == 3) {

                user_inp_img.style.backgroundImage = "url('paper.png')";
                change_img_user();
                cput_inp_img.style.backgroundImage = "url('scissors.png')";
                change_img_cpu();
                cont_text_box.innerHTML = "<b>cpu won<b>";
            }

            // 5
            else if (user_input_value == 3 && cpu_input_value == 1) {

                user_inp_img.style.backgroundImage = "url('scissors.png')";
                change_img_user();
                cput_inp_img.style.backgroundImage = "url('stone.png')";
                change_img_cpu();
                cont_text_box.innerHTML = "<b>cpu won<b>";
            }

            // 6
            else if (user_input_value == 3 && cpu_input_value == 2) {

                user_inp_img.style.backgroundImage = "url('scissors.png')";
                change_img_user();
                cput_inp_img.style.backgroundImage = "url('paper.png')";
                change_img_cpu();
                cont_text_box.innerHTML = "<b>you won<b>";
            }



        }

        else {
            cont_text_box.innerHTML = "<b>CHOOSE INPUT<b>";
        }

        user_input = false;


    }, 1000);

    setTimeout(() => {
        location.reload();
    }, 2500);

});

function wave() {
    user_field.classList.add("waving_input2");
    cpu_field.classList.add("waving_input1");
}
