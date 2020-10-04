class Comment {
	constructor(obj) {
		this.comment = obj.comment;
		this.comment_block = obj.comment_add;
		this.textarea = obj.textarea;
		this.button = obj.button;
		this.answer_block = obj.answer_block;
		this.btn_answer = obj.btn_answer;
	}

	test() {
		console.log(this.comment);
	}

	add_comment() {
		this.button.addEventListener('click', (e) => {
			if ( this.textarea.value == "" ) {
				console.log('Ошибка');
			} else {
				const comment = {
					id: 1,
					text: this.textarea.value
				}

				this.textarea = "";
				// Запрос в БД на добавление комментария...
				// console.log(comment);
			}
		});
	}

	answer() {
		for ( let btn of this.btn_answer ) {
			btn.addEventListener('click', (e) => {
				const answer_block = e.target.nextElementSibling;

				if ( answer_block.classList.contains('active') ) {
					const textarea = answer_block.children[0].children[0];
					const parent = answer_block.parentNode.parentNode;
					const answer_json = {};

					if ( textarea.value == "" ) {
						console.log("Textarea empty");
					} else {
						answer_json.id_user = 1; // id пользователя, который оставил комментарий.
						answer_json.id_comment = Number(parent.getAttribute('data-comment-id')); // id комментария.
						answer_json.id_answer_user = 33; // id пользователя, который ответил на комментарий.
						answer_json.text = textarea.value; // Текст комментария.

						textarea.value = "";

						console.log(answer_json);

						// Запрос в БД...
						answer_block.classList.remove('active');
					}
				} else {
					answer_block.classList.add('active');
				}
			})
		}
	}
}

const obj = {
	comment: document.querySelectorAll('.comment-item'),
	comment_add: document.querySelector('.comment-add'),
	textarea: document.querySelector('.comment-add').children[0].children[0],
	button: document.querySelector('.comment-add').children[0].children[1],
	answer_block: document.querySelector('.comment-answer'),
	btn_answer: document.querySelectorAll('.btn-answer')
}

const comment = new Comment(obj);
comment.add_comment();
comment.answer();
comment.test();

/*
	Добавление комментария:
	
	1. id - пользователь, который добавил.
	2. text - текст комментария.
*/

/*
	Возражения на комментарии:

	1. id - пользователь, который возразил.
	2. id_comment - id комментария, на который возразили.
	3. text - текст комментария.
*/