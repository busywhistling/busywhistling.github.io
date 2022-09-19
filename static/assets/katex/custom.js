var mymacros = {
  "\\1": "\\mathds{1}",
  "\\<": "\\langle",
  "\\>": "\\rangle",
  "\\Tilde": "\\widetilde",
  "\\w": "\\omega",
  "\\C": "\\mathbb{C}",
  "\\d": "\\, \\text{d}",
  "\\inj": "\\hookrightarrow",
  "\\Q": "\\mathbb{Q}",
  "\\In": "\\subseteq",
  "\\del": "\\partial",
  "\\isom": "\\simeq",
  "\\gives": "\\rightsquigarrow",
  "\\main": "\\text{main}",
  "\\X": "\\times",
  "\\vol": "\\text{vol}",
  "\\L": "\\mathcal{L}",
  "\\virdim": "\\text{virdim}",
  "\\inc": "\\text{in}",
  "\\out": "\\text{out}",
  "\\op": "\\text{op}",
  "\\x": "\\times",
  "\\tensor": "\\otimes",
  "\\Id": "\\text{Id}",
  "\\End": "\\text{End}",
  "\\Hom": "\\text{Hom}",
  "\\Aut": "\\text{Aut}",
  "\\Free": "\\text{Free}",
  "\\transverse": "\\pitchfork",
  "\\delbar": "\\bar{\\partial}",
  "\\Bar": "\\overline",
  "\\ind": "\\text{ind}",
  "\\CZ": "\\text{CZ}",
  "\\rk": "\\text{rk}",
  "\\Sp": "\\text{Sp}",
  "\\Mat": "\\text{Mat}",
  "\\st" : "\\; | \\;",
  "\\diag": "\\text{diag}",
  "\\SP": "\\text{SP}",
  "\\Sign": "\\text{Sign}",
  "\\sign": "\\text{sign}",
  "\\Hat": "\\widehat",
  "\\spec": "\\text{spec}",
  "\\Crit": "\\text{Crit}",
  "\\M": "\\mathcal{M}",
  "\\c": "\\mathscr{C}",
  "\\cinf": "\\c^{\\infty}",
  "\\F": "\\mathbb{F}",
  "\\R": "\\mathbb{R}",
  "\\C": "\\mathbb{C}",
  "\\Fred": "\\text{Fred}",
  "\\coker": "\\text{coker }",
  "\\im": "\\text{im }",
  "\\std": "\\text{std}"

};

function myRender()
{
	document.body.innerHTML = document.body.innerHTML.replace(/\\\$/g, '\%\%');
	document.body.innerHTML = document.body.innerHTML.replace(/\$([\s\S]+?)\$/g, '<span class=\"maths\">$1</span>');
	document.body.innerHTML = document.body.innerHTML.replace(/\\\\\[/g, '%%%');
	document.body.innerHTML = document.body.innerHTML.replace(/\\\[/g, '<div class=\"maths\">');
	document.body.innerHTML = document.body.innerHTML.replace(/\\\]/g, '</div>');
	document.body.innerHTML = document.body.innerHTML.replace(/%%%/g, '\\\\\[');
	document.body.innerHTML = document.body.innerHTML.replace(/\\\(/g, '<span class=\"maths\">');
	document.body.innerHTML = document.body.innerHTML.replace(/\\\)/g, '</span>');
	document.body.innerHTML = document.body.innerHTML.replace(/\%\%/g, '\$');

	// Get all <div class ="maths"> elements in the document

	var x = document.getElementsByClassName('maths');

	for (var i = 0; i < x.length; i++) {
		try {
			if(x[i].tagName == "DIV"){
				t= katex.render(x[i].textContent,x[i],{macros : mymacros, displayMode: true });
			} else {
				t= katex.render(x[i].textContent,x[i], {macros: mymacros});
			}
		}
		catch(err) {
			x[i].style.color = 'red';
			x[i].textContent= err;
		}

	}

	document.body.innerHTML = document.body.innerHTML.replace(/\%\[/g, '\\\[');
	document.body.innerHTML = document.body.innerHTML.replace(/\%\]/g, '\\\]');
	document.body.innerHTML = document.body.innerHTML.replace(/\%\(/g, '\\\(');
	document.body.innerHTML = document.body.innerHTML.replace(/\%\)/g, '\\\)');
}

myRender();
