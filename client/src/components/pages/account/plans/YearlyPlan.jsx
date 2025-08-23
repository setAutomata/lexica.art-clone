import Card from "../../../ui_elements/Card";
import CheckMark from "../../../../assets/images/checkMark.svg";

function YearlyPlan({ changePlan }) {
  return (
    <>
      <Card
        plan="Max plan"
        price="48"
        billingMethod="Billing annually"
        planBtn="View monthly billing"
        genPerMonth="7,000"
        limit="Unlimited"
        gen="slow generations with daily cap"
        changePlan={changePlan}
      >
        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          3 concurrent fast jobs <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Images are private <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Full commercial license <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Custom aspect ratios <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Image uploads <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Optional credit top-ups <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Early access to new models <br />
        </div>
      </Card>
      {/* ---------------------------------------------------------- */}
      <Card
        recommended={true}
        plan="Pro plan"
        price="24"
        billingMethod="Billing annually"
        planBtn="View monthly billing"
        genPerMonth="3,000"
        limit="Unlimited"
        gen="slow generations with daily cap"
        changePlan={changePlan}
      >
        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          3 concurrent fast jobs <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Images are private <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Full commercial license <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Custom aspect ratios <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Image uploads <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Optional credit top-ups <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Early access to new models <br />
        </div>
      </Card>
      {/* ---------------------------------------------------------- */}
      <Card
        plan="Starter plan"
        price="8"
        billingMethod="Billing annually"
        planBtn="View monthly billing"
        genPerMonth="1,000"
        limit="No"
        gen="slow generations"
        changePlan={changePlan}
      >
        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          2 concurrent fast jobs <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Images are private <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Personal commercial license <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Custom aspect ratios <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Image uploads <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Optional credit top-ups <br />
        </div>
        
        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Early access to new models <br />
        </div>
      </Card>
    </>
  );
}

export default YearlyPlan;
