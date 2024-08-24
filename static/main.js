window.onload = () => {
    main_slide = 0;
    slides = document.getElementById('mainslide').children;
    setInterval(()=>{
        console.log(main_slide);
        slides[main_slide].style.display = "none";
        main_slide++;
        slides[main_slide].style.display = "block";
        if(main_slide > slides.length){
            console.log(true);
            main_slide = 0;
        }
    },5000);
}

