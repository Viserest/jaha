window.onload = () => {
    main_slide = 0;
    slides = document.getElementById('mainslide').children;
    setInterval(()=>{
        slides[main_slide].style.display = "none";
        main_slide++;
        slides[main_slide].style.display = "block";
        if(main_slide > slides.length){
            main_slide = 0;
        }
    },5000);
}

