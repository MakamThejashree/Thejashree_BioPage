  window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

  function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  } 
function ContactSubmit(){            
            var name = document.getElementById('ContactName').value;
            var Email = document.getElementById('ContactEmailId').value;
            
            if(name==""){
                alert("Please enter a valid name");
                window.location.hash = '#contact';
            }
            else if(Email=="" || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email))){
                alert("Please enter a valid Email ID");
                window.location.hash = '#contact';
            }

            else{
                alert("Hi  " + name +", I will surely contact you through your "+ Email +"!!");
                window.location.hash = '#home';
            }
            
            
        }