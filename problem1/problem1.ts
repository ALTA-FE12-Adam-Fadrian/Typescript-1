function acronym(text : string) {
	return text.toUpperCase()
	  .split(/\s/)
	  .reduce(function(accumulator : string, word : string) {
		return accumulator + word.charAt(0);
	  }, '');
  };

  module.exports = {acronym};