let counter1 = 0, counter2 = 0;

$(document).ready(function() {
    setTimeout(function() {
        setInterval(loadFigCompltProjects, 30);
    }, 2000);

    setTimeout(function() {
        setInterval(loadFigcustreviews, 10);
    }, 2000);
});

function loadFigCompltProjects() {
    if (counter1 < 91) {
        $("#counter_1").text((++counter1) + "K+");
    }
}

function loadFigcustreviews() {
    if (counter2 < 221) {
        $("#counter_2").text(++counter2);
    }
}



let keyAchC_01 = 0, keyAchC_02 = 0, keyAchC_03 = 0, keyAchC_04 = 0;

$(document).ready(function() {
    setTimeout(function() {
        setInterval(LoadKeyAcheivementCount_01, 100);
    }, 2000);

    setTimeout(function() {
        setInterval(LoadKeyAcheivementCount_02, 200);
    }, 2000);

    setTimeout(function() {
        setInterval(LoadKeyAcheivementCount_03, 400);
    }, 2000);

    setTimeout(function() {
        setInterval(LoadKeyAcheivementCount_04, 700);
    }, 2000);
});

function LoadKeyAcheivementCount_01() {
    if (keyAchC_01 < 57) {
        $("#KeyAchCount_01").text((++keyAchC_01) + "+");
    }
}

function LoadKeyAcheivementCount_02() {
    if (keyAchC_01 < 31) {
        $("#KeyAchCount_02").text((++keyAchC_02) + "+");
    }
}

function LoadKeyAcheivementCount_03() {
    if (keyAchC_01 < 12) {
        $("#KeyAchCount_03").text((++keyAchC_03) + "+");
    }
}

function LoadKeyAcheivementCount_04() {
    if (keyAchC_01 < 4) {
        $("#KeyAchCount_04").text((++keyAchC_04) + "+");
    }
}