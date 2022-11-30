function Buttons({}) {
     return (
        <div className="col">
            <div className="row">
                <div className="col-lg-3 col-xl-12" style="height: 102px;"><button className="btn btn-primary" type="button" style="width: 117.6875px;height: 78px;"><i className="far fa-plus-square" style="font-size: 40px;"></i></button></div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-xl-12" style="height: 102px;"><button className="btn btn-primary" type="button" style="width: 117.6875px;height: 78px;"><i className="far fa-edit" style="font-size: 39px;"></i></button></div>
            </div>
            <div className="row">
                <div className="col-lg-2 col-xl-12" style="height: 102px;"><button className="btn btn-primary" type="button" style="width: 117.6875px;height: 78px;"><i className="fas fa-trash" style="font-size: 39px;"></i></button></div>
            </div>
        </div>
      );
} 

export default Buttons;
