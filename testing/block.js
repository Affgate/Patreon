class Block {

	constructor(article, text, button) {
		this.$article = document.querySelectorAll(article);
		this.$article_text = document.querySelectorAll(text);
		this.$button = document.querySelectorAll(button);
	}

	show(e) {
		this.$article.forEach(article => {
			let wrapper_text = article.children[1].children[0];
			let full_text = wrapper_text.innerText;

			if ( wrapper_text.innerText.length >= 500 ) {
				wrapper_text.innerText = wrapper_text.innerText.substr(0, 500) + '...';
			}

			if ( article.lastElementChild.className == this.$button[0].className ) {
				article.lastElementChild.addEventListener('click', (e) => {
					let target = e.target.parentNode;
					let text = target.children[1].children[0];

					text.innerText = full_text;
				});
			}
		})

		// this.$article_text.forEach(text, (e) => {

		// 	let wrapper_text = text.children[0];
		// 	let full_text = wrapper_text.innerText;

			// if ( wrapper_text.innerText.length >= 500 ) {
			// 	wrapper_text.innerText = wrapper_text.innerText.substr(0, 500) + '...';
			// }

		// 	this.$button.forEach(button => {
		// 		button.addEventListener('click', (e) => {
		// 			console.log(wrapper_text.e.target);
		// 		})
		// 	});
		// });

		// this.$button.forEach(button => {
		// 	button.addEventListener('click', (e) => {
		// 		let target = e.target;

		// 		console.log(full_text);
		// 	})
		// });
	}
}

let block = new Block('.account-article', '.article-text', '.check-full-text');
block.show();