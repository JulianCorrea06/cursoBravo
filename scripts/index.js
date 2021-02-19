window-addEventListener('load',()=>{

    const genderOptions = document.querySelectorAll('.gender_option');
    const button = document.querySelector('button');
    console.log(genderOptions);

    genderOptions.forEach(option =>{
        option.addEventListener('click', optionClickHandler);
    });

    function optionClickHandler(event){

        genderOptions.forEach(option =>{
            option.classList.remove('card--active');
        });
        
        event.target.classList.add('card--active');
        
        button.disabled = false;
    }


}); 