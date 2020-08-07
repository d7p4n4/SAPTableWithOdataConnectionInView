sap.ui.jsview("demo.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo.demo
	*/ 
	getControllerName : function() {
		return "demo.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demo.demo
	*/ 
	createContent : function(oController) {
		
		var oLayout = new sap.ui.commons.layout.MatrixLayout({width:"100%"});
		
			
		
		/*var oModel = new sap.ui.model.odata.ODataModel("https://localhost:44315/odata/", true);

		var oModel = new sap.ui.model.odata.v4.ODataModel({
			groupId: "$direct",
			synchronizationMode: "None",
			serviceUrl: "https://localhost:44315/odata/"
		})*/

		var oControl;
		this.oSHTable = new sap.ui.table.Table("BSTAB1",{
				 visibleRowCount: 10,
				 });
		this.oSHTable.setTitle("Users");
		/*
		oControl = new sap.ui.commons.TextView().bindProperty("text","id");
		this.oSHTable.addColumn(new sap.ui.table.Column({label:new sap.ui.commons.Label({text: "ID"}), 
			template: oControl, sortProperty: "id", filterProperty: "id" }));
   

		 
	  var oControl;
	  this.oSHTable = new sap.ui.table.Table("BSTAB1",{
			   visibleRowCount: 10,
			   });
	  this.oSHTable.setTitle("Users");
	  
	  */
		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Name"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "/name"),
			sortProperty: "name",
			filterProperty: "name",
			});

		this.oSHTable.addColumn(oColumn);
		/*
		oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Name"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "name"),
			sortProperty: "name",
			filterProperty: "name",
			});

		this.oSHTable.addColumn(oColumn);
		
		oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Email"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "email"),
			sortProperty: "email",
			filterProperty: "email",
			});

		this.oSHTable.addColumn(oColumn);
 		 
    	  //Table Column Definitions
    	  var oMeta = oModel.getServiceMetadata();
          var oControl;
          
	   	  for ( var i = 0; i < oMeta.dataServices.schema[0].entityType[0].property.length; i++) {
	   		  var property = oMeta.dataServices.schema[0].entityType[0].property[i];
	   		  
	          oControl = new sap.ui.commons.TextField().bindProperty("value",property.name);
	          oTable.addColumn(new sap.ui.table.Column({label:new sap.ui.commons.Label({text: property.name}), template: oControl, sortProperty: property.name, filterProperty: property.name, filterOperator: sap.ui.model.FilterOperator.EQ, flexible: true, width: "125px" }));
		  }
		  
	      //this.oSHTable.setModel(oModel);
	     var sort1 = new sap.ui.model.Sorter("id", true);
	     
	     this.oSHTable.bindRows({
				path: "/ac4ypersistentchildodata",
	    	    parameters: {
	    	    	$select: "id,name"},
	    	    //sorter: sort1
	    	});
		 */
		 
		 this.oSHTable.setTitle("Users");
		 oLayout.createRow(this.oSHTable);
			
		return oLayout;
		 
	}

});
 