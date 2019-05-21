/**
 * Assignment11Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	/** function to handle BMI calculation */

	/** 
		*'Assignment11Controller.index()'
	*/
	calculateBMI_805: function (req, res) {

		var weight = req.body.submitted_weight;  //getting the height input ny the user
		 
		var inputheight=req.body.submitted_height; // getting the weight input by the user
	
		var cal_bmi=weight/(Math.pow(inputheight, 2)); //calculating BMI
		sails.log(weight);
		sails.log(inputheight);
		sails.log(cal_bmi);
		//return {bmi: 20} -- for ajax request
		 res.send({bmi:cal_bmi});
		
	}

	 
};

