onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    const a = setTimeout(() => {
      window.location.href = "Happy_birthday.html"; 
      clearTimeout(a);
    }, 8000);
  };
