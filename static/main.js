window.onload = () => {
    main_slide = 0;
    var slides = document.getElementById('mainslide').children;
    setInterval(()=>{
        slides[main_slide].styles.display = "none";
        main_slide++;
        slides[main_slide].styles.display = "block";
    },5000);
}

