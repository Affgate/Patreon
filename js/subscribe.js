class Subscribe {
	constructor(btn, form) {
		this.$btn = document.querySelector(btn);
		this.$input = document.querySelectorAll(form);
	}

	add_new_subscribe_level() {
		this.$btn.addEventListener('click', (e) => {
			e.preventDefault();
			const info = {};

			this.check(info);
			this.add(info);
		})
	}

	check(data) {
		for ( let item of this.$input ) {
			if ( item.type == "text" ) {
				data.title = item.value;
				item.value = "";
			} else if ( item.type == "textarea" ) {
				data.text = item.value;
				item.value = "";
			}

			if ( item.type == "number" ) {
				data.price = item.value;
				item.value = "";
			}
		}

		return data;
	}

	add(data) {
		if ( data.price == "" || data.title == "" || data.text == "" ) {
			console.log('asd');
		} else {
			console.log('Теперь, когда Стёпа напишет API, я смогу отправить запрос на сервер и добавить новый уровень подписки в БД.')
		}
	}
}

const subscribe = new Subscribe('#add_sub', '.form-input');
subscribe.add_new_subscribe_level();