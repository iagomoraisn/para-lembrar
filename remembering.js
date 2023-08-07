var msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

var closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);

closeBtn.onClick = function () {
    panel.parentNode.removeChild(panel);
};