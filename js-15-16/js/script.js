$(function () {
  
  $('.inputBlock input').focus(
      function(){
          $(this).parent('div').addClass('active');
      }).blur(
      function(){
          $(this).parent('div').removeClass('active');
      });


  $('button').on('click',function(event){
    event.preventDefault();

    $('#searchBlock').removeClass('centerScreen').addClass('topSearch');
      $('body ul').remove();

    var search = $('input').val();
   
  $.ajax({
      url: "https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=" + search + "&limit=30",
      dataType : "json",
      metod:"POST",

      success: function (data) {
        var ul = document.createElement("ul");
          $.each(data.results, function(i, val){
            var li = document.createElement("li");
                li.innerHTML = '<img src="'+val.url+'" title="'+val.title+'"/>';
                ul.appendChild(li);
          });
            $('body').append(ul);
      }, //success end

       complete: function() {
         $('#loadwnd').hide();
      } // complete end
    }); //ajax end

  $('#loadwnd').show();
  }); // button event end 


});

// create constructor Human
function Human(name, age, sex, heigh, weight) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.heigh = heigh;
  this.weight = weight;
}

// create constructor Worker
function Worker(name, age, sex, heigh, weight,workPlace,salary) {
   Human.apply(this, arguments);
  this.workPlace = workPlace;
  this.salary = salary;
}

// create constructor Student
function Student(name, age, sex, heigh, weight,studyPlace,scholarship) {
   Human.apply(this, arguments);
  this.studyPlace = studyPlace;
  this.scholarship = scholarship;
}


Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.work = function() {
  alert('work!');
};

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.watch = function() {
  alert('watch TV shows!');
};



var workerAlex = new Worker("Alex", 25, "male", 185, 87,"baza",1500);
console.log('worker Alex: ',workerAlex);
console.log('name: ',workerAlex.name);
console.log('weight: ',workerAlex.weight);
console.log('salary: ',workerAlex.salary);


var studentMax = new Student("Max", 22, "male", 182, 87,"University",500);
console.log('student Max: ',studentMax);
console.log('name: ',studentMax.name);
console.log('sex: ',studentMax.sex);
console.log('scholarship: ',studentMax.scholarship);
