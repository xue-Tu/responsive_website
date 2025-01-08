import CountUp from "react-countup";

function NumberCounter() {
  return (
    <div className="bg-secondary text-white py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold">
              <CountUp end={898} duration={3} enableScrollSpy={true} scrollSpyOnce={true}  />
            </p>
            <p>Expert tutors</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold">
              <CountUp  end={20000} duration={3} separator="," suffix="+" enableScrollSpy={true} scrollSpyOnce={true}  />
            </p>
            <p>Hours content</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold">
              <CountUp  end={298} duration={3} enableScrollSpy={true} scrollSpyOnce={true}  />
            </p>
            <p>Subject and courses</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold">
              <CountUp  end={72878} duration={3} separator="," suffix="+" enableScrollSpy={true} scrollSpyOnce={true}  />
            </p>
            <p>Active students</p>
          </div>
       
        </div>
    </div>
  );
}

export default NumberCounter;
