export const convertStringToUrlUseable: (str: string) => string = str => {
	const regex = /[^a-zA-Z\d\s:]/g,
		categoryOnlyText = str.replaceAll(regex, "").replaceAll(" ", "");

	return categoryOnlyText;
};
