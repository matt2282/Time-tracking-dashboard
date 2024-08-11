const work = document.getElementById("work");
const play = document.getElementById("play");
const study = document.getElementById("study");
const exercise = document.getElementById("exercise");
const social = document.getElementById("social");
const selfcare = document.getElementById("self-care");
const daily = document.getElementById("daily");
const weekly= document.getElementById("weekly")
const monthly= document.getElementById("monthly")
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('weekly').click();
});
daily.addEventListener("click", () => {
  daily.style.color = "white";
  weekly.style.color = "";
  monthly.style.color = "";
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((post) => {
        if (post.title == "Work") {
          const hours = work.querySelector(".hours span");
          const lastweek = work.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.daily.current}`;
          lastweek.innerHTML= `${post.timeframes.daily.previous}`;
        }
        if (post.title == "Play") {
          const hours = play.querySelector(".hours span");
          const lastweek = play.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.daily.current}`;
          lastweek.innerHTML= `${post.timeframes.weekly.previous}`;
        }
        if (post.title == "Study") {
          const hours = study.querySelector(".hours span");
          const lastweek = study.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.daily.current}`;
          lastweek.innerHTML= `${post.timeframes.weekly.previous}`;
        }
        if (post.title == "Exercise") {
          const hours = exercise.querySelector(".hours span");
          const lastweek = exercise.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.daily.current}`;
          lastweek.innerHTML= `${post.timeframes.daily.previous}`;
        }
        if (post.title == "Social") {
          const hours = social.querySelector(".hours span");
          const lastweek = social.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.daily.current}`;
          lastweek.innerHTML= `${post.timeframes.daily.previous}`;
        }
        if (post.title == "Self Care") {
          const hours = selfcare.querySelector(".hours span");
          const lastweek = selfcare.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.daily.current}`;
          lastweek.innerHTML= `${post.timeframes.daily.previous}`;
        }
      });
    });
});
weekly.addEventListener("click", () => {
  daily.style.color = "";
  weekly.style.color = "white";
  monthly.style.color = "";
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((post) => {
        if (post.title == "Work") {
          const hours = work.querySelector(".hours span");
          const lastweek = work.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.weekly.current}`;
          lastweek.innerHTML= `${post.timeframes.weekly.previous}`;
        }
        if (post.title == "Play") {
          const hours = play.querySelector(".hours span");
          const lastweek = play.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.weekly.current}`;
          lastweek.innerHTML= `${post.timeframes.weekly.previous}`;
        }
        if (post.title == "Study") {
          const hours = study.querySelector(".hours span");
          const lastweek = study.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.weekly.current}`;
          lastweek.innerHTML= `${post.timeframes.weekly.previous}`;
        }
        if (post.title == "Exercise") {
          const hours = exercise.querySelector(".hours span");
          const lastweek = exercise.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.weekly.current}`;
          lastweek.innerHTML= `${post.timeframes.weekly.previous}`;
        }
        if (post.title == "Social") {
          const hours = social.querySelector(".hours span");
          const lastweek = social.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.weekly.current}`;
          lastweek.innerHTML= `${post.timeframes.weekly.previous}`;
        }
        if (post.title == "Self Care") {
          const hours = selfcare.querySelector(".hours span");
          const lastweek = selfcare.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.weekly.current}`;
          lastweek.innerHTML= `${post.timeframes.weekly.previous}`;
        }
      });
    });
});
monthly.addEventListener("click", () => {
  daily.style.color = "";
  weekly.style.color = "";
  monthly.style.color = "white";
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((post) => {
        if (post.title == "Work") {
          const hours = work.querySelector(".hours span");
          const lastweek = work.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.monthly.current}`;
          lastweek.innerHTML= `${post.timeframes.monthly.previous}`;
        }
        if (post.title == "Play") {
          const hours = play.querySelector(".hours span");
          const lastweek = play.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.monthly.current}`;
          lastweek.innerHTML= `${post.timeframes.monthly.previous}`;
        }
        if (post.title == "Study") {
          const hours = study.querySelector(".hours span");
          const lastweek = study.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.monthly.current}`;
          lastweek.innerHTML= `${post.timeframes.monthly.previous}`;
        }
        if (post.title == "Exercise") {
          const hours = exercise.querySelector(".hours span");
          const lastweek = exercise.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.monthly.current}`;
          lastweek.innerHTML= `${post.timeframes.monthly.previous}`;
        }
        if (post.title == "Social") {
          const hours = social.querySelector(".hours span");
          const lastweek = social.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.monthly.current}`;
          lastweek.innerHTML= `${post.timeframes.monthly.previous}`;
        }
        if (post.title == "Self Care") {
          const hours = selfcare.querySelector(".hours span");
          const lastweek = selfcare.querySelector(".last-week span");
          hours.innerHTML = `${post.timeframes.monthly.current}`;
          lastweek.innerHTML= `${post.timeframes.monthly.previous}`;
        }
      });
    });
});
