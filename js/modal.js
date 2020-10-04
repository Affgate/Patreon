class Modal {
	constructor(obj) {
		this.obj = obj;
	}

	open() {
		this.obj.open.addEventListener('click', (e) => {
			if ( !this.obj.modal.classList.contains('active') ) {
				this.obj.modal.classList.add('active');
			}
		});
	}

	close() {
		const close = [this.obj.close, this.obj.overlay, this.obj.skip];

		close.forEach(item => {
			item.addEventListener('click', (e) => {
				this.obj.modal.classList.remove('active');
			})
		})
	}

	save() {
		this.obj.save.addEventListener('click', (e) => {
			const profile_info = {};

			if ( this.obj.content[0].value != "" ) {
				profile_info.img = this.obj.content[0].value;
			}

			if ( this.obj.content[1].value != "" ) {
				profile_info.name = this.obj.content[1].value;
			}

			if ( this.obj.content[2].value != "" ) {
				profile_info.status = this.obj.content[2].value;
			}

			if ( this.obj.content[3].value != "" ) {
				profile_info.age = this.obj.content[3].value;
			}

			if ( this.obj.content[4].value != "" ) {
				profile_info.gender = this.obj.content[4].value;
			}

			if ( this.obj.content[5].value != "" ) {
				profile_info.posts = this.obj.content[5].value;
			}

			console.log(profile_info);
			this.obj.modal.classList.remove('active');
		})
	}
}

const obj = {
	modal: document.querySelector('.modal'),
	open: document.querySelector('#modal-open'),
	close: document.querySelector('#modal-close'),
	overlay: document.querySelector('.modal-overlay'),
	content: document.querySelectorAll('.item-form'),
	save: document.querySelector('#modal-save'),
	skip: document.querySelector('#modal-skip')
}

const modal = new Modal(obj);
modal.open();
modal.close();
modal.save();

//open, close, form