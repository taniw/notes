var moves = 0;

var marker = function() {
	return moves % 2 === 0 ? "X" : "O"
}

// window.onload = function() {
// 	var squares = document.querySelectorAll(".box");
// 	for (var i=0; i<squares.length; i++) {
// 		squares[i].onclick = function(event) {
// 			if (!this.innerHTML) {
// 				this.innerHTML = marker();
// 				this.classList.add(marker());
// 				moves++;
// 			}
// 		};
// 	}
// }

$('.box').click(function(e) {
	if (!$(this).html()) {
		var turn = marker();
		$(this).html(turn);
		$(this).addClass(turn);
		moves++;
	}
});




$('.box').mouseenter(function(e) {
	$(this).css('background-color', 'green')
});

$('.box').mouseleave(function(e) {
	$(this).css('background-color', 'white')
});
