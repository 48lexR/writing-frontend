const worksDiv = document.querySelector('.works')[0];

const loadWorks = async () => {
	const rows = fetch('/works/');
	const formatted = rows.forEach(row => {
		return `<tr><td>${ row.title }</td><td>${ row.description }</td><td><small>Created at: ${ row.created_at }</small></td></tr>`
	}).join('');
	worksDiv.innerHTML = `<table><thead><th>Title</th><th>Description</th><th>Created</th></thead>${ formatted }</table>`;
});
