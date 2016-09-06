var test = {
	pow: function (number,power) {
		var result = 1;

		if ((number === 0 && power === 0) || (number === 0 && power < 0) ) return "error";
		if (power < 0) {

			for(var i=0; i>power;i--){
				result*= 1 / number;
			};
			return result;
		};

		if ( !(power^0 === power) ) return "error";
		for(var i=0; i<power;i++){
			result*=number;
		};
		return result;
	}
}
module.exports = test;
