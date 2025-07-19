
    const sideMenu=document.querySelector('#sideMenu');
const navbar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
    sideMenu.style.transform='translateX(-16rem)';
}
function closeMenu() {
    sideMenu.style.transform='translateX(16rem)';
}
window.addEventListener('scroll',()=>{
    if(scrollY>50){
        navbar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-[#11001F]','dark:shadow-white/20');
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:bg-transparent','dark:border',' dark:border-white/50');

    }
    else{
        navbar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-[#11001F]','dark:shadow-white/20');
        navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50','dark:bg-transparent','dark:border',' dark:border-white/50');
    }
})
document.getElementById('showMore').addEventListener('click', function() {
  const hiddenProjects = document.querySelectorAll('#work .hidden');
  hiddenProjects.forEach(project => project.classList.remove('hidden'));
  this.style.display = 'none'; // Hide button after showing all
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
window.toggleTheme = function ()  {
    document.documentElement.classList.toggle('dark');
   if (document.documentElement.classList.contains('dark')) {
    localStorage.theme='dark';
   } 
   else{
    localStorage.theme = 'light';
   }
}