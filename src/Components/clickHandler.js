//Used to change color of header elements when navigated

//to with buttons
export default function naviColorClickHandler(setterId) {
    // console.log(callerId, setterId)

    let primColor = "white";
    let secColor = "#1B8BC9";

    // resets all buttons and only changes the color of the neccesary one
    document.getElementById("homePc").style.color = primColor;
    document.getElementById("projectsPc").style.color = primColor;
    document.getElementById("contactPc").style.color = primColor;
    document.getElementById("qualificationsPc").style.color = primColor;

    document.getElementById("homeMobile").style.color = primColor;
    document.getElementById("projectsMobile").style.color = primColor;
    document.getElementById("contactMobile").style.color = primColor;
    document.getElementById("qualificationsMobile").style.color = primColor;

    document.getElementById(setterId + "Pc").style.color = secColor;
    document.getElementById(setterId + "Mobile").style.color = secColor;
}

window.onpopstate = () => {
    document.getElementById("homePc").style.color = "white";
    document.getElementById("projectsPc").style.color = "white";
    document.getElementById("contactPc").style.color = "white";
    document.getElementById("qualificationsPc").style.color = "white";

    document.getElementById("homeMobile").style.color = "white";
    document.getElementById("projectsMobile").style.color = "white";
    document.getElementById("contactMobile").style.color = "white";
    document.getElementById("qualificationsMobile").style.color = "white";

    if (window.location.pathname.endsWith("Home")) {
        document.getElementById("homePc").style.color = "#1B8BC9";
        document.getElementById("homeMobile").style.color = "#1B8BC9";
    } else if (window.location.pathname.endsWith("Projects")) {
        document.getElementById("projectsPc").style.color = "#1B8BC9";
        document.getElementById("projectsMobile").style.color = "#1B8BC9";
    } else if (window.location.pathname.endsWith("Qualifications")) {
        document.getElementById("qualificationsPc").style.color = "#1B8BC9";
        document.getElementById("qualificationsMobile").style.color = "#1B8BC9";
    } else if (window.location.pathname.endsWith("Contact")) {
        document.getElementById("contactPc").style.color = "#1B8BC9";
        document.getElementById("contactMobile").style.color = "#1B8BC9";
    }
};
