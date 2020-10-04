let tab_btn = document.querySelectorAll('.tabs > .tab-btn > button');
let tab_content = document.querySelectorAll('.tabs > div.tab-content');

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