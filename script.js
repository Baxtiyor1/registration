const elForm = document.querySelector('#form')
const elUserName = elForm.querySelector('#user_name')
const elUserAge = elForm.querySelector('#user_age')
const elUserProf = elForm.querySelector('#user_profession')
const elGender = elForm.querySelector('#gender')
const elAboutUser = elForm.querySelector('#about_user')
const elUserImg = elForm.querySelector('#user_img')
const elBtn = elForm.querySelector('#btn')
const elMenu = document.querySelector('#menu')


let upload_img = "";
elUserImg.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        upload_img = reader.result;
        document.querySelector('.display_image').style.backgroundImage = `url(${upload_img}`
    })
    reader.readAsDataURL(this.files[0]);
})


elBtn.addEventListener('click', function (e) {
    e.preventDefault()
    elMenu.setAttribute('class', 'menu')



    const data = [
        {
            eldiv: '',
            user_name: elUserName.value,
            user_age: elUserAge.value,
            user_prof: elUserProf.value,
            user_gender: elGender.value,
            about_user: elAboutUser.value,
        }
    ]

    data.forEach((data) => {
        let newLi = document.createElement('li');
        let newdiv = document.createElement('div');
        let Name = document.createElement('p');
        let age = document.createElement('p');
        let prof = document.createElement('p');
        let gender = document.createElement('p');
        let about = document.createElement('p');

        newLi.setAttribute('class', 'active_li')
        Name.textContent = data.user_name;
        newdiv.setAttribute('class', 'display_image')
        newdiv.setAttribute('style', `background-image: url(${upload_img})`);
        age.textContent = 'Age: ' + data.user_age;
        prof.textContent = data.user_prof;
        gender.textContent = 'Gender: ' + data.user_gender;
        about.textContent = data.about_user;

        newLi.appendChild(Name)
        newLi.appendChild(newdiv)
        newLi.appendChild(age)
        newLi.appendChild(prof)
        newLi.appendChild(gender)
        newLi.appendChild(about)

        elMenu.appendChild(newLi)
    })

    elUserName.value = ''
    elUserAge.value = ''
    elUserProf.value = ''
    elGender.value = 'Gender'
    elAboutUser.value = ''
})
