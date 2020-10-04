let tab_btn = document.querySelectorAll('.tab-btn > button');
let tab_content = document.querySelectorAll('.tab-content');

class Tabs {

	constructor(tab_btn, tab_content) {
		this.tab_btn = tab_btn;
		this.tab_content = tab_content;
	}

	open() {
		this.tab_btn.forEach(item => {
			item.addEventListener('click', (e) => {
				let target = e.target;

				this.tab_content.forEach(content => {
					if ( content.classList.contains('active') ) {
						content.classList.remove('active');
					}

					if ( target.getAttribute('data-id') == content.getAttribute('data-id') ) {
						content.classList.add('active');
					}
				});
			});
		});
	}
}

let tabs = new Tabs(tab_btn, tab_content);
tabs.open();

class Block {

	constructor(article, text, button, upload, edit, sidebar, setting) {
		this.$article = document.querySelectorAll(article);
		this.$article_text = document.querySelectorAll(text);
		this.$button = document.querySelectorAll(button);
		this.$upload = document.querySelector(upload);
		this.$edit = document.querySelector(edit);
		this.$sidebar = document.querySelector(sidebar);
		this.$setting = document.querySelector(setting);
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
					e.target.classList.add('hidden');
				});
			}
		})
	}

	// upload() {
	// 	this.$upload.addEventListener('change', (e) => {
	// 		let length = this.$upload.files.length;

	// 		for ( let i = 0; i < length; i++ ) {
	// 			console.log(this.$upload.files[i])
	// 		}
	// 	});
	// }

	// // edit() {

	// 	// let elem = {
	// 	// 	name: this.$sidebar.children[1].children[0],
	// 	// 	tagline: this.$sidebar.children[1].children[1]
	// 	// }
	// 	// // const elem_input = {
	// 	// // 	input_name: this.$sidebar.children[1].children[1],
	// 	// // 	input_tagline: this.$sidebar.children[1].children[3]
	// 	// // }

	// 	// let tags_list = [];

	// 	// for ( let item in elem ) {
	// 	// 	tags_list.push(elem[item]);
	// 	// }

	// 	// this.$sidebar.addEventListener('click', (e) => {
	// 	// 	tags_list.forEach(item => {
	// 	// 		if ( e.target == item ) {
	// 	// 			e.target.classList.add('hidden');
	
	// 	// 			let input = document.createElement('input');
	// 	// 			this.$sidebar.children[1].appendChild(input);

	// 	// 			input.addEventListener('change', (e) => {
	// 	// 				item.innerText = input.value;
	// 	// 				item.classList.remove('hidden');
	// 	// 				this.$sidebar.children[1].removeChild(input);
	// 	// 			});
	// 	// 		}
	// 	// 	});
	// 	// });
	// // }

	// add_subscribe_level() {
	// 	const arr = this.$setting;

	// 	[].forEach.call(arr.children, function(el) {
	// 		el.addEventListener('click', (e) => {

	// 			console.log(el);
	// 		})
	// 	});

	// 	// test.apply(arr.children);

	// 	// arr.addEventListener('click', (e) => {
	// 	// 	const target = e.target;

	// 	// 	console.log(arr.children);

	// 	// 	for ( const key in arr.children ) {
	// 	// 		if ( arr.children[key].classList.contains('active') ) {
	// 	// 			arr.children[key].classList.remove('active');
	// 	// 		} else {
	// 	// 			target.classList.add('active');
	// 	// 			console.log(target.getAttribute('data-sub-value'));
	// 	// 		}
	// 	// 	}
	// 	// })
	// 	// console.log(typeof(arr));
	// 	// for ( const item in arr ) {
	// 	// 	arr[item].addEventListener('click', (e) => {
	// 	// 		console.log(e.target);
	// 	// 	})
	// 	// }
	// 	// arr.forEach(item => {
	// 	// 	item.addEventListener('click', (e) => {
	// 	// 		console.log(e.target);
	// 	// 	})
	// 	// })
}

let block = new Block('.account-article', '.article-text', '.check-full-text', '.inputfile', '.account-edit', '.account-sidebar', '.subscription-levels');
block.show();
// block.upload();
// block.add_subscribe_level();