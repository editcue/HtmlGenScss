function generateElementName(element) {
	let elementTag = element.tagName,
			selector = elementTag,
			className = element.className,
			id = element.id;
	haveId = false,
			haveClass = false;
	selector = ''
	if (element.id) {
		selector += `#${element.id}`;
		haveId = true;
	}
	if (element.className) {
		selector += `.${className}`;
		haveClass = true;
	}
	if (!haveId && !haveClass) {
		let randomHex = 'C' + Math.floor(Math.random() * 16777215).toString(16);
		let classNamesNew = element.className ? element.classNames += ` ${randomHex}` : randomHex
		element.classList.add(classNamesNew)
		console.log(element.classNames);
		selector += `.${randomHex}`;
	}
	return selector;
}

function inlineStyleStringToMap(inlineStyleString) {
	let styleMap = new Map();
	if (!inlineStyleString) return styleMap;
	// 使用正则表达式匹配分号，但是忽略引号内的分号
	let styleArray = inlineStyleString.split(/;(?=(?:(?:[^"]*"){2})*[^"]*$)/);
	styleArray.forEach(function (style) {
		let styleKV = style.split(':');
		if (styleKV.length === 2) {
			// 转义特殊字符
			let key = styleKV[0].trim().replace(/[`$\\]/g, '\\$&');
			let value = styleKV[1].trim().replace(/[`$\\]/g, '\\$&');
			styleMap.set(key, value);
		}
	})
	return styleMap;
}

function generateNestedScssByElementTree(elementRoot, isRoot = false) {
	let scss = '';
	let element = elementRoot;
	let selector = generateElementName(element);
	let elementStyle = elementRoot.style;
	let elementChildren = elementRoot.children;
	let elementChildrenScss = '';
	if (elementChildren) {
		for (let i = 0; i < elementChildren.length; i++) {
			elementChildrenScss += generateNestedScssByElementTree(elementChildren[i]);
		}
	}
	let inlineStyleString = element.getAttribute('style');
	let inlineStyleMap = inlineStyleStringToMap(inlineStyleString);
	let propertiesScss = '';
	inlineStyleMap.forEach(function (value, key) {
		propertiesScss += `  ${key}: ${value};\n`;
	})
	elementRoot.removeAttribute('style');
	if (isRoot) {
		scss += `${elementChildrenScss}`;
		return scss;
	} else {
		scss += `${selector}{\n${propertiesScss}\n${elementChildrenScss}\n}\n`;
	}
	return scss;
}

