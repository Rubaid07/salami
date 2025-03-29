document.addEventListener("DOMContentLoaded", function () {
    const salamiBtn = document.getElementById("salami-btn");
    const dolarBtn = document.getElementById("dolar-btn");
    const takaBtn = document.getElementById("taka-btn");

    if (salamiBtn) {
        salamiBtn.addEventListener("click", function () {
            window.location.href = "dolar-taka.html";
        });
    }

    if (dolarBtn) {
        dolarBtn.addEventListener("click", function () {
            window.location.href = "dolar.html";
        });
    }
    if (takaBtn) {
        takaBtn.addEventListener("click", function () {
            window.location.href = "taka.html";
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logout-btn");
  
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        window.location.href = "index.html";
      });
    }
  });
  

document.addEventListener("DOMContentLoaded", function () {
    const addMoneyBtn = document.getElementById('add-money');
    const moneyContainer = document.getElementById("money-container"); 

    if (addMoneyBtn) {
        addMoneyBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const amount = document.getElementById('amount').value;
            const convertAmount = parseFloat(amount);
            const pin = document.getElementById("pin").value;
            const convertPin = parseInt(pin);
            const mainBalance = document.getElementById("main-balance").innerText;
            const converMainBalance = parseFloat(mainBalance);

            if (convertPin === 1234) {
                const sum = converMainBalance + convertAmount;
                document.getElementById('main-balance').innerText = sum;
                Swal.fire({
                    title: '<h3 style="font-size: 18px;">Congratulation <br> tumar account e taka choilla gese. upore balance check koro<br> --Dipjol</h3>',
                    icon: "success",
                    draggable: false,
                    imageUrl: "assets/dipjol-taka.jpg",
                    imageWidth: 300
                });
                for (let i = 0; i < 15; i++) {
                    let money = document.createElement("img");
                    money.src = "assets/taka.png"; 
                    money.classList.add("money");
                    money.style.left = Math.random() * 100 + "vw";
                    money.style.animationDuration = Math.random() * 2 + 3 + "s";
                    moneyContainer.appendChild(money);
        
                    setTimeout(() => {
                        money.remove();
                    }, 3000);
                }
                document.getElementById("salami-line").classList.remove("hidden")
                document.getElementById("dolar-salami").classList.add("hidden")
                document.getElementById('amount').value = '';
                document.getElementById("pin").value = '';
            } else {
                alert('pin thik nai');
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const addMoneyTkBtn = document.getElementById('add-money-tk');
    const moneyContainer = document.getElementById("money-container"); 

    if (addMoneyTkBtn) {
        addMoneyTkBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const amount = document.getElementById('amount').value;
            const convertAmount = parseFloat(amount);
            const pin = document.getElementById("pin").value;
            const convertPin = parseInt(pin);
            const mainBalance = document.getElementById("main-balance").innerText;
            const converMainBalance = parseFloat(mainBalance);

            if (convertPin === 1234) {
                const sum = converMainBalance + convertAmount;
                document.getElementById('main-balance').innerText = sum;
                Swal.fire({
                    title: '<h3 style="font-size: 18px;">Congratulation <br> apnar account e taka chole gese😩. upore balance check koro<br> --Sakib Khan</h3>',
                    icon: "success",
                    draggable: false,
                    imageUrl: "assets/1k-taka.jpg",
                    imageWidth: 300
                });
                for (let i = 0; i < 15; i++) {
                    let money = document.createElement("img");
                    money.src = "assets/taka.png"; 
                    money.classList.add("money");
                    money.style.left = Math.random() * 100 + "vw";
                    money.style.animationDuration = Math.random() * 2 + 3 + "s";
                    moneyContainer.appendChild(money);
        
                    setTimeout(() => {
                        money.remove();
                    }, 3000);
                }
                document.getElementById("salami-line").classList.remove("hidden")
                document.getElementById("dolar-salami").classList.add("hidden")
                document.getElementById('amount').value = '';
                document.getElementById("pin").value = '';
            } else {
                alert('pin thik nai');
            }
        });
    }
});


