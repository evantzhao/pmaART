models = ["L02","M06","O01","Q03","S03","S17","P01","X03","X01","O05","Q01","E01","S21","A03","T03","B03","Q08","F03","E04","S39"]
movement = ["Avoidance 4 Movement","Complex Operations 3 Dropping Curves","Reorganizing Isometries 2 Different Scales","Rotating Inscription 6 Arc and Axis","Approaches 2 Angle and surface","Avoidance 2 Volumes","Approaches 4 Torsions","Lines In General Back Approach 1","Approaches 3 Knotting Exercise","Forsythe-Reorganizing-Isometries-5-As Floor Pattern","Complex Operations 1 Inclination Extension","Avoidance 3 Own Body Position","Avoidance 1 Introduction","Compression 4 Amplification","Movement Isometries","Isometries 4 Sensibility","Rotating Inscription 1 Rotating Inscription","Rotating Inscription 3 Shift Point of Inscript","Spatial Reorientation 2 Room Reori","Spatial Recovery 1 Fragmentation"]
direction = ["north", "south", "east", "west", "isometric", "up"]
tempo = ["walking", "iambic", "downbeat", "medium", "peaceful", "quick", "slow"]
body = ["elbow","knee","forehead","ear","knuckle","nostril","earlobe","kneecap","belly","thigh","calf","wrist","teeth","triceps","shoulderblades","elbow","cheekbone","shoulderblades","eyebrow","eyebrow"]
adj = ["warm","warm","freezing","moist","determined","courage","cowardly","warm","freezing","surviving","surviving","angry","bewildered","broad","thundering","ancient","ancient","bitter","abundant","heavy"]
texture = ["silk","carpet","polyester","sandpaper","sandpaper","carpet","soft","hard","amorphous","silk","amorphous","broken","broken","carpet","soft","hard","amorphous","rounded","rounded","silk"]
layer = ["entrance - dots lines planes", "entrance - planes", "foyer - lines", "foyer - lines and planes", "foyer - planes", "foyer - points", "foyer - volume", "stairwell - dots", "stairwell - dots lines", "stairwell - dots lines planes", "stairwell - planes", "stairwell - planes and volumes", "stairwell - points", "stairwell - volume and line"]

function updateImage(x, y) {
    $(".model").css('background-image', `url(images/machines/${models[x % models.length]}.jpg)`);
    $(".model > p").text(models[x % models.length]);
    
    $(".movement").css('background-image', `url(images/movements/${encodeURI(movement[y % movement.length])}.png)`);
    $(".movement > p").text(movement[y % movement.length]);

    $(".direction").css('background-image', `url(images/direction/${direction[parseInt((x / y) + 30) % direction.length]}.png)`);
    $(".direction > p").text(direction[parseInt((x / y) + 30) % direction.length]);

    $(".tempo").css('background-image', `url(images/tempo/${tempo[parseInt(((y * 100) / x) + 30) % tempo.length]}.jpg)`);
    $(".tempo > p").text(tempo[parseInt(((y * 100) / x) + 30) % tempo.length]);

    $(".bodypart").css('background-image', `url(images/body/${body[parseInt(((y * y + 300) / x) + 30) % body.length]}.jpg)`);
    $(".bodypart > p").text(body[parseInt(((y * y + 300) / x) + 30) % body.length]);

    $(".adjectives").css('background-image', `url(images/adjectives/${adj[parseInt(((x * x + 300) / y) + 30) % adj.length]}.jpg)`);
    $(".adjectives > p").text(adj[parseInt(((x * x + 300) / y) + 30) % adj.length]);

    $(".texture").css('background-image', `url(images/texture/${texture[parseInt(((y * y * y) / x) + 30) % texture.length]}.jpg)`);
    $(".texture > p").text(texture[parseInt(((y * y * y) / x) + 30) % texture.length]);

    console.log(layer[parseInt(((x * x * y) / x) + 30) % layer.length])

    $(".layer").css('background-image', `url(images/layers/${encodeURI(layer[parseInt(((x * x * y) / x) + 30) % layer.length])}.png)`);
    $(".layer > p").text(layer[parseInt(((x * x * y) / x) + 30) % layer.length]);
}


function drawGrid(){
    for (var i = 0; i < gridSize * gridSize; i++) {
        $("#canvas").append('<div class="box outline"></div>')
    }
    $(".box").css({
        'width': $('#canvas').width() / gridSize,
        'height': $('#canvas').height() / gridSize
    })
}

function marker() {
    $(".box").mouseenter(function(bleh){
        $(this).css("background-color", "#b2b2b2")
        updateImage(bleh.clientX, bleh.clientY);
    })
}

function eraser() {
    $(".box").mouseenter(function(){
        $(this).css("background-color", "#FFF")
    })
}

function rainbow() {
    $(".box").mouseenter(function(){
        var rainbowPaint = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $(this).css("background", rainbowPaint);
    })
}

$(document).ready(function() {

    gridSize = 38;

    drawGrid();

    marker();

    $('[name="clear"]').click(function(){
        $(".box").css("background-color", "#FFF")
    })

    $('[name="eraser"]').click(function(){
        eraser();
    })

    $('[name="marker"]').click(function(){
        marker();
    })

    $('[name="rainbow"]').click(function(){
        rainbow();
    })

    $('[name="change"]').click(function(){
        gridSize = prompt("Please enter a number from 2-40 to change the SketchPad's grid size. For example, '16' generates a 16x16 grid.", "16");
        $('#canvas').empty();
        drawGrid();
        marker();
    })

    $('[name="toggle"]').click(function() {
        $(".box").toggleClass("outline");
    })

});