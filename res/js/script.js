// json validator - https://jsonlint.com/
//store json file online - https://www.npoint.io/

/*$(function() {
    $.get("https://api.npoint.io/a63a2287e67bcbc5b7f0", function(json_obj) {
        for (obj of json_obj) {
            let section = $('<section class= "post">');
            let facelogo = $('<div class="facelogo">');
            let author = $('<p>').text(obj.author);
            let date = $('<p>').text(obj.create_time);
            let big_picture = $('<div class="content_picture">');
            let pic_content = $('<img src="'+ obj.image1 +'"/>');
            let body = $('<div>');
            let body_text = $('<p>').text(obj.body);
            let like_button = $('<div class="like">');
            let small_img = $('<img src="'+ obj.image2 +'"/>');

            facelogo.append(author);
            facelogo.append(date);
            big_picture.append(pic_content);
            body.append(body_text);
            like_button.append(small_img);
            section.append(facelogo);
            section.append(big_picture);
            section.append(body);
            section.append(like_button);
            $('.center').append(section)
        }
    })
});
*/

//This works with the live server extension(visual code)
$(function () {
    $.get("res/posts/posts.json", function (json_obj) {
        for (obj of json_obj) {
            let section = $('<section class= "post">');
            let facelogo = $('<div class="facelogo">');
            let author = $('<p>').text(obj.author);
            let date = $('<p>').text(obj.create_time);
            let big_picture = $('<div class="content_picture">');
            let pic_content = $('<img src="' + obj.image1 + '"/>');
            let body = $('<div>');
            let body_text = $('<p>').text(obj.body);
            let like_button = $('<div class="like">');
            let small_img = $('<img src="' + obj.image2 + '"/>');

            facelogo.append(author);
            facelogo.append(date);
            big_picture.append(pic_content);
            body.append(body_text);
            like_button.append(small_img);
            section.append(facelogo);
            section.append(big_picture);
            section.append(body);
            section.append(like_button);
            $('.center').append(section)
        }
    })
});

//When the user clicks on the button,
//toggle between hiding and showing the dropdown content 
function myFunction(menu) {
    document.getElementById(menu).classList.toggle('show');
}

//Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}




