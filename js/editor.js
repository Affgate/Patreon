var toolbarOptions = [
		// ['bold', 'underline'],        // toggled buttons
		// ['blockquote'],

		// [{ 'header': 1 }, { 'header': 2 }],               // custom button values
		// [{ 'list': 'ordered'}, { 'list': 'bullet' }],
		// [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
		// [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
		// [{ 'direction': 'rtl' }],                         // text direction

		// [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
		// [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

		// [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
		// [{ 'font': [] }],
		// [{ 'align': [] }],
		[{ 'image': true }]

 // ['clean']                                         // remove formatting button
 ];

 var quill = new Quill('#editor', {
 	modules: {
 		toolbar: toolbarOptions
 	},
 	theme: 'snow'
 });

 class Editor {
 	constructor(btn, demo) {
 		this.$btn = document.querySelector(btn);
 		this.$demo = document.querySelector(demo);
 		this.data = [];
 	}

 	getContents() {
 		this.$btn.addEventListener('click', (e) => {
 			const delta = quill.getContents();

 			for ( const i in delta.ops ) {

 				if ( delta.ops[i].insert == "\n" ) {
 					delta.ops[i].delete;
 				} else {
 					this.data.push(delta.ops[i].insert);
 				}
 			}

 			this.handler();
 		})
 	}

 	handler() {
 		const html = this.data.map(item => {
 			if ( typeof item === "string" ) {
 				const p = document.createElement('p');
 				p.innerHTML = item;

 				return p;
 			} else if ( item.image ) {
 				const image = new Image();
 				image.src = item.image;

 				return image;
 			}
 		});

 		this.addContents(html);
 	}

 	addContents(data) {
 		data.forEach( item => {
 			this.$demo.appendChild(item);
 		} );
 	}
 }

 const editor = new Editor('.editor_btn', '.account-demo');
 editor.getContents();