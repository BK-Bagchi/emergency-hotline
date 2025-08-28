const getTheTime = () => {
  const now = new Date();
  const hours = now.getHours() - 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const AMOrPM = now.getHours() >= 12 ? "PM" : "AM";
  const showTime = `${hours} : ${minutes} : ${seconds} ${AMOrPM}`;
  return showTime;
};

document.getElementById("heart-count").innerHTML = 0;
document.getElementById("coin-count").innerHTML = 100;
document.getElementById("copy-count").innerHTML = 0;

document.querySelectorAll(".heart-icon").forEach((heart, index) => {
  heart.addEventListener("click", () => {
    document.getElementById("heart-count").innerHTML =
      parseInt(document.getElementById("heart-count").innerHTML) + 1;
    document.getElementsByClassName("heart-icon-span")[index].innerHTML =
      "&#10084;";
  });
});

document.querySelectorAll(".call-btn").forEach((call, index) => {
  call.addEventListener("click", () => {
    const coinNow = document.getElementById("coin-count").innerHTML;
    if (coinNow < 20) alert("You don't have enough coins");
    else
      document.getElementById("coin-count").innerHTML =
        parseInt(document.getElementById("coin-count").innerHTML) - 20;

    const serviceName =
      document.getElementsByClassName("service-name")[index].innerText;

    const serviceContact =
      document.getElementsByClassName("service-contact")[index].innerText;

    const historyLog = document.getElementById("history-log").innerHTML;

    document.getElementById("history-log").innerHTML =
      historyLog +
      `
    <div class="flex items-center justify-between mx-[20px] my-[10px] px-[20px] py-[10px] bg-[#F2F2F2] rounded-[10px]">                
        <div>
            <p class="font-bold text-[18px]">${serviceName}</p>
            <span>${serviceContact}</span>
        </div>
        <div>
            <span>${getTheTime()}</span>
        </div>                
    </div>
    `;
  });
});

document.getElementById("clear-history").addEventListener("click", () => {
  document.getElementById("history-log").innerHTML = "";
});

document.querySelectorAll(".copy-btn").forEach((button, index) => {
  button.addEventListener("click", () => {
    const serviceContact =
      document.getElementsByClassName("service-contact")[index].innerText;
    navigator.clipboard.writeText(serviceContact).then(() => {
      alert(`Copied: ${serviceContact}`);
    });

    document.getElementById("copy-count").innerHTML =
      parseInt(document.getElementById("copy-count").innerHTML) + 1;
  });
});
