




exports.findAllRepairs = async (req, res) => {
    try {
    
      res.status(200).json({
          status:'success',
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "fail",
        message: "An error has occurred, talk to the administrator",
      });
    }
  };
   
  exports.findOneRepair = (req, res) => {
    try {
    
      res.status(200).json({
          status:'success',
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "fail",
        message: "An error has occurred, talk to the administrator",
      });
    }
  };
  
  exports.createRepair = (req, res) => {
    try {
    
      res.status(200).json({
          status:'success',
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "fail",
        message: "An error has occurred, talk to the administrator",
      });
    }
  };
   
  exports.updateRepair = (req, res) => {
    try {
    
      res.status(200).json({
          status:'success',
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "fail",
        message: "An error has occurred, talk to the administrator",
      });
    }
  };
  
  exports.deleteRepair = (req, res) => {
    try {
    
      res.status(200).json({
          status:'success',
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "fail",
        message: "An error has occurred, talk to the administrator",
      });
    }
  };