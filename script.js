const elForm = document.querySelector('#form')
const elUserName = elForm.querySelector('#user_name')
const elUserAge = elForm.querySelector('#user_age')
const elUserProf = elForm.querySelector('#user_profession')
const elGender = elForm.querySelector('#gender')
const elAboutUser = elForm.querySelector('#about_user')
const elBtn = elForm.querySelector('#btn')
const elMenu = document.querySelector('#menu')


elBtn.addEventListener('click', function(e){
    e.preventDefault()
    elMenu.setAttribute('class', 'menu')
    const data = [
        {
            imgSrc: 'http://picsum.photos/220/150?random=1',
            user_name: elUserName.value,
            user_age: elUserAge.value,
            user_prof: elUserProf.value,
            user_gender: elGender.value,
            about_user: elAboutUser.value,
        }
    ]
    
    data.forEach((data) => {
        let newLi = document.createElement('li');
        let newImg = document.createElement('img');
        let Name = document.createElement('p');
        let age = document.createElement('p');
        let prof = document.createElement('p');
        let gender = document.createElement('p');
        let about = document.createElement('p');
        
        newLi.setAttribute('class', 'active_li')
        Name.textContent = data.user_name;
        newImg.setAttribute('src', data.imgSrc)
        age.textContent = data.user_age;
        prof.textContent = data.user_prof;
        gender.textContent = data.user_gender;
        about.textContent = data.about_user;
        
        newLi.appendChild(newImg)
        newLi.appendChild(Name)
        newLi.appendChild(age)
        newLi.appendChild(prof)
        newLi.appendChild(gender)
        newLi.appendChild(about)
        
        elMenu.appendChild(newLi)
    })
})
